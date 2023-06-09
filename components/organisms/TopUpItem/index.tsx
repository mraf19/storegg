type TopUpItemProps = {
  type: "mobile" | "desktop";
  name: string
  category: string
  thumbnail?: string
};

export default function TopUpItem({ type, name, category, thumbnail }: TopUpItemProps) {
const IMG_URL = process.env.NEXT_PUBLIC_IMG_API

  if (type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">Category: {category}</p>
      </div>
    );
  }
  return (
    <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
      <div className="row align-items-center">
        <div className="col-md-12 col-4">
          <img
            src={`${IMG_URL}/${thumbnail}`}
            width="280"
            height="380"
            className="img-fluid"
            alt="0"
          />
        </div>
        <div className="col-md-12 col-8 d-md-none d-block">
          <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
            {name}
          </h2>
          <p className="text-sm color-palette-2 text-start mb-0">
            Category: {category}
          </p>
        </div>
      </div>
    </div>
  );
}
