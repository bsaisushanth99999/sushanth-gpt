import { DocumentData } from "firebase-admin/firestore";
import React from "react";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";

  let chatGptMessages =
    typeof message.text != "string"
      ? message.text.choices[0].message.content.split("\n")
      : null;

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} alt="User Avatar" className="h-8 w-8 " />
        <p className="pt-1 text-sm">
          {typeof message.text === "string"
            ? message.text
            : chatGptMessages.map((message: any, i: any) => (
                <p key={i}> {message} </p>
              ))}
        </p>
      </div>
    </div>
  );
}

export default Message;
