import React from "react";
import { useQuery } from "react-apollo-hooks";
import queryString from "query-string";
import ProjectsPresenter from "./ProjectsPresenter";
import { ALL_POSTS, SEARCH_POST } from "./ProjectsQueries";
import { CircularProgress } from "@material-ui/core";

const ProjectsContainer = ({ match, location }) => {
  const { term } = queryString.parse(location.search);
  const { category } = match.params;

  const getAllPostsQuery = useQuery(ALL_POSTS);
  const searchPost = useQuery(SEARCH_POST, { variables: { term: term || "" } });
  const { data, loading, error } = term ? searchPost : getAllPostsQuery;

  if (error) {
    console.error(error);
    return "";
  }

  if (loading || !data) {
    return <CircularProgress />;
  }

  if (term) {
    const { searchPost } = data;
    const posts = category
      ? searchPost.filter(post => {
          return post.categories.filter(c => c.title === category).length !== 0;
        })
      : searchPost;
    return <ProjectsPresenter posts={posts} />;
  } else {
    const { allPosts } = data;
    const posts = category
      ? allPosts.filter(post => {
          return post.categories.filter(c => c.title === category).length !== 0;
        })
      : allPosts;
    return <ProjectsPresenter posts={posts} />;
  }
};

export default React.memo(ProjectsContainer);
