import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() {
  }

  get(): Observable<Item[]> {
    return from(this.getItemsFromLocalStorage());
  }

  private async getItemsFromLocalStorage(): Promise<Item[]> {
    const delay = new Promise(resolve => setTimeout(resolve, 1000));
    await delay;
    return JSON.parse(localStorage.getItem('items') || '[]');
  }

  async add(itemTitle: string) {
    const id = +Math.random().toString(36).substring(7);
    const createdAt = new Date();

    const item: Item = {
      id,
      title: itemTitle,
      completed: false,
      createdAt
    };

    const items = this.get();
    items.subscribe(items => {
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    });
  }
}
