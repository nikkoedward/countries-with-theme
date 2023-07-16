import { cookies } from "next/headers";
import CountryComponent from "@components/Country";

type Props = {
  params: {
    country: string;
  };
};

function Country({ params: { country } }: Props) {
  const cookieStore = cookies();
  const isDarkModeEnabled = cookieStore.get("isDark");
  return (
    <CountryComponent
      country={country}
      isDarkModeEnabled={isDarkModeEnabled?.value === "1"}
    />
  );
}

export default Country;
