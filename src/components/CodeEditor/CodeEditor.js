import React from 'react';
import { makeStyles } from '@mui/styles';

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
    margin: '1rem',
  },
  textArea: {
    width: '100%',
    backgroundColor: 'blue',
    height: '500px',
    margin: '1rem',
  },
}));

function CodeEditor() {
  const classes = useStyles();
  return (
    <div className={classes.editor}>
      <div className={classes.toolbar}></div>
      <div className={classes.textArea}></div>
    </div>
  );
}

export default CodeEditor;
