import Link from "next/link";
import Image from "next/image";
import { HistoryTransactionTypes } from "../../../services/dataTypes";
import { IMG } from "../../../utils/constant";
import { NumericFormat } from "react-number-format";

type TransactionDetailContentProps = {
  data: HistoryTransactionTypes;
};

export default function TransactionDetailContent({
  data,
}: TransactionDetailContentProps) {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #GG-{data._id.slice(-4)}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <Image
                        src={`${IMG}/${data.historyVoucherTopup.thumbnail}`}
                        width={200}
                        height={130}
                        className="img-fluid"
                        alt="thumbnail"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {data.historyVoucherTopup.gameName}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category: {data.historyVoucherTopup.category}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="fw-medium text-center label pending m-0 rounded-pill">
                    {data.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <p className="text-lg color-palette-1 mb-20">
                  Your Game ID{" "}
                  <span className="purchase-details">{data.accountUser}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Order ID{" "}
                  <span className="purchase-details">
                    {" "}
                    #GG-{data._id.slice(-4)}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Item{" "}
                  <span className="purchase-details">{`${data.historyVoucherTopup.coinQuantity} ${data.historyVoucherTopup.coinName}`}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Price{" "}
                  <span className="purchase-details">
                    <NumericFormat
                      value={data.historyVoucherTopup.price}
                      prefix="Rp. "
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Tax (10%){" "}
                  <span className="purchase-details">
                    <NumericFormat
                      value={data.tax}
                      prefix="Rp. "
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Total{" "}
                  <span className="purchase-details color-palette-4">
                    <NumericFormat
                      value={data.value}
                      prefix="Rp. "
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                  </span>
                </p>
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <p className="text-lg color-palette-1 mb-20">
                  Your Account Name{" "}
                  <span className="purchase-details">{data.name}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Type{" "}
                  <span className="payment-details">
                    {data.historyPayment.type}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Bank Name{" "}
                  <span className="payment-details">
                    {data.historyPayment.bankName}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Bank Account Name{" "}
                  <span className="payment-details">
                    {data.historyPayment.name}
                  </span>
                </p>
                <p className="text-lg color-palette-1 mb-20">
                  Bank Number{" "}
                  <span className="payment-details">
                    {data.historyPayment.noRekening}
                  </span>
                </p>
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <Link
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="/member/transactions"
                  role="button"
                >
                  Back
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
