import CategoriesCard from "./CategoriesCard";
import data from "../../../data/CategoriesCard.json";
import Table from "./Table";

export default function OverviewMember() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {data.map((item, index) => (
                <CategoriesCard
                  key={`card-categories-${index}`}
                  imgUrl={item.imgUrl}
                  title1={item.title1}
                  title2={item.title2}
                  totalSpent={item.totalSpent}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <Table />
          </div>
        </div>
      </div>
    </main>
  );
}
