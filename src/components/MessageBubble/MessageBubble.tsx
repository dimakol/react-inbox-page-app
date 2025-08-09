// Import types
import type { MessageBubbleProps } from "./MessageBubble.types";
import { Sender } from "../../types/conversation";
// Import utility functions
import { formatTime, replacePlaceholders } from "../../utils/parseUtils";

/**
 * This component is designed to display message bubble.
 * Outgoing messages aligned right, Incoming messages aligned left.
 */
const MessageBubble: React.FC<MessageBubbleProps> = ({
  sender,
  text,
  timestamp,
  contact,
}) => {
  return (
    <div
      className={`flex ${
        sender === Sender.Me ? "justify-end" : "justify-start"
      }`}
    >
      <div className="max-w-xs lg:max-w-md">
        <div
          className={`px-4 py-2 rounded text-main text-sm ${
            sender === Sender.Me ? "bg-active" : "bg-incoming"
          }`}
        >
          {replacePlaceholders(text, contact)}
          <div className={`text-muted text-xs mt-1 text-right`}>
            Sent: {formatTime(timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
