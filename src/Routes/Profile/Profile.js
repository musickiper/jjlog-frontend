import React from "react";
import styled from "styled-components";
import queryString from "query-string";
import { toast } from "react-toastify";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const AvatarBox = styled.div`
  width: 10vh;
  height: 10vh;
  margin-bottom: 1vh;
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  span:nth-child(1) {
    font-weight: bold;
    font-size: 0.5rem;
    color: ${props => props.theme.darkBlueColor};
    ${({ theme }) => `
        @media ${theme.desktop} {
            font-size: 1rem;
        }
    `};
  }
  span:nth-child(3) {
    font-size: 1rem;
    font-weight: bold;
    ${({ theme }) => `
        @media ${theme.desktop} {
            font-size: 2rem;
        }
    `};
  }
  span:nth-child(4) {
    margin-top: 0.5rem;
    font-size: 0.5rem;
    ${({ theme }) => `
        @media ${theme.desktop} {
            font-size: 1rem;
        }
    `};
  }
`;

const ActivitiesBox = styled.div`
  height: 30vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: white;
  margin: 2vh;
  padding: 2vh;
`;

const ActivityTitle = styled.span`
  font: 0.7rem solid ${props => props.theme.blackColor};
  font-weight: bold;
  margin-bottom: 1vh;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: ${props => props.theme.blackColor};
    font-weight: bold;
  }
`;

const PostsBox = styled.div`
  height: 20vh;
  overflow-y: scroll;
`;

const PostBox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 1rem;
  width: 20vh;
  height: 15vh;
  border: 1px solid ${props => props.theme.lightGreyColor};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1rem;
`;

const PostPictureBox = styled(Link)`
  padding: 0.5rem;
`;

const PostPicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    opacity: 0.5;
  }
`;

const PostContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  font-size: 0.5rem;
`;

const PostTitle = styled.div`
  width: 100%;
  height: 50%;
  font-weight: bold;
`;

const PostText = styled.div`
  width: 100%;
  height: 50%;
  color: ${props => props.theme.greyColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: ${props => props.theme.blackColor};
    font-weight: bold;
  }
`;

const CommentsBox = styled.div`
  height: 20vh;
  overflow-y: scroll;
`;

const CommentBox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  font-size: 1rem;
  width: 20vh;
  height: 15vh;
  border: 1px solid ${props => props.theme.lightGreyColor};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 1rem;
`;

const CommentPictureBox = styled(Link)`
  padding: 0.5rem;
`;

const CommentPicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    opacity: 0.5;
  }
`;

const CommentContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  font-size: 0.5rem;
`;

const CommentPostTitle = styled.div`
  width: 100%;
  height: 50%;
  font-weight: bold;
`;

const CommentText = styled.div`
  width: 100%;
  height: 50%;
  color: ${props => props.theme.greyColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HR = styled.div`
  hr {
    border: 1px solid ${props => props.theme.lightGreyColor};
  }
`;

const USER_BY_USERNAME = gql`
  query userById($username: String!) {
    userByUsername(username: $username) {
      avatar
      username
      firstName
      lastName
      bio
      posts {
        id
        title
        summary
        images {
          url
        }
      }
      comments {
        id
        contents
        post {
          id
          title
          images {
            url
          }
        }
      }
    }
  }
`;

const Profile = ({ history }) => {
  const { username } = queryString.parse(history.location.search);
  const userByUsername = useQuery(USER_BY_USERNAME, {
    variables: {
      username: username || ""
    }
  });

  const { data, loading, error } = userByUsername;

  if (error) {
    toast.error("Invalid User Name");
  }

  if (loading) {
    return <CircularProgress />;
  } else {
    const {
      userByUsername: {
        username,
        firstName,
        lastName,
        bio,
        avatar,
        posts,
        comments
      }
    } = data;
    return (
      <Container>
        <ProfileBox>
          <AvatarBox>
            <Avatar src={avatar} />
          </AvatarBox>
          <UserBox>
            <span>@ {username}</span>
            <HR>
              <hr />
            </HR>
            <span>{`${firstName} ${lastName}`}</span>
            <span>{bio || ""}</span>
          </UserBox>
        </ProfileBox>
        <ActivitiesBox>
          <PostsWrapper>
            <ActivityTitle>Posts</ActivityTitle>
            <PostsBox>
              {posts.map(({ id, title, summary, images }) => (
                <PostBox key={id}>
                  <PostPictureBox to={`/project?id=${id}`}>
                    <PostPicture src={images[0].url} />
                  </PostPictureBox>
                  <PostContentsBox>
                    <PostTitle>{title}</PostTitle>
                    <PostText>{summary}</PostText>
                  </PostContentsBox>
                </PostBox>
              ))}
            </PostsBox>
          </PostsWrapper>
          <CommentsWrapper>
            <ActivityTitle>Comments</ActivityTitle>
            <CommentsBox>
              {comments.map(({ id, contents, post }) => (
                <CommentBox key={id}>
                  <CommentPictureBox to={`/project?id=${post.id}`}>
                    <CommentPicture src={post.images[0].url} />
                  </CommentPictureBox>
                  <CommentContentsBox>
                    <CommentPostTitle>{post.title}</CommentPostTitle>
                    <CommentText>{contents}</CommentText>
                  </CommentContentsBox>
                </CommentBox>
              ))}
            </CommentsBox>
          </CommentsWrapper>
        </ActivitiesBox>
      </Container>
    );
  }
};
export default Profile;
