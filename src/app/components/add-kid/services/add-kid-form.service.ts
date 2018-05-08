import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Kid } from '../../../models/index'
import { ApiService } from '../../../services/api.service'

@Injectable()
export class AddKidFormService {
  constructor(
    private _httpClient: HttpClient,
    private _apiService: ApiService
  ) {}

  addKid(kid: Kid): Observable<Kid> {
    return this._apiService.post('kids', kid)
  }
}
