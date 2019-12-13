import React from "react";
import ProjectsPresenter from "./ProjectsPresenter";
import { useQuery } from "react-apollo-hooks";
import { ALL_POSTS } from "./ProjectsQueries";

const ProjectsContainer = ({ match }) => {
  const category = match.params.category;

  const getAllPostsQuery = useQuery(ALL_POSTS);
  const { data, loading } = getAllPostsQuery;

  return loading ? (
    <div>loading...</div>
  ) : !category ? (
    <ProjectsPresenter posts={data.allPosts} />
  ) : (
    <div>Hello</div>
  );
};

export default React.memo(ProjectsContainer);
