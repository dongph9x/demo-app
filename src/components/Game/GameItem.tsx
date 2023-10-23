import * as React from "react";
import { IGameItemData } from "../../reducers/Game/types";
import { regexChangeNumberToCommas } from "../../helpers";
type IProps = {
  data: IGameItemData;
  amountJackpot?: number;
  extendClass?: string;
};

function GameItem(props: IProps) {
  const { data, amountJackpot } = props;
  return (
    <div className="item-container col-sm-6 col-md-4 col-lg-4">
      <div className={`item ${props.extendClass || ""}`}>
        <div className="thumb">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="box">
          {data.categories.includes("new") && (
            <div className="ribbon cat-new">
              <span>New</span>
            </div>
          )}
          {data.categories.includes("top") && (
            <div className="ribbon cat-top">
              <span>Top</span>
            </div>
          )}
        </div>
        {amountJackpot && (
          <div className="jackpot-item">
            <span className="jackpot">
              £{regexChangeNumberToCommas(amountJackpot)}{" "}
            </span>
          </div>
        )}
        <div className="item-change-hove">
          <h2>{data.name}</h2>
          <div className="flex-center">
            <button className="btn-play-now">Play now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GameItem };
