import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({
      answer: "1st ask me a question, then only I can answer... Stupid.",
    });

    return;
  }
  if (!chatId) {
    res
      .status(400)
      .json({ answer: "The chatId seems to be incorrect, please try again." });
    return;
  }

  //CHAT gpt query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "I am not able to answer this, try another one...",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
