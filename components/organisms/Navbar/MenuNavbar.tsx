import Link from "next/link";

type MenuNavbarProps = {
    title: string,
    active?: boolean,
    path: string
}

export default function MenuNavbar({title, active, path}: MenuNavbarProps){
    return (
      <li className="nav-item my-auto">
        <Link className={`nav-link ${active && "active"}`} aria-current="page" href={path}>
            {title}
        </Link>
      </li>
    );
}