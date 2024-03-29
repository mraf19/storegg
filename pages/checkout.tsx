import Image from "next/image";
import Link from "next/link";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutItem from "../components/organisms/CheckoutItem";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes, UserTypes } from "../services/dataTypes";

type CheckOutProps = {
  user: UserTypes;
};

export default function Checkout(props: CheckOutProps) {
  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <Link className="" href="/">
              <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
            </Link>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
}

type GetServerSideProps = {
  req: {
    cookies: {
      token: string;
    };
  };
};
export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const JWTToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(JWTToken);
  const user: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG_API;
  user.avatar = `${IMG}/${user.avatar}`;

  return {
    props: {
      user,
    },
  };
}
