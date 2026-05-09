import { CountdownHero } from "@/components/countdown-hero";
import { countdownConfig } from "@/lib/countdown-config";

export default function Home() {
  return <CountdownHero config={countdownConfig} />;
}
