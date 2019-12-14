/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import {Helmet} from "react-helmet";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Container = styled.div`
  ${props => props.theme.whiteBox}
  display: flex;
  flex-direction: column;
  min-height: 400px;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const Header = styled.div`
  height: 100px;
  margin: 2vh;
`;

const UserBox = styled.div``;

const User = styled(Link)`
  margin-bottom: 5px;
  color: ${props => props.theme.darkBlueColor};
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: 10px 0;
`;

const CreatedAt = styled.div`
  color: ${props => props.theme.greyColor};
`;

const HR = styled.div`
  margin: 2vh;
  color: ${props => props.theme.lightGreyColor};
`;

const Images = styled.div`
  display: grid;
  margin-bottom: 3vh;
  ${({theme}) => `
      @media ${theme.mobileL} {
        grid-template-columns: 50% 50%;
      }

      @media ${theme.laptop} {
        grid-template-columns: 25% 25% 25% 25%;
      }
    `}
`;

const ImageBox = styled.div`
  margin: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius};
`;

const ContentsBox = styled.div`
  margin: 2vh;
`;

const Contents = styled.div`
  line-height: 2;
  color: ${props => props.theme.greyColor};
`;

const Categories = styled.div`
  margin: 2vh;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  ${({theme}) => `
      @media ${theme.tablet} {
          grid-template-columns: repeat(5, 1fr);
      }
    `};
  grid-gap: 1rem;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.darkBlueColor};
  &:hover {
    background-color:${props => props.theme.darkBlueColor};
    cursor:pointer;
    a {
      color:white;
    }
  }
`;

const Category = styled(Link)`
  color: ${props => props.theme.darkBlueColor};
`;

const CommentForm = styled.form`
  margin: 2vh;
`;

const CommentCount = styled.div`
  margin: 2vh;
  margin-left: 20%;
  font-size: 1rem;
  font-weight: bold;
  ${({theme}) => `
      @media ${theme.tablet} {
          font-size: 2rem;
      }
    `}
`;

const CommentInput = styled.div`
  width: 100%;
  text-align: center;
  input {
    width: 60%;
    height: 2.5rem;
    font-size: 0.5rem;
    ${({theme}) => `
      @media ${theme.mobileM} {
          font-size: 1rem;
      }
    `}
  }
`;

const CommentButton = styled.div`
  margin: 2vh 0;
  text-align: right;
  margin-right: 20%;
  button {
    font-size: 0.5rem;
    width: 3rem;
    height: 2rem;
  }
`;

const RequestLoginBox = styled.div`
  width: 100%;
  text-align: center;
  input {
    width: 60%;
    height: 2.5rem;
    font-size: 0.5rem;
    ${({theme}) => `
      @media ${theme.mobileM} {
          font-size: 1rem;
      }
    `}
  }
`;

const RequestLogin = styled(Link)`
  color: ${props => props.theme.darkBlueColor};
  font-weight: bold;
  line-height: 2;
`;

const CommentList = styled.div`
  width: 60%;
  margin-left: 20%;
  border: 1px solid ${props => props.theme.greyColor};
  border-radius: ${props => props.theme.borderRadius};
`;

const Comment = styled.div`
  margin: 2vh;
  div {
    margin-bottom: 1vh;
    color: ${props => props.theme.blackColor};
    font-size: 0.5rem;
    ${({theme}) => `
      @media ${theme.mobileM} {
          font-size: 1rem;
      }
    `}
  }
`;

const parseDate = date => new Date(date).toLocaleDateString();

export default ({
                    data: {id, user, title, contents, createdAt, images, comments, categories},
                    value,
                    onChange,
                    onSubmit,
                    onClick,
                    isLoggedIn
                }) => {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{title}</title>
            </Helmet>
            <Header>
                <UserBox>
                    <User to={`/profile?userId=${user.id}`}>{user.username}</User>
                </UserBox>
                <Title>{title}</Title>
                <CreatedAt>{parseDate(createdAt)}</CreatedAt>
            </Header>
            <HR>
                <hr/>
            </HR>
            <Images>
                {images.map(image => (
                    <ImageBox key={image.id}>
                        <Image src={image.url}/>
                    </ImageBox>
                ))}
            </Images>
            <ContentsBox>
                <Contents>{ReactHtmlParser(contents)}</Contents>
            </ContentsBox>
            <Categories>
                {categories.map(({id, title}) => (
                    <CategoryBox key={id} onClick={() => onClick(title)}>
                        <Category to={`/projects/${title}`}>{title}</Category>
                    </CategoryBox>
                ))}
            </Categories>
            <HR>
                <hr/>
            </HR>
            <CommentForm onSubmit={onSubmit}>
                <CommentCount>{`${comments.length} Comments`}</CommentCount>
                {isLoggedIn ? (
                    <>
                        <CommentInput>
                            <Input
                                placeholder={"Enter Comment here"}
                                required={true}
                                value={value}
                                onChange={onChange}
                            />
                        </CommentInput>
                        <CommentButton>
                            <Button text={"Add Comment"}/>
                        </CommentButton>
                    </>
                ) : (
                    <RequestLoginBox>
                        <RequestLogin to={"/login"}>
                            You must log in to comment!
                            <br/> Click here to log in <span role="img">😁</span>
                        </RequestLogin>
                    </RequestLoginBox>
                )}
            </CommentForm>
            <CommentList>
                {comments.map(comment => (
                    <React.Fragment key={comment.id}>
                        <Comment>
                            <UserBox>
                                <User to={`/profile?userId=${comment.user.id}`}>
                                    {comment.user.username}
                                </User>
                            </UserBox>
                            <CreatedAt>{parseDate(comment.createdAt)}</CreatedAt>
                            <ContentsBox>
                                <Contents>{comment.contents}</Contents>
                            </ContentsBox>
                        </Comment>
                        <HR>
                            <hr/>
                        </HR>
                    </React.Fragment>
                ))}
            </CommentList>
        </Container>
    );
};
