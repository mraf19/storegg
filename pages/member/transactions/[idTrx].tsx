import jwtDecode from "jwt-decode";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import {
  HistoryTransactionTypes,
  HistoryVoucherTopupTypes,
  JWTPayloadTypes,
  UserTypes,
} from "../../../services/dataTypes";
import { getTransactionDetail } from "../../../services/member";

type TransactionDetailProps = {
  transactionDetail: HistoryTransactionTypes;
};
export default function TransactionDetail({
  transactionDetail,
}: TransactionDetailProps) {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent data={transactionDetail} />
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
  params: {
    idTrx: string;
  };
};
export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;
  console.log(idTrx);

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const user: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG_API;
  user.avatar = `${IMG}/${user.avatar}`;

  const response = await getTransactionDetail(idTrx, jwtToken);

  return {
    props: {
      user,
      transactionDetail: response.data,
    },
  };
}
