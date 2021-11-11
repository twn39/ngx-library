import { NgModule } from '@angular/core';
import {I18nTranslatePipe, simpleI18nProvider} from "./simple-i18n";

@NgModule({
  declarations: [
    I18nTranslatePipe
  ],
  exports: [
    I18nTranslatePipe
  ],
  providers: [
    simpleI18nProvider,
  ]
})
export class NgxSimpleI18nModule { }
