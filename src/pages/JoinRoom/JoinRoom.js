import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import JoinRoomModal from '../../components/JoinRoomModal/JoinRoomModal';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function JoinRoom() {
  const [isCodeAvailable, setIsCodeAvailable] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isCodeAvailable ? <CodeEditor /> : <JoinRoomModal />}
    </div>
  );
}

export default JoinRoom;
