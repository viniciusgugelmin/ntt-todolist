import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IItemsReducer } from '../reducers/items.reducer';

export const selectItemState = createFeatureSelector<IItemsReducer>('items');

export const selectAllItems = createSelector(
  selectItemState,
  state => state.items
);

export const selectItemLoading = createSelector(
  selectItemState,
  state => state.isLoading
);

export const selectItemError = createSelector(
  selectItemState,
  state => state.error
);
