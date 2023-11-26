import "./Navbar.scss";
import Link from "next/link";
import Search from "./Search";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-items">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Search />

        <Link href="/blogs">
          <span>Blogs</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
