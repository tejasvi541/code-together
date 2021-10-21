import React from 'react';
import { makeStyles } from '@mui/styles';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const useStyles = makeStyles(() => ({
  editor: {
    width: '80%',
    height: '85vh',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: {
    width: '100%',
    backgroundColor: 'green',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
  },
  textArea: {
    width: '100%',
    backgroundColor: 'blue',
    height: '500px',
    marginTop: '1rem',
  },
  dropdown: {
    backgroundColor: '#F94B25',
  },
}));

function CodeEditor() {
  const classes = useStyles();
  return (
    <div className={classes.editor}>
      <div className={classes.toolbar}>
        <DropdownButton
          className={classes.dropdown}
          id="dropdown-basic-button"
          title="Language"
        >
          <Dropdown.Item>Java</Dropdown.Item>
          <Dropdown.Item>C++</Dropdown.Item>
          <Dropdown.Item>Python</Dropdown.Item>
          <Dropdown.Item>JavaScript</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className={classes.textArea}></div>
    </div>
  );
}

export default CodeEditor;
