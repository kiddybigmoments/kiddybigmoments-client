import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Kid } from '../../../models/index'
import { ApiService } from '../../../services/api.service'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AddKidFormService {
  constructor(
    private _httpClient: HttpClient,
    private _apiService: ApiService
  ) {}

  addKid(kid: Kid): Observable<Kid> {
    //return this._apiService.post('kids', kid)
    return this._httpClient.post<Kid>('http://localhost:8000/api/v1/kids/', kid)
  }
}
