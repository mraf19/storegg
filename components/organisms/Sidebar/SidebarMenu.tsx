import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type SidebarMenuProps = {
  imgUrl: string;
  title: string;
  path?: string;
  isActive: boolean;
};
export default function SidebarMenu({
  imgUrl,
  title,
  path,
  isActive,
}: SidebarMenuProps) {
  const router = useRouter();

  const onLogOut = () => {
    Cookies.remove("token");
    toast.success("Berhasil Log Out!");
    setTimeout(() => {
      router.push("/signin");
    }, 500);
  };
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
        {title === "Log Out" ? (
          <a
            className="text-lg text-decoration-none"
            onClick={onLogOut}
            style={{ cursor: "pointer" }}
          >
            {title}
          </a>
        ) : (
          <Link href={path!} className="text-lg text-decoration-none">
            {title}
          </Link>
        )}
      </p>
    </div>
  );
}
