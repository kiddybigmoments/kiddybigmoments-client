import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PhotoViewComponentComponent } from '../photo-view-component/photo-view-component.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'photo-view',
        component: PhotoViewComponentComponent
      },
      {
        path: '**',
        redirectTo: '/photos'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
