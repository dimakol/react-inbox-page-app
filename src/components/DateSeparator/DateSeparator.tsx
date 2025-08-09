// Import types
import type { MessageTimestamp } from "../../types/conversation";

/**
 * This component is designed to display a date separator.
 */
const DateSeparator: React.FC<MessageTimestamp> = ({ timestamp }) => {
  return (
    <div className="flex justify-center my-4">
      <span className="px-3 py-1 text-xs rounded-full bg-divider text-muted">
        {new Date(timestamp).toLocaleDateString("en-GB")}
      </span>
    </div>
  );
};

export default DateSeparator;
