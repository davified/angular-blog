import {Routes, RouterModule } from '@angular/router'

import { NewPostComponent } from './new-post/new-post.component'
import { DetailPostComponent } from './detail-post/detail-post.component'

const APP_ROUTES: Routes = [
  { path: '', component: NewPostComponent },
  { path: 'posts', component: NewPostComponent },
  { path: 'posts/:id', component: DetailPostComponent }

]


export const routing = RouterModule.forRoot(APP_ROUTES)
