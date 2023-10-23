import { NavLink } from "react-router-dom";

function TopSideBar() {
  return (
    <div className="main-menu">
      <div className="container">
        <div className="m-scroll scrollbar-custom">
          <ul className="nav nav-tabs tab-custom" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/game/top"}
              >
                Top Games
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/game/slots"}
              >
                Slots
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/jackpots"}
              >
                Jackpots
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/game/live"}
              >
                Live
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/game/blackjack"}
              >
                Blackjack
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/game/roulette"}
              >
                Roulette
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/game/table"}
              >
                Table
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/game/poker"}
              >
                Poker
              </NavLink>
            </li>
            <li className="nav-item" role="presentation">
              <NavLink
                activeClassName={"active"}
                className="nav-link "
                exact
                to={"/game/other"}
              >
                Other
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { TopSideBar };
