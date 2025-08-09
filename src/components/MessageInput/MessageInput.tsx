import { Send } from "lucide-react";
import { useState } from "react";
// Import types
import { type Message, Sender } from "../../types/conversation";
import type { MessageInputProps } from "./MessageInput.types";
// Import utility functions
import { replacePlaceholders } from "../../utils/parseUtils";

/**
 * This component is designed to display a message input box.
 * It should support placeholders in square brackets inside the message text.
 * It allow sending new messages to the conversation thread.
 * When the message sent, replaces placeholders with actual contact data.
 */
const MessageInput: React.FC<MessageInputProps> = ({
  contact,
  appendMessage,
}) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewMessage(event.target.value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    // Handle Enter key without combination with shift key
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = (): void => {
    if (!newMessage.trim()) return;

    const processedMessage = replacePlaceholders(newMessage, contact);

    const newMsg: Message = {
      timestamp: new Date().toISOString(),
      sender: Sender.Me,
      text: processedMessage,
    };

    appendMessage(newMsg);
    setNewMessage("");
  };

  return (
    <div className="p-4 border-t border-divider bg-default">
      <div className="flex items-end space-x-2">
        <div className="flex-1">
          <textarea
            name="message-input-box"
            value={newMessage}
            onChange={handleMessageChange}
            onKeyDown={handleKeyDown}
            placeholder="Write something..."
            className="w-full px-4 py-3 border border-divider rounded-lg resize-none focus:outline-none focus:!border-primary text-main"
            rows={1}
          />
        </div>

        <button
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          className="p-3 rounded-lg bg-primary text-default disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
