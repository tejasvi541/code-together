import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

const useStyles = makeStyles(() => ({
  editor: {
    width: '80%',
    height: '85vh',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: {
    width: '100%',
    // backgroundColor: 'green',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
  },
  textArea: {
    width: '100%',
    // backgroundColor: 'blue',
    height: '500px',
    marginTop: '1rem',
    backgroundColor: 'white',
  },
  dropdown: {
    // backgroundColor: '#F94B25',
  },
}));

function CodeEditor() {
  const classes = useStyles();
  //   const [code, setCode] = React.useState(
  //     `function add(a, b) {\n  return a + b;\n}`
  //   );
  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div className={classes.editor}>
      <div className={classes.toolbar}>
        <DropdownButton
          className={classes.dropdown}
          id="dropdown-basic-button"
          title="Language"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="Java">Java</Dropdown.Item>
          <Dropdown.Item eventKey="C++">C++</Dropdown.Item>
          <Dropdown.Item eventKey="Python">Python</Dropdown.Item>
          <Dropdown.Item eventKey="JavaScript">JavaScript</Dropdown.Item>
        </DropdownButton>
      </div>
      <div id="textarea" className={classes.textArea}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </div>
    </div>
  );
}

export default CodeEditor;
