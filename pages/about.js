import Link from "next/link";

export default function about() {
  return (
    <div>
      <h1>about</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
