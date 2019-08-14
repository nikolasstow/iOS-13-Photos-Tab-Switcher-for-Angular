import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { iOSSwitcherComponent } from "./ios-switcher.component";
import { iOSSwitcherTabComponent } from "./tab/tab.component";

@NgModule({
  declarations: [
    iOSSwitcherComponent,
    iOSSwitcherTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    iOSSwitcherComponent,
    iOSSwitcherTabComponent
  ]
})
export class iOSSwitcherModule { }
