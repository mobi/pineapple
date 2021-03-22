import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  public searchByFilter(target: any[], query?: any) {
    if (query) {
      return target && target.filter((item) => JSON.stringify(item).toLowerCase().includes(query.toLowerCase()));
    } else {
      return target;
    }
  }
}
