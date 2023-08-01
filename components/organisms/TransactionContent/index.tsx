import { NumericFormat } from "react-number-format";
import TransactionStatus from "../../molecules/TransactionsStatus";
import TableTransactions from "../../molecules/TableTransactions";

export default function TransactionContent() {
  return (
    <>
      <section className="transactions overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              My Transactions
            </h2>
            <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
              <h3 className="text-5xl fw-medium color-palette-1">
                <NumericFormat
                  value={4518000500}
                  prefix="Rp. "
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                />
              </h3>
            </div>
            <TransactionStatus />
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
              </p>
              <div className="main-content main-content-table overflow-auto">
                <TableTransactions />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
