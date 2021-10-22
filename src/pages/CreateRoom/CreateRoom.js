import React from 'react';
import { makeStyles } from '@mui/styles';
import CreateRoomModal from '../../components/CreateRoomModal/CreateRoomModal';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function CreateRoom() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CreateRoomModal />
    </div>
  );
}

export default CreateRoom;
