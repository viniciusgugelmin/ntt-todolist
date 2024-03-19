import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];

  constructor() { }
}
