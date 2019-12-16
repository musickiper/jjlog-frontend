import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from "../../Components/Button";
import storage from "../../Firebase/index";
import CkEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const FileUploadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1vh;
    background-color: white;
    border: 1px solid ${props => props.theme.lightGreyColor};
    button {
      height: 20%;
    }
  }
`;

const PostBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    width: 80%;
    flex-direction: column;
  }
`;

const Input = styled.input`
  margin-bottom: 2vh;
  border: none;
`;

const EditorBox = styled.div`
  margin-bottom: 2vh;
`;

const IS_LOGGED_IN = gql(`
    {
        isLoggedIn @client
    }
`);

const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $summary: String!
    $contents: String!
    $categories: [String!]!
    $images: [String!]!
  ) {
    createPost(
      title: $title
      summary: $summary
      contents: $contents
      categories: $categories
      images: $images
    ) {
      id
    }
  }
`;

const AddPost = ({ history }) => {
  const {
    data: { isLoggedIn }
  } = useQuery(IS_LOGGED_IN);
  const [contents, setContents] = useState("");
  const [imageUpdated, setImageUpdated] = useState(false);
  const [images, setImages] = useState([]);
  const [urls] = useState([]);

  if (!isLoggedIn) {
    toast.error("You must be logged in to write a post");
    history.push("/");
  }

  const createPost = useMutation(CREATE_POST)[0];

  const handleContentsChange = (event, editor) => {
    const data = editor.getData();
    setContents(data);
  };

  const handleImageChoose = e => {
    setImages([...e.target.files]);
    e.preventDefault();
  };

  const handleImageUpload = async e => {
    e.preventDefault();
    try {
      let image;
      for (image of images) {
        const curTime = Date.now();
        const imageName = `${curTime}_${image.name}`;
        await storage.ref(`images/${imageName}`).put(image);
        const url = await storage.ref(`images/${imageName}`).getDownloadURL();
        urls.push(url);
      }
      setImageUpdated(true);
    } catch (e) {
      console.error(e);
      toast.error("Upload Images failed");
      return;
    }
    toast.success("Upload Images success");
  };

  const handlePostSubmit = async e => {
    const { children } = e.target;
    e.preventDefault();
    const title = children[0].value;
    const summary = children[1].value;
    const categories = children[3].value.split(",");
    if (!title || !summary || !contents || !categories || !urls) {
      toast.error("You must fill out every fields");
      return;
    }
    try {
      await createPost({
        variables: {
          title,
          summary,
          contents,
          categories,
          images: urls
        }
      });
    } catch (e) {
      console.log(e);
      toast.error("Create Post failed");
    }
    history.push("/");
  };

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add PRJ</title>
      </Helmet>
      <FileUploadBox>
        <form onSubmit={handleImageUpload}>
          <Input
            type={"file"}
            multiple={"multiple"}
            required={true}
            onChange={handleImageChoose}
          />
          <Button text={"Upload"} />
        </form>
      </FileUploadBox>
      <PostBox>
        <form onSubmit={handlePostSubmit}>
          <Input placeholder={"title"} required={true} type={"text"} />
          <Input placeholder={"summary"} required={true} type={"text"} />
          <EditorBox>
            <CkEditor
              editor={ClassicEditor}
              onChange={handleContentsChange}
              data={contents}
              value={contents}
            />
          </EditorBox>
          <Input placeholder={"c1,c2,c3,..."} required={true} type={"text"} />
          {imageUpdated && <Button text={"Submit"} />}
        </form>
      </PostBox>
    </Container>
  );
};

export default AddPost;
