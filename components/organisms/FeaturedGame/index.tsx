import GameItem from "../../molecules/GameItem";
import { useCallback, useEffect, useState } from "react";
import { getFeaturedGame } from "../../../services/player";
import { FeaturedGameTypes } from "../../../services/dataTypes";

export default function gameList() {
  const IMG_URL = process.env.NEXT_PUBLIC_IMG_API;

  const [gameList, setGameList] = useState([]);

  const getGameListAPI = useCallback(async () => {
    const response = await getFeaturedGame();
    const data = response.data;
    setGameList(data);
  }, []);

  useEffect(() => {
    getGameListAPI();
  }, []);
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item: FeaturedGameTypes) => (
            <GameItem
              key={item._id}
              id={item._id}
              imgUrl={`${IMG_URL}/${item.thumbnail}`}
              title={item.name}
              device={item.category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
