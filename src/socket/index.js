import socketIOClient from "socket.io-client";

export const socket = socketIOClient(
  "https://code-together-webapp.herokuapp.com"
);
