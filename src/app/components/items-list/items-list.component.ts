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
  items$: Observable<Item[]> = new Observable<Item[]>();
  isLoading$: Observable<boolean> = new Observable<boolean>();
  error$: Observable<boolean> = new Observable<boolean>();

  columns: TableColumn[] = [
    {key: 'id', display: 'ID'},
    {key: 'title', display: 'Title'},
    {key: 'completed', display: 'Completed', convert: (value: boolean) => value ? '✅' : '❌'},
    {key: 'createdAt', display: 'Created At', convert: (value: string) => new Date(value).toLocaleString()}
  ];

  constructor(private store: Store<IItemsReducer>) {
  }

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());

    this.items$ = this.store.select(ItemsSelectors.selectAllItems);
    this.isLoading$ = this.store.select(ItemsSelectors.selectItemLoading);
    this.error$ = this.store.select(ItemsSelectors.selectItemError);
  }

  check({item}: { item: Item }): void {
    this.store.dispatch(ItemsActions.updateItem({ id: item.id, changes: { completed: !item.completed } }));
  }
}
