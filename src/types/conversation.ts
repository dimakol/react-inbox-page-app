import type { ContactPhone } from "./contact";

export interface Conversation extends ContactPhone {
  messages: Message[];
}

export interface Message {
  timestamp: string;
  sender: "contact" | "me";
  text: string;
}

export type MessageTimestamp = Pick<Message, "timestamp">;
