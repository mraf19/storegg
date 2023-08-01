import Image from "next/image";
import { NumericFormat } from "react-number-format";
import capitalize from "../../../utils/capitalize";

type TableRowProps = {
  imgUrl: string;
  title: string;
  device: string;
  item: string;
  price: number;
  status: string;
};

export default function TableRow({
  imgUrl,
  title,
  device,
  item,
  price,
  status,
}: TableRowProps) {
  return (
    <tr className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={imgUrl}
          width={80}
          height={60}
          alt="table"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {device}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          <NumericFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${status}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {capitalize(status)}
          </p>
        </div>
      </td>
    </tr>
  );
}
