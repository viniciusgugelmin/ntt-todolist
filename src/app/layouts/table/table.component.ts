import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output() callAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  onClick(item: any) {
    this.callAction.emit({ item });
  }
}
