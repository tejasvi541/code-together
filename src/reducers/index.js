export const initialState = {
  isRoomCode: false,
  RoomDetails: {
    RoomId: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ROOM_VARIABLE':
      return { ...state, isRoomCode: true };
    case 'UPDATE_ROOM_DETAILS':
      return {
        ...state,
        RoomDetails: {
          RoomId: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
