export interface Conversation {
  phone: string;
  messages: Message[];
}

interface Message {
  timestamp: string;
  sender: "contact" | "me";
  text: string;
}
