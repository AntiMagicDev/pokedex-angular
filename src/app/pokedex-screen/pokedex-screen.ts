import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex-screen',
  imports: [],
  templateUrl: './pokedex-screen.html',
  styleUrl: './pokedex-screen.css',
})
export class PokedexScreen {
  @Input() data: any[] = [];
}
