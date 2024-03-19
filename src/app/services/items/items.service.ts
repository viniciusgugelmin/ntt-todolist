import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() {
  }

  private async getItemsFromLocalStorage(): Promise<Item[]> {
    const delay = new Promise(resolve => setTimeout(resolve, 1000));

    try {
      await delay;

      return JSON.parse(localStorage.getItem('items') || '[]');
    } catch (e) {
      localStorage.removeItem('items');
      return [];
    }
  }

  get(): Observable<Item[]> {
    return from(this.getItemsFromLocalStorage());
  }

  add(item: Item) {
    this.getItemsFromLocalStorage().then(items => {
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    });

    return from(this.getItemsFromLocalStorage());
  }

  put(id: Item['id'], changes: Partial<Item>) {
    this.getItemsFromLocalStorage().then(items => {
      const item = items.find(item => item.id === id);
      if (item) {
        Object.assign(item, changes);
        localStorage.setItem('items', JSON.stringify(items));
      }
    });

    return from(this.getItemsFromLocalStorage());
  }
}
