import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PongMessage } from '../model/pong-message';

@Injectable({
  providedIn: 'root'
})
export class HostpingService {

  endpoint = 'https://192.168.99.100/ping';

  constructor(private http: HttpClient) { }

  public getPongMessage() {
    return this.http.get<PongMessage>(this.endpoint);
}

}
