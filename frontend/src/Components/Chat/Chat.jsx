import React, { useState } from "react";
import ChatBox from "react-chat-plugin";
import { Background } from "./Chat.styled";
import axios from "axios";

const Chat = () => {
  let user = "user1";
  const vendor = "vendor";

  const getUserVendorChats = async () => {
    const response = await axios('/users/all');
    user = response.data._id;
    console.log(user);
    const chat = await axios.get(`/chats/${user}`);
    console.log(chat.data);
  };

  const [data, setData] = useState(getUserVendorChats());

  const handleOnSendMessage = (message) => {
    if (data.messages) {
      setData({
        ...data,
        messages: data.messages.concat({
          author: {
            username: user,
            id: 1, //TODO get user id
            avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg", //TODO get userimage
          },
          text: message,
          type: "text",
          timestamp: +new Date(),
        }),
      });
    }
  };

  var user2;
  if (data.participants) {
    data.participants.forEach((participant) => {
      if (participant != user) {
        user2 = participant;
      }
    });
  }

  return (
    <Background>
      <ChatBox
        onSendMessage={handleOnSendMessage}
        userId={1}
        messages={data.messages}
        placeholder={"Type here to chat..."}
        showTypingIndicator={true}
        activeAuthor={{ username: user2, id: 2, avatarUrl: null }} //TODO get user2's info
      />
    </Background>
  );
};

export default Chat;
