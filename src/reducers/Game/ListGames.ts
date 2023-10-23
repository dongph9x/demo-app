import { gamesConstants } from "../../constants";
import type { AnyAction } from "redux";
import { IGameItemData } from "./types";

var initialState: Array<IGameItemData> = [];

const ListGames = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case gamesConstants.GET_GAMES_DATA:
      return action.data;
    default:
      return state;
  }
};

export { ListGames };
