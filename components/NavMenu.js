import Link from "next/link";

const items = [
  { href: "/", title: "Home" },
  // { href: "/services", title: "Services" },
  { href: "/contact", title: "Contact" },
];

const NavMenu = () => (
  <nav className="-mx-4 flex justify-start">
    {items.map((item) => (
      <Link href={item.href} key={item.href}>
        <a className="inline-block p-4 font-semibold text-lg text-bdk-blue hover:text-bdk-blue-light">
          {item.title}
        </a>
      </Link>
    ))}
  </nav>
);

export default NavMenu;
