// Import components
import { ConversationHeader } from "../ConversationHeader";
import { Conversation } from "../Conversation";
import { MessageInput } from "../MessageInput";
// Import types
import type { ConversationPanelProps } from "./ConversationPanel.types";

/**
 * This component is designed to display the conversation(messages) between the user and a contact
 * with option to send new messages.
 */
const ConversationPanel: React.FC<ConversationPanelProps> = ({
  contact,
  messages,
  appendMessage,
}) => {
  return (
    <div className="flex-1 flex flex-col">
      {contact && messages ? (
        <>
          <ConversationHeader
            contact={contact}
            messagesAmount={messages.length}
          />

          <Conversation messages={messages} />

          <MessageInput contact={contact} appendMessage={appendMessage} />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-placeholder">
          <p>Select a conversation to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default ConversationPanel;
