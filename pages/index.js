// domin.com/
import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/news">A news</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
