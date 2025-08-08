// Import components
import { Avatar } from "../Avatar";
// Import types
import type { ContactProps } from "./Contact.types";
// Import utils
import { formatDate } from "../../utils/parseUtils";

/**
 * This component is designed to display a single contact information: Full name, Last message preview, Time of last message.
 */
const Contact: React.FC<ContactProps> = ({
  contact,
  lastMessage,
  isSelected,
  setSelectedPhone,
}) => {
  return (
    <div
      key={contact.phone}
      onClick={() => setSelectedPhone(contact.phone)}
      className={`flex items-center m-2 p-4 rounded-lg cursor-pointer hover:bg-gray-100 ${
        isSelected ? "bg-active" : ""
      }`}
    >
      <Avatar firstName={contact.first_name} lastName={contact.last_name} />

      <div className="flex-1 min-w-0">
        {/* Full name */}
        <div className="flex items-center justify-start mb-1">
          <h3 className="text-main text-sm font-medium truncate">
            {`${contact.first_name} ${contact.last_name}`}
          </h3>
        </div>

        {/* Last Message Preview */}
        <p className="text-muted text-sm truncate">{lastMessage?.text}</p>
      </div>

      {/* Time indicator */}
      <div className="text-muted text-xs ml-2">
        {lastMessage?.timestamp && formatDate(lastMessage?.timestamp)}
      </div>
    </div>
  );
};

export default Contact;
