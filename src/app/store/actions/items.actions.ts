import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Item] Load Items');
export const loadItemsSuccess = createAction('[Item] Load Items Success', props<{ items: Item[] }>());
export const loadItemsFailure = createAction('[Item] Load Items Failure', props<{ error: any }>());
export const addItem = createAction('[Item] Add Item', props<{ item: Item }>());
export const removeItem = createAction('[Item] Remove Item', props<{ id: number }>());
export const updateItem = createAction('[Item] Update Item', props<{ id: number, changes: Partial<Item> }>());
