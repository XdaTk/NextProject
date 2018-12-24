import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@next/core';
import { HomeIndexComponent } from './containers/home-index/home-index.component';

const routes: Routes = [{ path: '', component: HomeIndexComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [HomeIndexComponent]
})
export class HomeModule {}
