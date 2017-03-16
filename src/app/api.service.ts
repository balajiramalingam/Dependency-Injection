import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  description : string;

  constructor() { }

  getDescription(): string {
    return this.description
  }

  setDescription(text:string): void {
    this.description = text;
  }
}
