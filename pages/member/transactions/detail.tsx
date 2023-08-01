import jwtDecode from "jwt-decode";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { JWTPayloadTypes, UserTypes } from "../../../services/dataTypes";

export default function TransactionDetail() {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent />
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
