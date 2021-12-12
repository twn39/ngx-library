import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import {NGX_VCONSOLE_LOGGER_OPTIONS, ngxVconsoleLoggerOptionsProvider, ngxVconsoleLoggerProvider} from './logger';

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
  static register(debug = false): ModuleWithProviders<NgxVConsoleLoggerModule> {
    return {
      ngModule: NgxVConsoleLoggerModule,
      providers: [
        {provide: NGX_VCONSOLE_LOGGER_OPTIONS, useValue: {debug}}
      ]
    }
  }
}
