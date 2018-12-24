import { NgModule } from '@angular/core';
import { SharedModule } from '@next/core';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PagesErrorComponent } from './containers/pages-error/pages-error.component';

import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  declarations: [PagesErrorComponent, ErrorPageComponent],
  imports: [SharedModule, ErrorRoutingModule],
  exports: [PagesErrorComponent, ErrorPageComponent]
})
export class ErrorModule {}
