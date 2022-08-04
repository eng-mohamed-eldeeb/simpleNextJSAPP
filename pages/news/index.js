// our-domain.com/news
import Link from "next/link"
function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li><Link href="/news/nextJS-is">Nextjs is a great framwork</Link></li>
        <li>nigga nigga nigga</li>
      </ul>
    </>
  );
}

export default NewsPage;
