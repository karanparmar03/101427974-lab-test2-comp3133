import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {
  private baseUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  // 🔸 Get all characters
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseUrl);
  }

  // 🔸 Get characters by house
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/house/${house}`);
  }

  // 🔸 Get character by name (since API doesn't support by ID)
  getCharacterByName(name: string): Observable<Character | undefined> {
    return this.http.get<Character[]>(this.baseUrl).pipe(
      map(characters => characters.find(c => c.name === name))
    );
  }
}
