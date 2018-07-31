import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Client, Position} from '../interfaces'
import {Observable} from 'rxjs/index'

@Injectable({
  providedIn: 'root'
})
export class ClientServices {
  constructor(private http: HttpClient) {
  }

  fetch(): Observable<Client[]> {
    return this.http.get<Client[]>('/api/client')
  }

  getById(id: string): Observable<Client> {
    return this.http.get<Client>(`/api/client/${id}`)
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>('/api/client', client)
  }

  update(id: string, client: Client): Observable<Client> {
    return this.http.patch<Client>(`/api/client/${id}`, client)
  }
}
