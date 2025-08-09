// Import components
import { DateSeparator } from "../DateSeparator";
import { MessageBubble } from "../MessageBubble";
// Import types
import type { ConversationPanelProps } from "../ConversationPanel";
import type { Message } from "../../types/conversation";
// Import utility functions
import { isSameDate } from "../../utils/parseUtils";

/**
 * This component is designed to display the conversation messages.
 */
const Conversation: React.FC<Pick<ConversationPanelProps, "messages">> = ({
  messages,
}) => {
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

            <MessageBubble {...message} />
          </div>
        );
      })}
    </div>
  );
};

export default Conversation;
