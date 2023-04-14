import Link from "next/link";

type StatusProps = {
  status: string;
  index: number;
};

export default function Status({ status, index }: StatusProps) {
  return (
    <Link
      data-filter={status.toLowerCase()}
      href={`#${status}`}
      className={`btn btn-status rounded-pill text-sm ${
        index === 0 ? "btn-active" : ""
      } me-3`}
    >
      {status}
    </Link>
  );
}
