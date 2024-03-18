import {createReducer, on} from '@ngrx/store';
import * as ItemsActions from '../actions/items.actions';

export interface IItemsReducer {
  items: Item[];
  isLoading: boolean;
  error: any;
}

const initialState: IItemsReducer = {
  items: [],
  isLoading: false,
  error: null
};

export const itemsReducer = createReducer(
  initialState,
  on(ItemsActions.loadItems, state => ({ ...state, isLoading: true, error: false })),
  on(ItemsActions.loadItemsSuccess, (state, { items }) => ({ ...state, items, isLoading: false })),
  on(ItemsActions.loadItemsFailure, (state, { error }) => ({ ...state, isLoading: false, error })),
  on(ItemsActions.addItem, (state, { item }) => ({ ...state, items: [...state.items, item] })),
  on(ItemsActions.removeItem, (state, { id }) => ({ ...state, items: state.items.filter(item => item.id !== id) })),
  on(ItemsActions.updateItem, (state, { id, changes }) => ({
    ...state,
    items: state.items.map(item => item.id === id ? { ...item, ...changes } : item)
  }))
);
