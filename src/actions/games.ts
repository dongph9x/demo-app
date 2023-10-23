import { apiCallCenter } from "../helpers";
import { gamesConstants } from "../constants";
import { IGameItemData } from "../reducers/Game/types";

const getListGames = () => {
  return (dispatch: any) => {
    return apiCallCenter("/front-end-test/games.php", "GET").then(
      (data) => {
        const newData = data.map((item: IGameItemData) => {
          if (
            gamesConstants.CATEGORY_OTHER.some((keyword) =>
              item.categories.includes(keyword)
            )
          ) {
            item.categories = [];
            item.categories.push("other");
          }
          return item;
        });
        dispatch({
          type: gamesConstants.GET_GAMES_DATA,
          data: newData,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

const getJackpotData = () => {
  return (dispatch: any) => {
    dispatch({
      type: gamesConstants.CLEAR_JACKPOT_DATA,
    });

    return apiCallCenter("/front-end-test/jackpots.php", "GET").then(
      (data) => {
        dispatch({
          type: gamesConstants.GET_JACKPOT_DATA,
          data: data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

export const gameActions = {
  getListGames,
  getJackpotData,
};
