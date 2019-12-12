import React from "react";
import ProjectsPresenter from "./ProjectsPresenter";
import { useQuery } from "react-apollo-hooks";
import { ALL_POSTS } from "./ProjectsQueries";

const ProjectsContainer = () => {
  const getAllPostsQuery = useQuery(ALL_POSTS);
  const { data, loading } = getAllPostsQuery;

  return loading ? (
    <div>loading...</div>
  ) : (
    <ProjectsPresenter posts={data.allPosts} />
  );
};

export default React.memo(ProjectsContainer);
