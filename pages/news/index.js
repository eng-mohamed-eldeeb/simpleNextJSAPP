// our-domain.com/news
import Link from "next/link";
function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/nextJS-is">Go some where</Link>
        </li>
        <li>
          <Link href="/">Go Home</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
