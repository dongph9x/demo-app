import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppState } from "../../reducers";
import { IGameItemData } from "../../reducers/Game/types";
import { GameItem } from "../../components/Game";
function GameCategoryContainer() {
  // @ts-ignore
  const { category } = useParams();

  const ListGames: Array<IGameItemData> = useSelector(
    (state: AppState) => state.ListGames
  );

  return (
    <div className="container">
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active">
          <div className="row">
            {ListGames.filter((item: IGameItemData) =>
              item.categories.includes(category)
            ).map((data: IGameItemData, i: number) => {
              return (
                <GameItem key={i} data={data} extendClass={category || ""} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { GameCategoryContainer };
