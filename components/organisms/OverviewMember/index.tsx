import CategoriesCard from "./CategoriesCard";
import { useCallback, useEffect, useState } from "react";
import { getMemberOverview } from "../../../services/player";
import TableRow from "./TableRow";
import { IMG } from "../../../utils/constant";
import {
  CountTypes,
  HistoryTransactionTypes,
} from "../../../services/dataTypes";

export default function OverviewMember() {
  const [count, setCount] = useState<CountTypes[]>([]);
  const [data, setData] = useState<HistoryTransactionTypes[]>([]);
  const getDataMember = useCallback(async () => {
    const response = await getMemberOverview();
    setCount(response.data.count);
    setData(response.data.data);
  }, []);
  useEffect(() => {
    getDataMember();
  }, []);
  console.log(data);
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item, index) => (
                <CategoriesCard
                  key={`card-categories-${index}`}
                  title={item.name}
                  totalSpent={item.valeu}
                />
              ))}
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <TableRow
                    key={`table-data-${index}`}
                    imgUrl={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                    title={item.historyVoucherTopup.gameName}
                    device={item.historyVoucherTopup.category}
                    price={item.historyVoucherTopup.price}
                    item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                    status={item.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
