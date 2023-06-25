import Link from "next/link";
import Input from "../../atoms/Input";
import NominalCard from "./NominalCard";
import { NominalTypes, PaymentTypes } from "../../../services/dataTypes";
import PaymentCard from "./PaymentCard";

type TopUpFormProps = {
  nominals: NominalTypes[]
  payments: PaymentTypes[]
}

export default function TopUpForm({nominals, payments} : TopUpFormProps) {
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <Input
            type="text"
            name="ID"
            label="Verify ID"
            placeholder="Enter yout ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {
            nominals.map(nominal => (
              <NominalCard key={nominal._id} id={nominal._id} coinName={nominal.coinName} coinQuantity={nominal.coinQuantity} price={nominal.price}
          />
            ))
          }
          
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {
              payments.map(payment => (
                payment.banks.map(bank => (
                  <PaymentCard key={bank._id} id={bank._id} bankName={bank.bankName} type={payment.type} />
                ))
              ))
            }
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
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <Link
          href="./checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </Link>
      </div>
    </form>
  );
}
