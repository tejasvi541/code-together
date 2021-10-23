export const updatestatekeyword = (data) => {
  return {
    type: 'UPDATE_ROOM_VARIABLE',
    payload: data,
  };
};

export const updateroomdetails = (data) => {
  return {
    type: 'UPDATE_ROOM_DETAILS',
    payload: data,
  };
};
