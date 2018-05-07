import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { User } from '../../../models/index'
import { ApiService } from '../../../api/api.service'

@Injectable()
export class RegisterFormService {
  constructor(
    private _httpClient: HttpClient,
    private _apiService: ApiService
  ) {}

  addUser(user: User): Observable<User> {
    return this._apiService.post('rest-auth/registration', user)
  }
}
