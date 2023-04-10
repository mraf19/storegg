import data from "../../../data/reached.json";
import ReachedList from "./ReachedList";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          {data.map((item, index) => (
            <ReachedList
              key={`reacjedList-${index}`}
              index={index}
              data={item.data}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
