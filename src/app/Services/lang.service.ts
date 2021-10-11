import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  lang: BehaviorSubject<any> = new BehaviorSubject(null)

  constructor() { }

  getLang(): Observable<any>{
    return this.lang.asObservable();
  }

  setLang(lang: string): void {
    this.lang.next(lang);
  }
}
