import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public list(number: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${number}&limit=10`);
  }

  public listEachPokemon(id: any) {
      return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id);
  }

  public listPokemon = [];
  public pokemons = [];
  public pokemonsOrdered = [];
  public idsBack = JSON.parse(localStorage.getItem('idsBack') ?? '[]');
  public current = 0;
  public isFront = true;

  constructor(
     public http: HttpClient
  ) { }

  ngOnInit(): void {
      this.pokemonList();
  }

  public pokemonList() {
      this.pokemons = [];
      this.list(this.current).subscribe((response:any) => {
          this.listPokemon = response.results;

          for (let i = 1 + this.current; i <= this.listPokemon.length + this.current; i++) {
              this.listEachPokemon(i).subscribe((response:any) => {
                  response.isFront = true;
                  for (let id of this.idsBack) {
                      if (id == response.id) {
                          response.isFront = false;
                      }
                  }
                  this.pokemons.push(response);
                  this.pokemons.sort((a,b) => a.id > b.id ? 1 : -1);

              })
          }
      })

  }

  public changePosition(pokemon: any) {
      if (pokemon.isFront) {
          pokemon.isFront = false;

          this.idsBack.push(pokemon.id);
          let idsString = JSON.stringify(this.idsBack);

          localStorage.setItem('idsBack', idsString);
      }
      else {
          pokemon.isFront = true;

          let index = this.idsBack.indexOf(pokemon.id)

          this.idsBack.splice(index, 1);
          let idsString = JSON.stringify(this.idsBack);

          localStorage.setItem('idsBack', idsString);

      }

  }

  public skin() {
      return localStorage.getItem('isShiny') || 'false';
  }

  public nextPage() {
      this.current += 10;
      this.pokemonList();
  }

  public previousPage() {
      this.current -= 10;
      this.pokemonList();
  }
}
