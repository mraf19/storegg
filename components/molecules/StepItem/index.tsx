import Image from "next/image";

type StepItemProps = {
  imgUrl: string;
  title: string;
  description1: string;
  description2: string;
};
export default function StepItem({
  imgUrl,
  title,
  description1,
  description2,
}: StepItemProps) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <Image
          src={imgUrl}
          width={80}
          height={80}
          alt="icon"
          className="mb-30"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {description1}
          <br />
          {description2}
        </p>
      </div>
    </div>
  );
}
