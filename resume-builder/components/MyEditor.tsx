import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  
  <>
  <Editor editorState={editorState} onChange={setEditorState} />
  <p>asdas n</p>
  </> 
}

export default MyEditor;