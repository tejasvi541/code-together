import React from 'react';
import { makeStyles } from '@mui/styles';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function JoinRoom() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CodeEditor />
    </div>
  );
}

export default JoinRoom;
