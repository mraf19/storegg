import Image from "next/image";
import { NumericFormat } from "react-number-format";
import Link from "next/link";
import capitalize from "../../../utils/capitalize";

type TableRowProps = {
  imgUrl: string;
  title: string;
  device: string;
  item: string;
  price: number;
  status: string;
  id: string;
};

export default function TableRowTransactions({
  imgUrl,
  title,
  device,
  item,
  price,
  status,
  id,
}: TableRowProps) {
  return (
    <tr data-category={status.toLowerCase()} className="align-middle">
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
          <span
            className={`float-start icon-status ${status.toLowerCase()}`}
          ></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {capitalize(status)}
          </p>
        </div>
      </td>
      <td>
        <Link
          href={`/member/transactions/${id}`}
          className="btn btn-status rounded-pill text-sm"
        >
          Details
        </Link>
      </td>
    </tr>
  );
}
