// formatTime.ts

/**
 * Formats a duration in seconds for media playback.
 *
 * Examples:
 * formatTime(5)      -> "0:05"
 * formatTime(65)     -> "1:05"
 * formatTime(3599)   -> "59:59"
 * formatTime(3600)   -> "1:00:00"
 * formatTime(3665)   -> "1:01:05"
 */
export function formatTime(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) {
    return "0:00";
  }

  const roundedSeconds = Math.floor(totalSeconds);

  const hours = Math.floor(roundedSeconds / 3600);
  const minutes = Math.floor((roundedSeconds % 3600) / 60);
  const seconds = roundedSeconds % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${paddedMinutes}:${paddedSeconds}`;
  }

  return `${minutes}:${paddedSeconds}`;
}

export default formatTime;
