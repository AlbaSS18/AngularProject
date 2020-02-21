import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // espera hasta que se deja de escribir durante 300 milisegundos.
      debounceTime(300),

      // ignore new term if same as previous term
      // Asegura que una solicitud se envía sólo si el texto del filtro ha cambiado
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // Llama al sevicio de búsqueda para cada término de búsqueda que pasa por debounce y distinctUntilChanged
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}