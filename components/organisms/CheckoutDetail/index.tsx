import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function CheckoutDetail() {
  const [dataTopUp, setDataTopUp] = useState({
    verifyID: "",
    bankAccountName: "",
    bank: {
      _id: "",
      bankName: "",
      name: "",
      noRekening: "",
    },
    nominal: {
      _id: "",
      coiName: "",
      coinQuantity: 0,
      price: 0,
    },
    payment: {
      type: "",
    },
  });
  useEffect(() => {
    const dataLocal = localStorage.getItem("data-topup");
    const dataTopUp = JSON.parse(dataLocal!);
    setDataTopUp(dataTopUp);
  }, []);

  const itemPrice = dataTopUp.nominal.price;
  const tax = itemPrice * 0.1;
  const totalPrice = itemPrice + tax;
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{" "}
          <span className="purchase-details">{dataTopUp.verifyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {dataTopUp.nominal.coinQuantity} {dataTopUp.nominal.coiName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumericFormat
              value={itemPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumericFormat
              value={tax}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={totalPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{dataTopUp.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type <span className="payment-details">{dataTopUp.payment.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">{dataTopUp.bank.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">{dataTopUp.bank.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">{dataTopUp.bank.noRekening}</span>
        </p>
      </div>
    </>
  );
}
