import { Component } from '@angular/core';
import {InputComponent} from "../../layouts/input/input.component";
import {ButtonComponent} from "../../layouts/button/button.component";
import {Store} from "@ngrx/store";
import {IItemsReducer} from "../../store/reducers/items.reducer";
import * as ItemsActions from "../../store/actions/items.actions";

@Component({
  selector: 'app-item-adder',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './item-adder.component.html',
  styleUrl: './item-adder.component.scss'
})
export class ItemAdderComponent {
  itemTitle: string = '';

  constructor(private store: Store<IItemsReducer>) {
  }

  onChange(event: any) {
    this.itemTitle = event;
  }

  onAdd() {
    const item = {
      id: Math.random(),
      title: this.itemTitle,
      completed: false,
      createdAt: new Date()
    }

    this.store.dispatch(ItemsActions.addItem({item}));
    this.itemTitle = '';
  }
}
