import { useEffect, useState } from "react";
import { IMG } from "../../../utils/constant";

export default function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    name: "",
    thumbnail: "",
    category: {
      name: "",
    },
  });
  useEffect(() => {
    const dataLocal = localStorage.getItem("data-item");
    const dataItem = JSON.parse(dataLocal!);
    setDataItem(dataItem);
  }, []);

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img
            src={`${IMG}/${dataItem.thumbnail}`}
            className="img-fluid"
            alt="game"
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{dataItem.name}</p>
        <p className="color-palette-2 m-0">
          Category: {dataItem.category.name}
        </p>
      </div>
    </div>
  );
}
