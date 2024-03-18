import { Action } from '@ngrx/store';

export interface IItemsReducer {
  items: Filme[];
}

const initialState: IItemsReducer = {
  items: [],
};

export function ItemsReducer(state: IItemsReducer = initialState, action: Action): IItemsReducer {
  switch (action.type) {
    default:
      return state;
  }
}
