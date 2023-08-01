import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/dataTypes";
import { toast } from "react-toastify";

export default function SignInComp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token!);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG_API;
      userPayload.avatar = `${IMG}/${userPayload.avatar}`;
      setUser(userPayload);
      setIsLoggedIn(true);
    }
  }, []);

  const onLogOut = () => {
    Cookies.remove("token");
    toast.success("Berhasil Log Out!");
    setIsLoggedIn(false);
  };
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
              <button
                className="dropdown-item text-lg color-palette-2"
                onClick={onLogOut}
              >
                Log Out
              </button>
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
