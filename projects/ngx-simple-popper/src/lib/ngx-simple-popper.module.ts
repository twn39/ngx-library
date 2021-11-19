import { NgModule } from '@angular/core';
import {NgxSimplePopperDirective} from "./ngx-simple-popper.directive";
import { PopperContainerComponent } from './components/popper-container/popper-container.component';



@NgModule({
  declarations: [
    PopperContainerComponent,
    NgxSimplePopperDirective,
  ],
  imports: [
  ],
  exports: [
    PopperContainerComponent,
    NgxSimplePopperDirective,
  ]
})
export class NgxSimplePopperModule { }
