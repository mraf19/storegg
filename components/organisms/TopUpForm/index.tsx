import Link from "next/link";
import Input from "../../atoms/Input";
import Label from "./LabelCard";
import LabelCard from "./LabelCard";

export default function TopUpForm() {
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
          <LabelCard
            isNominal
            id="topup1"
            name="topup"
            nominal={125}
            item="Gold"
            desc="Rp. 3.250.000"
          />
          <LabelCard
            isNominal
            id="topup2"
            name="topup"
            nominal={225}
            item="Gold"
            desc="Rp. 3.250.000"
          />
          <LabelCard
            isNominal
            id="topup3"
            name="topup"
            nominal={350}
            item="Gold"
            desc="Rp. 3.250.000"
          />
          <LabelCard
            isNominal
            id="topup4"
            name="topup"
            nominal={550}
            item="Gold"
            desc="Rp. 3.250.000"
          />
          <LabelCard
            isNominal
            id="topup5"
            name="topup"
            nominal={750}
            item="Gold"
            desc="Rp. 3.250.000"
          />
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <LabelCard
              id="transfer"
              name="paymentMethod"
              desc="Worldwide Available"
              method="Transfer"
              isNominal={false}
            />
            <LabelCard
              id="visa"
              name="paymentMethod"
              desc="Credit Card"
              method="Visa"
              isNominal={false}
            />
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
