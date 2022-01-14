import {NgModule} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatListModule,
    MatButtonModule
  ]
})
export class MaterialExampleModule {}
