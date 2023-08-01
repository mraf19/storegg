import { useState } from "react";
import { toast } from "react-toastify";
import { setCheckOut } from "../../../services/player";
import { useRouter } from "next/router";

export default function CheckoutConfirmation() {
  const [check, setCheck] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem("data-item");
    const dataTopUpLocal = localStorage.getItem("data-topup");
    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopUp = JSON.parse(dataTopUpLocal!);

    if (!check) {
      toast.error("Silahkan lakukan pembayaran terlbih dahulu!!");
    } else {
      const data = {
        voucher: dataItem._id,
        nominal: dataTopUp.nominal._id,
        payment: dataTopUp.payment._id,
        bank: dataTopUp.bank._id,
        name: dataTopUp.bankAccountName,
        accountUser: dataTopUp.verifyID,
      };

      const response = await setCheckOut(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Berhasil Checkout!");
        localStorage.clear();
        router.push("complete-checkout");
      }
    }
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={check}
          onChange={() => setCheck(!check)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
