import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const saveContent = () => {
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    // Save content to server or state
  };

  return (
    <div className="p-4 border rounded-lg">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbarClassName="toolbar-class"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
      />
      <button onClick={saveContent} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Save
      </button>
    </div>
  );
};

export default RichTextEditor;
