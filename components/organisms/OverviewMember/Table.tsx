import data from "../../../data/OverviewMember.json";
import TableRow from "./TableRow";

export default function Table() {
  return (
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
            imgUrl={item.imgUrl}
            title={item.title}
            device={item.device}
            price={item.price}
            item={item.item}
            status={item.status}
          />
        ))}
      </tbody>
    </table>
  );
}
