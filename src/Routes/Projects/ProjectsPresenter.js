import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: grid;
  overflow-y: scroll;
  ${({theme}) => `
      @media ${theme.mobileL} {
        grid-template-columns: 50% 50%;
      }

      @media ${theme.laptop} {
        grid-template-columns: 25% 25% 25% 25%;
      }
    `}
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 50% 20% 5% 25%;
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  min-height: 400px;
  max-height: 600px;
  margin: 5px;
`;

const ThumbnailBox = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TNImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 10vh;
  margin: 10px 10px;
`;

const UserBox = styled.div`
  margin: 1vh;
`;

const User = styled(Link)`
  font-weight: bold;
  color: ${props => props.theme.darkBlueColor};
  font-size: 0.8rem;
`;

const TitleBox = styled.div`
  margin: 1vh;
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 1.25rem
  color: ${props => props.theme.blackColor};
`;

const CreatedAt = styled.div`
  margin: 1vh;
  font-size: 0.8rem;
  color: ${props => props.theme.greyColor};
`;

const HR = styled.div`
  margin: 2vh;
  hr{
    border: 1px solid ${props => props.theme.lightGreyColor};
  }
`;

const SummaryBox = styled.div`
  margin: 2vh;
  color: ${props => props.theme.greyColor};
  font-size: 0.8rem;
  height: 10vh;
`;

const ProjectsPresenter = ({posts}) => {
    return (
        <Container>
            {posts.map(
                ({
                     id,
                     title,
                     images,
                     user: {id: userId, username},
                     summary,
                     createdAt
                 }) => (
                    <Card key={id}>
                        <ThumbnailBox>
                            <Link to={`/project?id=${id}`}>
                                <TNImg src={images[0].url}/>
                            </Link>
                        </ThumbnailBox>
                        <Header>
                            <UserBox>
                                <User to={`/profile?username=${username}`}>{username}</User>
                            </UserBox>
                            <TitleBox>
                                <Title to={`/project?id=${id}`}>{title}</Title>
                            </TitleBox>
                            <CreatedAt>{new Date(createdAt).toLocaleDateString()}</CreatedAt>
                        </Header>
                        <HR>
                            <hr/>
                        </HR>
                        <SummaryBox>{summary}</SummaryBox>
                    </Card>
                )
            )}
        </Container>
    );
};

export default React.memo(ProjectsPresenter);
