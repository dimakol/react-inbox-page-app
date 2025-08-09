/**
 * Get the initials of a person from their first and last name.
 * @param firstName The first name of the person.
 * @param lastName The last name of the person.
 * @returns The initials of the person.
 */
export const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName?.charAt(0) || ""}${
    lastName?.charAt(0) || ""
  }`.toUpperCase();
};

/**
 * Formats a timestamp into a human-readable date string.
 * If the date is today, it returns the time instead.
 * @param timestamp The timestamp to format.
 * @returns A string representing the formatted date with following format: DD/MM/YYYY or
 *          the formatted time with following format: HH:MM if today.
 */
export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const today = new Date();
  const isToday = date.toDateString() === today.toDateString();

  if (isToday) {
    return formatTime(timestamp);
  }

  return date.toLocaleDateString("en-GB");
};

/**
 * This function formats a timestamp into a 24-hour time string.
 * @param timestamp The timestamp to format.
 * @returns A string representing the formatted time with following format: HH:MM
 */
const formatTime = (timestamp: string): string => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

/**
 * Checks if two timestamps are on the same date.
 * @param timestamp1 The first timestamp to compare.
 * @param timestamp2 The second timestamp to compare.
 * @returns True if the timestamps are on the same date, false otherwise.
 */
export const isSameDate = (timestamp1: string, timestamp2: string): boolean => {
  const d1 = new Date(timestamp1);
  const d2 = new Date(timestamp2);
  return d1.toDateString() === d2.toDateString();
};
