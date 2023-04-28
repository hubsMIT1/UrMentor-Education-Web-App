import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [lastMessageSent,setLastMessageSent] = useState(false);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
        (new Date(Date.now()).getHours() < 10 ? '0' : '') +
        new Date(Date.now()).getHours() + ":" +
        (new Date(Date.now()).getMinutes() < 10 ? '0' : '') +
        new Date(Date.now()).getMinutes(),
      };
      // if (messageData.message === lastMessageSent) {
      //   return;
      // }

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      // console.log(currentMessage,messageList)
      setCurrentMessage("");
      // setFindNewMess(true)
      // setLastMessageSent(messageData.message);
    }
  };
let cnt =0;
  useEffect(() => {
    // console.log(currentMessage,lastMessageSent)
    // if(currentMessage!= lastMessageSent){
    socket.on("receive_message", (data) => {
      
      // setMessageList((list) => [...list, data]);
      // console.log("receive_data", currentMessage,messageList,data)
      // console.log("lsat message", data.message,lastMessageSent)
      // if(data.message!==lastMessageSent){
      // if (!messageList.some((message) => message.message === data.message)) {
        setMessageList((list) => [...list, data]);
        // console.log("receive_data", currentMessage, messageList,"data", data);
        // setLastMessageSent(data.message);
        // console.log(findNewMess)
      // }
      cnt++;
      console.log(cnt,data,cnt);

    });
  }, [socket]);


  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Join with Link</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent,index) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "other" : "you"}
                key = {index}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
