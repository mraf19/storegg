import Link from "next/link";
import DetailPayment from "./DetailPayment";
import DetailPurchase from "./DetailPurchase";
import Header from "./Header";

export default function TransactionDetailContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #GG001
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <Header />
              <hr />
              <DetailPurchase />
              <DetailPayment />
              <div className="d-md-block d-flex flex-column w-100">
                <Link
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
