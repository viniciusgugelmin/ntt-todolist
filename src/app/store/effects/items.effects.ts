import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FilmeService } from '../services/filme.service';
import * as MeuActions from "../actions/items.action";

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(MeuActions.carregarFilmes),
    switchMap(() => this.filmeService.getFilmes().pipe(
      map(filmes => MeuActions.carregarFilmesSuccess({ filmes })),
      catchError(error => of(MeuActions.carregarFilmesFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private filmeService: FilmeService
  ) {}
}
