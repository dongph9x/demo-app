import { gamesConstants } from "../../constants";
import type { AnyAction } from "redux";
import { IJackpotItemData } from "./types";

var initialState: Array<IJackpotItemData> = [];

const Jackpot = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case gamesConstants.GET_JACKPOT_DATA:
      return action.data;
    case gamesConstants.CLEAR_JACKPOT_DATA:
      return initialState;
    default:
      return state;
  }
};

export { Jackpot };
