import {gql} from "apollo-boost";

export const ALL_POSTS = gql`
    query allPosts {
        allPosts {
            id
            title
            contents
            summary
            createdAt
            user {
                id
                username
            }
            images {
                url
            }
            categories {
                title
            }
        }
    }
`;

export const SEARCH_POST = gql`
    query searchPost($term: String!) {
        searchPost(term: $term) {
            id
            title
            contents
            summary
            createdAt
            user {
                id
                username
            }
            images {
                url
            }
            categories {
                title
            }
        }
    }
`;
