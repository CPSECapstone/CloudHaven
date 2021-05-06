import React, { useState } from "react";
import ChatBox from "react-chat-plugin";
import { Background } from "./Chat.styled";
import { Data } from "../../Utils/ChatTestData";

const Chat = () => {
  const [attr, setAttr] = useState(Data);

  const handleOnSendMessage = (message) => {
    setAttr({
      ...attr,
      messages: attr.messages.concat({
        author: {
          username: "user1",
          id: 1,
          avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
        },
        text: message,
        type: "text",
        timestamp: +new Date(),
      }),
    });
  };

  return (
    <Background>
      <ChatBox
        onSendMessage={handleOnSendMessage}
        userId={1}
        messages={attr.messages}
        placeholder={"Type here to chat..."}
        showTypingIndicator={true}
        activeAuthor={{ username: "user2", id: 2, avatarUrl: null }}
      />
    </Background>
  );
};

export default Chat;
