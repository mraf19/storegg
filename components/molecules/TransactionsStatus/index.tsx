import Status from "./Status";

export default function TransactionStatus() {
  const statusses = ["AllTrx", "Success", "Pending", "Failed"];
  return (
    <div className="row mt-30 mb-20">
      <div className="col-lg-12 col-12 main-content">
        <div id="list_status_title">
          {statusses.map((status, index) => (
            <Status key={`status-${index}`} status={status} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
