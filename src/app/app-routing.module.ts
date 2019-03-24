import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ResturantlistComponent } from './resturantlist/resturantlist.component';
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';

const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent,
    children:[
      {
        path:'',
        component:ResturantlistComponent
      },
      {
        path:'uploadcsv',
        component: UploadcsvComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
