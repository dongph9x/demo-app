import { useSelector } from "react-redux";
import { AppState } from "../../reducers";
import { IGameItemData } from "../../reducers/Game/types";
import { GameItem } from "../../components/Game";
function HomePageContainer() {
  const ListGames: Array<IGameItemData> = useSelector(
    (state: AppState) => state.ListGames
  );
  return (
    <div className="container">
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active">
          <div className="row">
            {ListGames.map((data: IGameItemData, i: number) => {
              return <GameItem key={i} data={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomePageContainer };
