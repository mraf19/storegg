import { useRouter } from "next/router";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import TopUpForm from "../../components/organisms/TopUpForm";
import TopUpItem from "../../components/organisms/TopUpItem";
import { useCallback, useEffect, useState } from "react";
import { getDetailVoucher, getFeaturedGame } from "../../services/player";
import {
  DataItemTypes,
  FeaturedGameTypes,
  NominalTypes,
  PaymentTypes,
} from "../../services/dataTypes";

type DetailProps = {
  dataItem: DataItemTypes;
  nominals: NominalTypes[];
  payment: PaymentTypes[];
};

export default function Detail({ dataItem, nominals, payment }: DetailProps) {
  useEffect(() => {
    localStorage.setItem("data-item", JSON.stringify(dataItem));
  }, []);
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
              category={dataItem.category.name}
              name={dataItem.name}
              thumbnail={dataItem.thumbnail}
            />
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem
                type="desktop"
                category={dataItem.category.name}
                name={dataItem.name}
              />
              <hr />
              <TopUpForm nominals={nominals} payments={payment} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const response = await getFeaturedGame();
  const data = response.data;

  const paths = data.map((item: FeaturedGameTypes) => {
    return {
      params: {
        id: item._id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

type GetStaticPropsTypes = {
  params: {
    id: string;
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsTypes) => {
  const response = await getDetailVoucher(params.id);
  const data = response.data;
  return {
    props: {
      dataItem: data.detail,
      nominals: data.detail.nominals,
      payment: data.payment,
    },
  };
};
