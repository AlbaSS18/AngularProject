import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor( private http: HttpClient, private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
