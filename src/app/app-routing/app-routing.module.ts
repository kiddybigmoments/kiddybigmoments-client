import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DeletePhotosComponentComponent } from '../delete-photos-component/delete-photos-component.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'delete-photos',
        component: DeletePhotosComponentComponent
      },
      {
        path: '**',
        redirectTo: '/delete-photos'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
