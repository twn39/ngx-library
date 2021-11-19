import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {NgxSimplePopperDirective} from "./ngx-simple-popper.directive";
import { PopperContainerComponent } from './components/popper-container/popper-container.component';

@NgModule({
  declarations: [
    PopperContainerComponent,
    NgxSimplePopperDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PopperContainerComponent,
    NgxSimplePopperDirective,
  ]
})
export class NgxSimplePopperModule { }
