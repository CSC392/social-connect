import { io } from "socket.io-client";

const URL = "http://localhost:5000/";

export const socket = io(URL);

export let mySocketId;

socket.on("createNewGame", (statusUpdate) => {
  console.log("A new game has been created!");
  mySocketId = statusUpdate.mySocketId;
});
