import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configUrl = '../../config/app.config.json';

  constructor(private http: HttpClient) { }

  getService(){
    return this.http.get(this.configUrl);
  }
}
