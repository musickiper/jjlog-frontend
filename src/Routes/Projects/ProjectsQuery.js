import { gql } from "apollo-boost";

export const ALL_POSTS = gql`
  query allPosts {
    allPosts {
      id
      title
      contents
      summary
      createdAt
      user {
        username
      }
      images {
        url
      }
    }
  }
`;
