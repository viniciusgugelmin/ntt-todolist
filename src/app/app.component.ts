import {Component} from '@angular/core';
import {HeaderComponent} from "./layouts/header/header.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {ItemAdderComponent} from "./components/item-adder/item-adder.component";
import {ItemsListComponent} from "./components/items-list/items-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ItemAdderComponent, ItemsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ntt-todolist';
}
