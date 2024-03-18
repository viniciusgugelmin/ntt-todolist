import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, map, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {ItemsService} from '../../services/items/items.service';
import * as ItemsActions from '../actions/items.actions';

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
}
