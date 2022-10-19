import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const chatForm = document.querySelector("#chat-form");
const chatMes = document.querySelector("#chat-content");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = chatMes.value;
  socket.emit("on-chat", {
    message: message,
  });

  chatMes.value = "";
});

const messages = document.querySelector("#messages");
socket.on("user-chat", (message) => {
  const chatItem = document.createElement("li");
  chatItem.textContent = message.message;

  messages.appendChild(chatItem);
});
