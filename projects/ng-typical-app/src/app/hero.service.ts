import { Injectable } from '@angular/core';

import { from, map, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hero } from './hero';

let HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
	
  getHero(id: number): Observable<Hero | undefined> {
    return of(HEROES).pipe(
			map(heroes => heroes.find(hero => hero.id === id)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
	
	updateHero(hero: Hero): Observable<any> {
		HEROES = HEROES.map(oldHero => oldHero.id === hero.id ? hero : oldHero);
		return from(Promise.resolve(true));
	}
	
	deleteHero(heroId: number): Observable<any> {
		HEROES = HEROES.filter(hero => hero.id !== heroId);
		return from(Promise.resolve(true));
	}
	 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
			console.error(`Error when performing  ${operation}:`, error);
			return of(result as T);
    };
  }
}
