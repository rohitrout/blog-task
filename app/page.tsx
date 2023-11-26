import "./page.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <span>Welcome to my Blog</span>
      <Link href="/blogs">Explore Blogs</Link>
    </div>
  );
}
