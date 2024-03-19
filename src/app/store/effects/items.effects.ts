import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, map, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ItemsService} from '../../services/items/items.service';
import * as ItemsActions from '../actions/items.actions';
import {updateItem} from "../actions/items.actions";

@Injectable()
export class ItemsEffects {
  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {
  }

  loadItems$ = createEffect(() => this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      mergeMap( ()=> this.itemsService.get()
        .pipe(
          map(items => ItemsActions.loadItemsSuccess({items})),
          catchError(error => of(ItemsActions.loadItemsFailure({error})))
        )
    )
  ));

  addItem$ = createEffect(() => this.actions$.pipe(
      ofType(ItemsActions.addItem),
      mergeMap(({item}) => this.itemsService.add(item)
        .pipe(
          map(items => ItemsActions.loadItemsSuccess({items})),
          catchError(error => of(ItemsActions.loadItemsFailure({error})))
        )
    )
  ));

  updateItem$ = createEffect(() => this.actions$.pipe(
      ofType(ItemsActions.updateItem),
      mergeMap(({id, changes}) => this.itemsService.put(id, changes)
        .pipe(
          map(items => ItemsActions.loadItemsSuccess({items})),
          catchError(error => of(ItemsActions.loadItemsFailure({error})))
        )
    )
  ));
}
