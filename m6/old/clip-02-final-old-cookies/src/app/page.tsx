import 'server-only';

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import FavoriteCookieButton from "@/app/FavoriteCookieButton";
import styles from "./page.module.css";

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

async function getCookies(): Promise<string[]> {
  await delay(2000);

  const cookies: string[] = [
    "Chocolate Chip Cookie",
    "Oatmeal Raisin Cookie",
    "Peanut Butter Cookie",
    "Sugar Cookie",
    "Macadamia Nut Cookie",
  ];

  return cookies;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { password: string };
}) {
  const cookies = await getCookies();

  const cookiePassword = "cookie-monster";

  console.log(searchParams);

  if (searchParams.password != cookiePassword) {
    return <div>Invalid Password</div>;
  }

  return (
    <div className={styles.main}>
      <div className="d-flex justify-content-start">
        <Image
          src="/tasty-cookies-250.png"
          alt="cookies"
          width={350}
          height={88}
        />
      </div>

      <div className="container">
        {cookies.map((cookie) => (
          <div key={cookie} className="row align-items-center">
            <div className="col">
              <p>{cookie}</p>
            </div>
            <div className="col">
              <FavoriteCookieButton cookie={cookie} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
