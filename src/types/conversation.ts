export interface Conversation {
  phone: string;
  messages: Message[];
}

export interface Message {
  timestamp: string;
  sender: "contact" | "me";
  text: string;
}
