import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@next/forms';
import { UiModule } from '@next/ui';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule, RouterModule, UiModule, FormsModule, ModalModule],
  exports: [CommonModule, RouterModule, UiModule, FormsModule, ModalModule]
})
export class SharedModule {}
