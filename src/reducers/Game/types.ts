export interface IGameItemData {
    categories: Array<string>;
    name: string;
    image: string;
    id: string;
}

export interface IJackpotItemData {
    game: string;
    amount: number;
}

export interface IJackpotItemGameData {
    categories: Array<string>;
    name: string;
    image: string;
    id: string;
    amount: number;
}
