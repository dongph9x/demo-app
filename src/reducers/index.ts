import { combineReducers } from 'redux';
import { ListGames, Jackpot } from './Game';
const appReducers = combineReducers({
    ListGames,
    Jackpot,
});

export type AppState = ReturnType<typeof appReducers>;


export default appReducers;
