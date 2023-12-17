import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from "draft-js";

interface BlogFormProps {
  onSubmit: (e: React.SyntheticEvent, title: string, content: any) => void;
}
import dynamic from "next/dynamic";
const Editor = dynamic(() =>
  import("react-draft-wysiwyg").then((mod) => mod.Editor)
);
const BlogForm: React.FC<BlogFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState(EditorState.createEmpty());
  const rawContentState = convertToRaw(content.getCurrentContent());
  const contentInJSON = JSON.stringify(rawContentState);
  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const onEditorStateChange = (event: any) => {
    setContent(event);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(e, title, contentInJSON);
  };

  const theme = useTheme();
  return (
    <CreatePostFormLayout onSubmit={handleSubmit}>
      <Title theme={theme}>Create Blog Post</Title>
      <FormLabel>
        Title
        <InputField
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Content
        <FormatToolbar>
          <Editor
            editorState={content}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={onEditorStateChange}
          />
        </FormatToolbar>
      </FormLabel>
      <SubmitButton type="submit">Submit</SubmitButton>
    </CreatePostFormLayout>
  );
};

const CreatePostFormLayout = styled.form(
  ({ theme }) => `
  display:flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`
);
const Title = styled.h2(
  ({ theme }) => `
  align-self: center;
`
);
const FormLabel = styled.label`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const InputField = styled.input(
  ({ theme }) => `
  margin-top: 10px;
  width: 50%;
  height: 20px;
  background: ${
    theme.label === "dark" ? lightTheme.bg.primary : darkTheme.bg.primary
  };
  color: ${
    theme.label === "dark" ? lightTheme.text.primary : darkTheme.text.primary
  };
`
);
const SubmitButton = styled.button(
  ({ theme }) => `
  margin-top:10px;
  border: none;
  background: ${
    theme.label === "dark" ? lightTheme.bg.primary : darkTheme.bg.primary
  };
  color: ${
    theme.label === "dark" ? lightTheme.text.primary : darkTheme.text.primary
  };
  font-weight: 800;
  cursor: pointer;
  border-radius: 5px;
  height: 40px;
  width: 40%;
  align-self: center;
  &:hover {
    background: gray;
  }
`
);
const FormatToolbar = styled.div(
  ({ theme }) => `
  margin-top:10px;
  background: ${
    theme.label === "dark" ? lightTheme.bg.primary : darkTheme.bg.primary
  };
  color: ${
    theme.label === "dark" ? lightTheme.text.primary : darkTheme.text.primary
  };
  .editor-class {
    height: 140px;
  }
`
);

export default BlogForm;
