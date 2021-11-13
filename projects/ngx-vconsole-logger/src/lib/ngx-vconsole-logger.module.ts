import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NGX_VCONSOLE_LOGGER_OPTIONS, ngxVconsoleLoggerOptionsProvider, ngxVconsoleLoggerProvider} from './logger';
import { ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ngxVconsoleLoggerOptionsProvider,
    ngxVconsoleLoggerProvider,
  ]
})
export class NgxVConsoleLoggerModule {

  static register(debug = true): ModuleWithProviders<NgxVConsoleLoggerModule> {
    return {
      ngModule: NgxVConsoleLoggerModule,
      providers: [
        {provide: NGX_VCONSOLE_LOGGER_OPTIONS, useValue: {debug}}
      ]
    }
  }
}
