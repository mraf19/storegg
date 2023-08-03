import { NumericFormat } from "react-number-format";
import { useCallback, useEffect, useState } from "react";
import { getTransaction } from "../../../services/member";
import TableRowTransactions from "./TableRow";
import { HistoryTransactionTypes } from "../../../services/dataTypes";
import { IMG } from "../../../utils/constant";
import Status from "../../molecules/TransactionsStatus/Status";

export default function TransactionContent() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<HistoryTransactionTypes[]>([]);
  const [status, setStatus] = useState("all");
  const getTransactionAPI = useCallback(async (status: string) => {
    const response = await getTransaction(status.toLowerCase());
    setTotal(response.data.total);
    setData(response.data.data);
    console.log(response.data.data[0]._id);
  }, []);

  const onClickTab = (status: string) => {
    setStatus(status);
    getTransactionAPI(status);
  };

  useEffect(() => {
    getTransactionAPI("all");
  }, []);
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
                  value={total}
                  prefix="Rp. "
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                />
              </h3>
            </div>
            <div className="row mt-30 mb-20">
              <div className="col-lg-12 col-12 main-content">
                <div id="list_status_title">
                  <Status
                    status="AllTrx"
                    active={status === "all" ? true : false}
                    onClick={() => onClickTab("all")}
                  />
                  <Status
                    status="Success"
                    active={status === "Success" ? true : false}
                    onClick={() => onClickTab("Success")}
                  />
                  <Status
                    status="Pending"
                    active={status === "Pending" ? true : false}
                    onClick={() => onClickTab("Pending")}
                  />
                  <Status
                    status="Failed"
                    active={status === "Failed" ? true : false}
                    onClick={() => onClickTab("Failed")}
                  />
                </div>
              </div>
            </div>
            <div className="latest-transaction">
              <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
              </p>
              <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                  <thead>
                    <tr className="color-palette-1">
                      <th className="" scope="col">
                        Game
                      </th>
                      <th scope="col">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody id="list_status_item">
                    {data.map((item, index) => (
                      <TableRowTransactions
                        key={`table-data-transactions-${index}`}
                        imgUrl={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                        device={item.historyVoucherTopup.category}
                        price={item.historyVoucherTopup.price}
                        status={item.status}
                        title={item.historyVoucherTopup.gameName}
                        item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                        id={item._id}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
