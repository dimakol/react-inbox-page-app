import type { ContactPhone } from "./contact";

export interface Conversation extends ContactPhone {
  messages: Message[];
}

export interface Message {
  timestamp: string;
  sender: (typeof Sender)[keyof typeof Sender];
  text: string;
}

export type MessageTimestamp = Pick<Message, "timestamp">;

export const Sender = {
  Contact: "contact",
  Me: "me",
} as const;
