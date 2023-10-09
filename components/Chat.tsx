"use client";

import { db } from "@/fireBase";
import { DocumentData, collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useRef, useEffect } from "react";
import { CollectionHook, useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll to the bottom when new messages arrive
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 h-screen overflow-y-auto" ref={chatContainerRef}>
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
