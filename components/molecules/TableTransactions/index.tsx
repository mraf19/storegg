import TableRowTransactions from "./TableRow";
import data from "../../../data/OverviewMember.json";

export default function TableTransactions() {
  return (
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
            imgUrl={item.imgUrl}
            device={item.device}
            price={item.price}
            status={item.status}
            title={item.title}
            item={item.item}
          />
        ))}
      </tbody>
    </table>
  );
}
