/**
 * @jest-environment jsdom
 */
import * as React from "react";
import { act } from "react-dom/test-utils";
import * as ReactDOM from "react-dom";
import { GameItem } from "./GameItem";

describe("GameItem", function () {
  it("Should display new ribbon on item", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);

    let dataItem = {
      categories: ["top", "slots", "new"],
      name: "The Wish Master",
      image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      id: "NETHEWISHMASTER",
    };

    act(() => {
      ReactDOM.render(<GameItem data={dataItem} />, container);
    });
    expect(container.querySelector(".new")).not.toBeNull();
  });
  it("Should display top ribbon on item", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);

    let dataItem = {
      categories: ["top", "slots", "new"],
      name: "The Wish Master",
      image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      id: "NETHEWISHMASTER",
    };

    act(() => {
      ReactDOM.render(<GameItem data={dataItem} />, container);
    });
    expect(container.querySelector(".new")).not.toBeNull();
  });
  it("Should display both new & top ribbon on item", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);

    let dataItem = {
      categories: ["top", "slots", "new"],
      name: "The Wish Master",
      image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      id: "NETHEWISHMASTER",
    };

    act(() => {
      ReactDOM.render(<GameItem data={dataItem} />, container);
    });
    expect(container.querySelector(".new")).not.toBeNull();
    expect(container.querySelector(".top")).not.toBeNull();
  });

  it("Should hide ribbon", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);

    let dataItem = {
      categories: ["slots"],
      name: "The Wish Master",
      image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      id: "NETHEWISHMASTER",
    };

    act(() => {
      ReactDOM.render(<GameItem data={dataItem} />, container);
    });
    expect(container.querySelector(".new")).toBeNull();
    expect(container.querySelector(".top")).toBeNull();
  });

  it("Should display Jackpot", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);

    let dataItem = {
      categories: ["slots"],
      name: "The Wish Master",
      image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      id: "NETHEWISHMASTER",
    };

    act(() => {
      ReactDOM.render(
        <GameItem data={dataItem} amountJackpot={123} />,
        container
      );
    });
    expect(container.querySelector(".jackpot")).not.toBeNull();
  });

  it("Should hide Jackpot", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);

    let dataItem = {
      categories: ["slots"],
      name: "The Wish Master",
      image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      id: "NETHEWISHMASTER",
    };

    act(() => {
      ReactDOM.render(
        <GameItem data={dataItem} amountJackpot={123} />,
        container
      );
    });
    expect(container.querySelector(".jackpot")).not.toBeNull();
  });

  it("Should display Other", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);

    let dataItem = {
      categories: ["other"],
      name: "Tribble",
      image: "//stage.whgstage.com/scontent/images/games/NETRIBBLE.jpg",
      id: "NETRIBBLE",
    };

    act(() => {
      ReactDOM.render(
        <GameItem
          data={dataItem}
          extendClass={dataItem.categories.includes("other") ? "other" : ""}
        />,
        container
      );
    });
    expect(container.querySelector(".other")).not.toBeNull();
  });
});
