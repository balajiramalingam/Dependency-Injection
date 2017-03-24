import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ParameterizedApiService {

  constructor(private url:string) { }

  get(): void {
   console.log(this.url);
  }

}
