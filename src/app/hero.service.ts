import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


///imported the Angular Injectable function and applied that function as an @Injectable() decorator.
///DON'T FORGET THE PARENTHESIS. OMITTING THEM GIVES YOU AN ERROR THAT IS DIFFICULT TO SPOT
@Injectable()

export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
}