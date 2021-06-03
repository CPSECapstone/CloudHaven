import React, { useState, useEffect } from "react";
import ChatBox from "react-chat-plugin";
import { Background } from "./Chat.styled";
import axios from "axios";

const Chat = () => {
  // const vendor = "vendor";

  const [user1, setUser1] = useState(null);
  const [messagesData, setMessagesData] = useState([]);
  let data;

  const getUserVendorChatsData = async () => {
    try {
      const response = await axios("/users/all");
      setUser1(response.data);
      const chat = await axios.get(`/chats/${response.data._id}`);
      return chat.data;
    } catch (error) {
      console.log("Ya dun goofed. Relog");
    }
  };

  useEffect(async () => {
    data = await getUserVendorChatsData();

    if (data && user1) {
      setMessages(data);
    }
  }, [user1 == null]);

  const handleOnSendMessage = (message) => {
    if (messagesData) {
      setMessagesData({
        ...messagesData,
        messages: messagesData.concat({
          author: {
            username: user1.first_name,
            id: user1._id,
            avatarUrl: null,
          },
          text: message,
          type: "text",
          timestamp: +new Date(),
        }),
      });
    }

    axios.post(`/chats/${user1._id}`, messagesData);
  };

  const setMessages = (d) => {
    let newFormattedMessages = [];
    d.forEach((data) => {
      const { text, timeStamp, sendor } = data.messages[0];

      newFormattedMessages.push({
        text: text,
        type: "text",
        timestamp: timeStamp,
        author: {
          userName: sendor == user1._id ? user1.first_name : "test",
          id: sendor == user1._id ? user1._id : 0,
          url: null,
        },
      });
    });
    setMessagesData(newFormattedMessages);
  };

  if (user1 == null) return null;

  return (
    <Background>
      <ChatBox
        onSendMessage={handleOnSendMessage}
        userId={user1._id}
        messages={messagesData}
        placeholder={"Type here to chat..."}
        showTypingIndicator={false}
        activeAuthor={{
          username: user1.first_name,
          id: user1._id,
          avatarUrl: null,
        }}
      />
    </Background>
  );
};

export default Chat;
