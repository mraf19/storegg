import Image from "next/image";
import Link from "next/link";

type SidebarMenuProps = {
  imgUrl: string;
  title: string;
  path: string;
  isActive: boolean;
};
export default function SidebarMenu({
  imgUrl,
  title,
  path,
  isActive,
}: SidebarMenuProps) {
  return (
    <div className={`item ${isActive && "active"} mb-30`}>
      <Image
        src={imgUrl}
        width={25}
        height={25}
        alt={`ic-${title}`}
        className="me-3"
      />
      <p className="item-title m-0">
        <Link href={path} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
