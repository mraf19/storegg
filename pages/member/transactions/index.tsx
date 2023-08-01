import jwtDecode from "jwt-decode";
import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/dataTypes";

export default function Transactions() {
  return (
    <>
      <Sidebar />
      <TransactionContent />
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
