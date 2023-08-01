import Image from "next/image";
import { NumericFormat } from "react-number-format";

type CategoriesCardProps = {
  title: string;
  totalSpent: number;
};
export default function CategoriesCard({
  title,
  totalSpent,
}: CategoriesCardProps) {
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image
            src={
              title === "PC" || title === "Desktop"
                ? "/icon/ic-desktop.svg"
                : title === "mobile"
                ? "/icon/ic-mobile.svg"
                : "/icon/ic-other.svg"
            }
            width={60}
            height={60}
            alt={`ic-${title}`}
          />
          <p className="color-palette-1 mb-0 ms-12">{title}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            <NumericFormat
              value={totalSpent}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </div>
      </div>
    </div>
  );
}
