import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  card1() {
    return [71, 78, 39, 66];
  }


}

