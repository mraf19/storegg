import Input from "../../atoms/Input";
import NominalCard from "./NominalCard";
import {
  BankTypes,
  NominalTypes,
  PaymentTypes,
} from "../../../services/dataTypes";
import PaymentCard from "./PaymentCard";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

type TopUpFormProps = {
  nominals: NominalTypes[];
  payments: PaymentTypes[];
};

export default function TopUpForm({ nominals, payments }: TopUpFormProps) {
  const [verifyID, setVerifyID] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominal, setNominal] = useState<NominalTypes>({} as NominalTypes);
  const [payment, setPayment] = useState<PaymentTypes>({} as PaymentTypes);
  const [bank, setBank] = useState<BankTypes>({} as BankTypes);
  const router = useRouter();

  const setDataPayment = (payment: PaymentTypes, bank: BankTypes) => {
    setPayment(payment);
    setBank(bank);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      verifyID.length === 0 ||
      Object.keys(nominal).length === 0 ||
      Object.keys(payment).length === 0 ||
      Object.keys(bank).length === 0 ||
      bankAccountName.length === 0
    ) {
      toast.error("Semua data wajib diisi!!");
    } else {
      const dataTopUp = {
        verifyID,
        nominal,
        payment,
        bank,
        bankAccountName,
      };
      localStorage.setItem("data-topup", JSON.stringify(dataTopUp!));
      router.push("/checkout");
    }
  };

  return (
    <form>
      <div className="pt-md-50 pt-30">
        <div className="">
          <Input
            type="text"
            name="ID"
            label="Verify ID"
            placeholder="Enter yout ID"
            value={verifyID}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setVerifyID(event.target.value)
            }
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalCard
              key={nominal._id}
              id={nominal._id}
              coinName={nominal.coinName}
              coinQuantity={nominal.coinQuantity}
              price={nominal.price}
              onChange={() => setNominal(nominal)}
            />
          ))}

          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) =>
              payment.banks.map((bank) => (
                <PaymentCard
                  key={bank._id}
                  id={bank._id}
                  bankName={bank.bankName}
                  type={payment.type}
                  onChange={() => setDataPayment(payment, bank)}
                />
              ))
            )}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <Input
          type="text"
          name="bankAccount"
          label="Bank Account Name"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setBankAccountName(event.target.value)
          }
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
