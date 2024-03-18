import { Component } from '@angular/core';
import {TableComponent} from "../../layouts/table/table.component";

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent {
  data = [
    {id: 1, name: 'Item 1', price: 100},
    {id: 2, name: 'Item 2', price: 200},
    {id: 3, name: 'Item 3', price: 300},
    {id: 4, name: 'Item 4', price: 400},
    {id: 5, name: 'Item 5', price: 500},
  ];
  columns = ['id', 'name', 'price'];

  constructor() { }
}
