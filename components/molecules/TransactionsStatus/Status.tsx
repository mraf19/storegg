type StatusProps = {
  status: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Status({ status, active, onClick }: StatusProps) {
  return (
    <button
      data-filter={status.toLowerCase()}
      className={`btn btn-status rounded-pill text-sm ${
        active ? "btn-active" : ""
      } me-3`}
      onClick={onClick}
    >
      {status}
    </button>
  );
}
