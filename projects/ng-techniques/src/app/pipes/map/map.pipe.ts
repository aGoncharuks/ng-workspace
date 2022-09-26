import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map',
  standalone: true
})
export class MapPipe implements PipeTransform {
	
  transform<T, K>(
		value: T,
		mapFn: MapPipeFn<T, K>,
		...args: any[]
  ): K {
    return mapFn(value, ...args);
  }
}

export type MapPipeFn<T, K> = (input: T, ...args: any[]) => K;
