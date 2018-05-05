import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Photo } from '../models'
import { ApiResponse } from '../models'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'

@Injectable()
export class PhotoApiService {
  constructor(private _http: HttpClient) {}

  getPhotos(criteria: object = {}): Observable<ApiResponse<Photo>> {
    // TODO: Filter by criteria
    return this._http.get<ApiResponse<Photo>>(`${environment.rutaApi}/photos/`)
  }

  getPhoto(id: number): Observable<object> {
    return this._http.get<object>(`${environment.rutaApi}/photos/${id}/`)
  }
}
