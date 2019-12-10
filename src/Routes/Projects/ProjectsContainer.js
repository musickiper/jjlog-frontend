import React from "react";
import ProjectsPresenter from "./ProjectsPresenter";
import { useQuery } from "react-apollo-hooks";
import { ALL_POSTS } from "./ProjectsQuery";

const ProjectsContainer = () => {
  const { data, loading } = useQuery(ALL_POSTS);
  return loading ? (
    <div>loading...</div>
  ) : (
    <ProjectsPresenter posts={data.allPosts} />
  );
};

export default React.memo(ProjectsContainer);
