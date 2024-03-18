import { Component } from '@angular/core';
import {InputComponent} from "../../layouts/input/input.component";

@Component({
  selector: 'app-item-adder',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './item-adder.component.html',
  styleUrl: './item-adder.component.scss'
})
export class ItemAdderComponent {
  item: string = '';

  onChange(event: any) {
    this.item = event;
  }
}
