// Import types
import type { PlaceholderButtonProps } from "./PlaceholderButton.types";

/**
 * This component is designed to display a placeholder button.
 */
const PlaceholderButton: React.FC<PlaceholderButtonProps> = ({
  placeholder,
  isInMessage,
  addPlaceholder,
}) => {
  return (
    <button
      key={placeholder}
      onClick={() => addPlaceholder(placeholder)}
      className={`px-3 py-1 text-xs rounded-full border cursor-pointer transition-colors ${
        isInMessage
          ? "bg-primary text-default"
          : "bg-default border-divider hover:!bg-active text-placeholder"
      }`}
    >
      {placeholder}
    </button>
  );
};

export default PlaceholderButton;
