import { Send } from "lucide-react";
import { useState } from "react";
// Import components
import { PlaceholderButton } from "../PlaceholderButton";
// Import types
import type { Contact, PlaceholderKey } from "../../types/contact";
import { type Message, Sender } from "../../types/conversation";
import type { MessageInputProps } from "./MessageInput.types";
// Import utility functions
import { replacePlaceholders } from "../../utils/parseUtils";

// Create a sample object to extract keys from
const contactTemplate: Contact = {
  first_name: "",
  last_name: "",
  city: "",
  phone: "",
};

const placeholderKeys = Object.keys(contactTemplate) as PlaceholderKey[];

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

  // Function to add placeholder to the message
  const addPlaceholder = (placeholder: PlaceholderKey): void => {
    setNewMessage((prev) => prev + `[${placeholder}]`);
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
      <div className="border border-divider rounded-lg focus-within:!border-primary">
        <textarea
          name="message-input-box"
          value={newMessage}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          placeholder="Write something..."
          className="w-full px-4 py-3 resize-none focus:outline-none rounded-lg text-main"
          rows={2}
        />

        {/* Bottom section with placeholder buttons and send button */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-divider">
          {/* Placeholder buttons */}
          <div className="flex items-center gap-2">
            {placeholderKeys.map((placeholder: PlaceholderKey) => {
              const isInMessage = newMessage.includes(`[${placeholder}]`);
              return (
                <PlaceholderButton
                  key={placeholder}
                  placeholder={placeholder}
                  isInMessage={isInMessage}
                  addPlaceholder={addPlaceholder}
                />
              );
            })}
          </div>

          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="p-2 rounded-lg bg-primary text-default disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
