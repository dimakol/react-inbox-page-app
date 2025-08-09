import { useEffect, useRef } from "react";
// Import components
import { DateSeparator } from "../DateSeparator";
import { MessageBubble } from "../MessageBubble";
// Import types
import type { ConversationProps } from "./Conversation.types";
import type { Message } from "../../types/conversation";
// Import utility functions
import { isSameDate } from "../../utils/parseUtils";

/**
 * This component is designed to display the conversation messages.
 */
const Conversation: React.FC<ConversationProps> = ({ messages, contact }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the conversation
  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, contact]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message: Message, index: number) => {
        const isFirstMessageOfDay =
          index === 0 ||
          !isSameDate(message.timestamp, messages[index - 1].timestamp);

        return (
          <div key={index}>
            {isFirstMessageOfDay && (
              <DateSeparator timestamp={message.timestamp} />
            )}

            <MessageBubble {...message} contact={contact} />
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Conversation;
