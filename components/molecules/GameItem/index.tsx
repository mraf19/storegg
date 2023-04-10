import Image from "next/image";
import Link from "next/link";

type GameItemProps = {
  imgUrl: string;
  title: string;
  device: string;
};
export default function GameItem({ imgUrl, title, device }: GameItemProps) {
  return (
    <div className="featured-game-card position-relative">
      <Link href="./detail">
        <div className="blur-sharp">
          <Image
            className="thumbnail"
            src={imgUrl}
            width={205}
            height={270}
            alt="thumbnail"
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image
                src="/icon/game-icon.svg"
                width={54}
                height={36}
                alt="game-icon"
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{device}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
