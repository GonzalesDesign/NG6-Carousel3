


import { Carousel3DataInterface } from './carousel3-data.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Carousel3DataService {

  private _url = '../../assets/data/carousel3-data.json';

  constructor(private _http: HttpClient) { }

  carousel3Data (): Observable<Carousel3DataInterface[]> {
    return this._http.get<Carousel3DataInterface[]>(this._url);
  }

  getFoods() {
    return this._http.get(this._url)
    .pipe(
      map((res: Response) => res.json())
    );
  }

}
