import HomeComponent from "@components/Home";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const isDarkModeEnabled = cookieStore.get("isDark");

  return <HomeComponent isDarkModeEnabled={isDarkModeEnabled?.value === "1"} />;
}
