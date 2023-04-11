import Sidebar from "../../../components/organisms/Sidebar";
import TableTransactions from "../../../components/organisms/TableTransactions";
import TransactionStatus from "../../../components/organisms/TransactionsStatus";
import { numberFormat } from "../../../utils/NumberFormatter";

export default function Transactions() {
  return (
    <>
      <Sidebar />
      <section className="transactions overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
              My Transactions
            </h2>
            <div className="mb-30">
              <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
              <h3 className="text-5xl fw-medium color-palette-1">
                Rp {numberFormat(4518000500)}
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
