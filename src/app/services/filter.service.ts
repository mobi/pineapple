import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  public searchByFilter(target: any[], type: string, query?: any) {
    if (query) {
      return target && target.filter((item) => item[type].toLowerCase().includes(query.toLowerCase()));
    } else {
      return target;
    }
  }
}
