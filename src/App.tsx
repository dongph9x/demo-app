import { Router, Route, Switch, Redirect } from "react-router-dom";
import { HomePageContainer } from "./containers/Homepage";
import { history } from "./helpers";
import {
  GameCategoryContainer,
  JackpotContainer,
} from "./containers/TabContent";
import { TopSideBar } from "./components/TopNav";
import "./index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "./actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameActions.getListGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        className="spinner-border loading-spinner hide"
        id="loading-spinner"
      ></div>
      <Router history={history}>
        <TopSideBar />
        <Switch>
          <Route path="/" exact={true} component={HomePageContainer} />
          <Route
            path="/game/:category"
            exact={true}
            component={GameCategoryContainer}
          />
          <Route path="/jackpots" exact={true} component={JackpotContainer} />
          <Redirect exact={true} from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
