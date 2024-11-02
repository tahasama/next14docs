"use client";
import { useOptimistic, useState, useRef } from "react";
import { deliverMessage } from "./actions";

function Thread() {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);
  async function sendMessage(formData: any) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages: any) => [...messages, { text: sentMessage }]);
  }
  //   const formRef = useRef<any>();
  async function formAction(formData: any) {
    addOptimisticMessage(formData.get("message"));
    // formRef.current.reset();
    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: any, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  return (
    <>
      {optimisticMessages.map((message: any, index: any) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Thread;
