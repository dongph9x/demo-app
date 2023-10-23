import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../actions";
import { GameItem } from "../../components/Game";
import { AppState } from "../../reducers";
import { IGameItemData, IJackpotItemData } from "../../reducers/Game/types";
function JackpotContainer() {
  const dispatch = useDispatch();
  const ListGames: Array<IGameItemData> = useSelector(
    (state: AppState) => state.ListGames
  );
  const Jackpot: Array<IJackpotItemData> = useSelector(
    (state: AppState) => state.Jackpot
  );

  useEffect(() => {
    dispatch(gameActions.getJackpotData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => dispatch(gameActions.getJackpotData()),
      10000
    );
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFullDataJacpot = () => {
    if (Jackpot.length && ListGames.length) {
      const result = [];
      for (const item_jackpot of Jackpot) {
        const matchingItem = ListGames.find(
          (item_game: IGameItemData) => item_jackpot.game === item_game.id
        );
        if (matchingItem) {
          const matchedData = { ...matchingItem, amount: item_jackpot.amount };
          result.push(matchedData);
        }
      }
      return result;
    }
    return [];
  };
  return (
    <div className="container">
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active">
          <div className="row">
            {getFullDataJacpot().map((data: any, i: number) => {
              return (
                <GameItem key={i} data={data} amountJackpot={data.amount} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { JackpotContainer };
