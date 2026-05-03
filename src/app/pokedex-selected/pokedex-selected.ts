import { Component, inject } from '@angular/core';
import { PokedexService } from '@services/pokedex.service';

@Component({
  selector: 'app-pokedex-selected',
  imports: [],
  templateUrl: './pokedex-selected.html',
  styleUrl: './pokedex-selected.css',
})
export class PokedexSelected {
  private readonly _pokedexService = inject(PokedexService);

  selected = this._pokedexService.selected;
}
