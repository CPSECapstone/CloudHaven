import React, { useState } from "react";
import ChatBox from "react-chat-plugin";
import { Background } from "./Chat.styled";
import axios from "axios";

const Chat = () => {
  const user1 = "user1";
  const vendor = "vendor";

  const getUserVendorChats = async () => {
    return await axios.post(`/chats/${user1}/${vendor}`);
  };

  const [data, setData] = useState(getUserVendorChats());

  const handleOnSendMessage = (message) => {
    if (data.messages) {
      setData({
        ...data,
        messages: data.messages.concat({
          author: {
            username: user1,
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
      if (participant != user1) {
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
