import { gql } from "apollo-boost";

export const IS_LOGGED_IN = gql(`
    {
        isLoggedIn @client
    }
`);

export const SEE_FULL_POST = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      id
      title
      contents
      createdAt
      user {
        id
        username
      }
      images {
        id
        url
      }
      comments {
        id
        contents
        createdAt
        user {
          id
          username
        }
      }
      categories {
        id
        title
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($contents: String!, $postId: String!) {
    createComment(contents: $contents, postId: $postId)
  }
`;
