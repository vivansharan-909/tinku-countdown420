const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export function getCountdownParts(targetIso: string) {
  const targetMs = new Date(targetIso).getTime();

  if (Number.isNaN(targetMs)) {
    return {
      totalMs: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalMs = Math.max(targetMs - Date.now(), 0);
  const days = Math.floor(totalMs / DAY);
  const hours = Math.floor((totalMs % DAY) / HOUR);
  const minutes = Math.floor((totalMs % HOUR) / MINUTE);
  const seconds = Math.floor((totalMs % MINUTE) / SECOND);

  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
  };
}

export function getFormattedTarget(targetIso: string) {
  const targetDate = new Date(targetIso);

  if (Number.isNaN(targetDate.getTime())) {
    return "Invalid target date";
  }

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(targetDate);
}
