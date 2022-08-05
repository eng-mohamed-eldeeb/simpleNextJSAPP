import { useRouter } from "next/router";
import Link from "next/link";

// domain.com//news/somthing

function Somthing() {
  return (
    <>
      <h1>Some where</h1>
      <p>
        <Link href="/">go home</Link>
      </p>
    </>
  );
}

export default Somthing;
