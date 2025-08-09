import React from "react";
// Import components
import { Avatar } from "../Avatar";
// Import types
import type { ConversationHeaderProps } from "./ConversationHeader.types";

/**
 * This component is designed to display the conversation header: Contact’s full name, Avatar with initials, Total number of messages.
 */
const ConversationHeader: React.FC<ConversationHeaderProps> = ({
  messagesAmount,
  ...contact
}) => {
  return (
    <div className="flex items-center p-3 border-b border-divider bg-default">
      <Avatar firstName={contact.first_name} lastName={contact.last_name} />
      <div>
        <h2 className="text-main text-lg font-semibold">
          {contact.first_name} {contact.last_name}
        </h2>
        <p className="text-muted text-sm">{messagesAmount} messages</p>
      </div>
    </div>
  );
};

export default ConversationHeader;
