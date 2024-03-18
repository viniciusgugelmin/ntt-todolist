import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as ItemsSelectors from '../../store/selectors/items.selectors';
import {TableComponent} from "../../layouts/table/table.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {IItemsReducer} from "../../store/reducers/items.reducer";
import * as ItemsActions from "../../store/actions/items.actions";

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    TableComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent implements OnInit {
  items$: Observable<Item[]>  = new Observable<Item[]>();
  isLoading$: Observable<boolean> = new Observable<boolean>();
  error$: Observable<boolean> = new Observable<boolean>();

  columns = ['id', 'title', 'completed', 'createdAt'];

  constructor(private store: Store<IItemsReducer>) {
  }

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());

    this.items$ = this.store.select(ItemsSelectors.selectAllItems);
    this.isLoading$ = this.store.select(ItemsSelectors.selectItemLoading);
    this.error$ = this.store.select(ItemsSelectors.selectItemError);
  }
}
