export type CountdownConfig = {
  title: string;
  subtitle: string;
  targetIso: string;
  completedMessage: string;
};

export const countdownConfig: CountdownConfig = {
  title: "Tinku Countdown 420",
  subtitle:
    "A focused live countdown for one important moment, built to feel bold, immediate, and easy to read.",
  targetIso: "2026-12-31T23:59:59+05:30",
  completedMessage:
    "The countdown has reached zero. The moment is here.",
};
