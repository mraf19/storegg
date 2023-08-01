import { useRouter } from "next/router";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItem";
import { useCallback, useEffect, useState } from "react";
import { getDetailVoucher } from "../../services/player";
import { NominalTypes, PaymentTypes } from "../../services/dataTypes";

export default function Detail() {
  const { query, isReady } = useRouter();
  const [detail, setDetail] = useState({
    name: "",
    thumbnail: "",
    category: {
      name: "",
    },
  });
  const [nominals, setNominals] = useState<NominalTypes[]>([]);
  const [payments, setPayments] = useState<PaymentTypes[]>([]);

  const getDetailVoucherAPI = useCallback(async (id: string) => {
    const response = await getDetailVoucher(id);
    const data = response.data;
    setDetail(data.detail);
    localStorage.setItem("data-item", JSON.stringify(data.detail));
    setNominals(data.detail.nominals);
    setPayments(data.payment);
  }, []);

  useEffect(() => {
    if (isReady) {
      getDetailVoucherAPI(query.id);
    }
  }, [isReady]);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <TopUpItem
              type="mobile"
              category={detail.category.name}
              name={detail.name}
              thumbnail={detail.thumbnail}
            />
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem
                type="desktop"
                category={detail.category.name}
                name={detail.name}
              />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
