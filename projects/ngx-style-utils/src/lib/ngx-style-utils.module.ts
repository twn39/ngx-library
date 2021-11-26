import { NgModule } from '@angular/core';
import {BorderDirective} from "./directives/border.directive";
import {BoxDirective} from "./directives/box.directive";
import {FlexDirective} from "./directives/flex.directive";
import {GridDirective, GridItemDirective} from "./directives/grid.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    BorderDirective,
    BoxDirective,
    FlexDirective,
    GridDirective,
    GridItemDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BoxDirective,
    FlexDirective,
    GridDirective,
    BorderDirective,
    GridItemDirective,
  ]
})
export class NgxStyleUtilsModule { }
