import {Component, OnInit} from '@angular/core';
import {InputComponent} from "../../layouts/input/input.component";
import {ButtonComponent} from "../../layouts/button/button.component";
import {Store} from "@ngrx/store";
import {IItemsReducer} from "../../store/reducers/items.reducer";
import * as ItemsActions from "../../store/actions/items.actions";
import { v4 as uuid } from 'uuid';
import {Observable} from "rxjs";
import * as ItemsSelectors from "../../store/selectors/items.selectors";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-item-adder',
  standalone: true,
  imports: [InputComponent, ButtonComponent, AsyncPipe],
  templateUrl: './item-adder.component.html',
  styleUrl: './item-adder.component.scss'
})
export class ItemAdderComponent implements OnInit {
  itemTitle: string = '';

  isLoading$: Observable<boolean> = new Observable<boolean>();
  error$: Observable<boolean> = new Observable<boolean>();

  constructor(private store: Store<IItemsReducer>) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(ItemsSelectors.selectItemLoading);
    this.error$ = this.store.select(ItemsSelectors.selectItemError);
  }

  onChange(event: any) {
    this.itemTitle = event;
  }

  onAdd() {
    if (!this.itemTitle) {
      return;
    }

    const item = {
      id: uuid(),
      title: this.itemTitle,
      completed: false,
      createdAt: new Date()
    }

    this.store.dispatch(ItemsActions.addItem({item}));
    this.itemTitle = '';
  }
}
