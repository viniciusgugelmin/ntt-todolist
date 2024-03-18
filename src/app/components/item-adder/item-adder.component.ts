import { Component } from '@angular/core';
import {InputComponent} from "../../layouts/input/input.component";
import {ButtonComponent} from "../../layouts/button/button.component";

@Component({
  selector: 'app-item-adder',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './item-adder.component.html',
  styleUrl: './item-adder.component.scss'
})
export class ItemAdderComponent {
  item: string = '';

  onChange(event: any) {
    this.item = event;
  }

  onAdd() {
    console.log('Item added:', this.item);
  }
}
