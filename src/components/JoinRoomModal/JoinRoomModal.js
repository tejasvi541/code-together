import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Modal, ModalBody, ModalDialog } from 'react-bootstrap';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    height: '400px',
    justifyContent: 'center',
    borderRadius: '12px',
  },
  input: {
    marginTop: '1rem',
    marginBottom: '1rem',
    width: '100%',
    height: '40px',
    borderRadius: '8px',
    outline: 'none',
    border: 'none',
    '&::placeholder': {
      fontSize: '14px',
      paddingLeft: '1rem',
      fontFamily: 'Prompt',
    },
  },
  title: {
    textAlign: 'Center',
    margin: '0',
    marginTop: '1rem',
    marginBottom: '1rem',
    fontFamily: 'Prompt',
    fontWeight: '700',
    color: '#F94B25',
  },
  btn: {
    marginTop: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#78B64D!important',
    borderColor: '#78B64D!important',
    '&::focus': {
      border: 'none',
    },
  },
}));

function JoinRoomModal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Join Room</h2>
      <input type="text" className={classes.input} placeholder="Nick Name" />
      <input type="text" className={classes.input} placeholder="Room Code" />
      <Button className={classes.btn}>Join</Button>
    </div>
  );
}

export default JoinRoomModal;
