import { Component } from '@angular/core';
import {
  filterStaggerAnimation,
  flyAnimation,
  staggerAnimation,
} from '../../animation';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-hero-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  animations: [staggerAnimation, filterStaggerAnimation, flyAnimation],

  templateUrl: './hero-list-page.component.html',
  styleUrl: './hero-list-page.component.css',
})
export class HeroListPageComponent {
  isTrue: boolean = true;
  items: { name: string; emoji: string; id: number }[] = [
    { name: 'Item 1', emoji: '🍏', id: 1 },
    { name: 'Item 2', emoji: '🍎', id: 2 },
    { name: 'Item 3', emoji: '🍊', id: 3 },
    { name: 'Item 4', emoji: '🍇', id: 4 },
  ];

  onAdd() {
    const id = Math.floor(Math.random() * 100 + 1);
    const name = 'nameRa';
    const emoji = '';
    const newItem = {
      id,
      name,
      emoji,
    };
    this.items = [newItem, ...this.items];
  }

  onDelete(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    console.log(id);
  }

  trackByItems(index: number, item: any): number {
    return item.id;
  }
}
