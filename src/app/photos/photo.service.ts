import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Photo } from '../models'
import { ApiResponse } from '../models'
import { ApiService } from '../api/api.service'

@Injectable()
export class PhotoService {
  constructor(private _http: HttpClient, private api: ApiService) {}

  getPhotos(criteria: object = {}): Observable<ApiResponse<Photo>> {
    // TODO: Filter by criteria
    return this.api.get<ApiResponse<Photo>>('photos')
  }

  getPhoto(id: number): Observable<Photo> {
    return this.api.get<Photo>(`photos/${id}`)
  }
}
