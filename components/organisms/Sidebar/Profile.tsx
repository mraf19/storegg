import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../services/dataTypes";
import jwtDecode from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    avatar: "",
    username: "",
    email: "",
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
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      {user.avatar && (
        <Image
          src={user.avatar}
          width={90}
          height={90}
          className="img-fluid mb-20"
          alt="profile picture"
          style={{ borderRadius: "100%" }}
        />
      )}
      <h2 className="fw-bold text-xl color-palette-1 m-0">
        {user.name ? user.name : user.username}
      </h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
