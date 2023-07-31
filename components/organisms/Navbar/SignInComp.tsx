import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignInComp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });
  console.log(user);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token!);
      const payload = jwtDecode(jwtToken);
      const user = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG_API;
      user.avatar = `${IMG}/${user.avatar}`;
      setUser(user);
      setIsLoggedIn(true);
    }
  }, []);
  if (isLoggedIn) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member/transactions"
              >
                Wallet
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member/edit-profile"
              >
                Account Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="/">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <>
      <li className="nav-item my-auto">
        <Link
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          href="/signin"
          role="button"
        >
          Sign In
        </Link>
      </li>
    </>
  );
}
