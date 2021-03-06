import React, { useState, useCallback } from "react";
import ProjectPresenter from "./ProjectPresenter";
import queryString from "query-string";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";
import { IS_LOGGED_IN, SEE_FULL_POST, CREATE_COMMENT } from "./ProjectQueries";

// Project container component
const ProjectContainer = ({ location, history }) => {
  const [inputText, setInputText] = useState("");
  const { id } = queryString.parse(location.search);

  // Check if user is logged in to give permission to write comment on post
  const {
    data: { isLoggedIn }
  } = useQuery(IS_LOGGED_IN);

  // Query to send comment data to create a new comment
  const createComment = useMutation(CREATE_COMMENT, {
    variables: {
      contents: inputText,
      postId: id
    }
  })[0];

  // Callback to handle new comment input
  const onChange = useCallback(async e => {
    try {
      await setInputText(e.target.value);
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Callback to create a new comment obj with data entered by user
  const onSubmitComment = useCallback(
    async e => {
      e.preventDefault();
      try {
        await createComment();
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
      setInputText("");
    },
    [createComment]
  );

  const onClickCategory = category => {
    history.push(`/projects/${category}`);
  };

  // Query to get full post data from server
  const { data, loading, error } = useQuery(SEE_FULL_POST, {
    variables: { id: id }
  });

  if (error) {
    toast.error("Invalid post id");
    return "";
  }

  // When data is loading from server, show this
  if (loading) {
    return <CircularProgress />;
  } else {
    let { seeFullPost } = data;

    return (
      <ProjectPresenter
        data={seeFullPost}
        value={inputText}
        onChange={onChange}
        onSubmitComment={onSubmitComment}
        onClickCategory={onClickCategory}
        isLoggedIn={isLoggedIn}
      />
    );
  }
};

export default React.memo(ProjectContainer);
