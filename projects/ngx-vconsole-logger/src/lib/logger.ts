import {InjectionToken} from '@angular/core';
import VConsole from 'vconsole';

export const NGX_VCONSOLE_LOGGER_OPTIONS = new InjectionToken('ngx.vconsole.logger.options');
export const NGX_VCONSOLE_LOGGER = new InjectionToken<IVconsoleLogger>('ngx.vconsole.logger');

export interface IVconsoleLogger {
  info(...msg: any[]): void;
  error(...msg: any[]): void;
  warn(...msg: any[]): void;
  debug(...msg: any[]): void;
  table(...msg: any[]): void;
  log(...msg: any[]): void;
  trace(...msg: any[]): void;
}

class NgxEmptyLogger implements IVconsoleLogger {
  debug(...msg: any[]) {}
  error(...msg: any[]) {}
  info(...msg: any[]) {}
  table(...msg: any[]) {}
  warn(...msg: any[]) {}
  log(...msg: any[]) {}
  trace(...msg: any[]) {}
}

class NgxVConsoleLogger implements IVconsoleLogger {
  constructor() {
    new VConsole();
  }
  debug(...msg: any[]) {
    console.debug(...msg);
  };
  error(...msg: any[]) {
    console.error(...msg);
  };
  info(...msg: any[]) {
    console.info(...msg);
  };
  log(...msg: any[]) {
    console.log(...msg);
  };
  table(...msg: any[]) {
    console.table(...msg);
  };
  trace(...msg: any[]) {
    console.trace(...msg);
  };
  warn(...msg: any[]) {
    console.warn(...msg);
  };
}

export const ngxVconsoleLoggerFactory = (opts: any) => {
  return opts.debug ? new NgxVConsoleLogger(): new NgxEmptyLogger();
};

export const ngxVconsoleLoggerOptionsProvider = {
  provide: NGX_VCONSOLE_LOGGER_OPTIONS,
  useValue: {debug: true}
};

export const ngxVconsoleLoggerProvider = {
  provide: NGX_VCONSOLE_LOGGER,
  useFactory: ngxVconsoleLoggerFactory,
  deps: [NGX_VCONSOLE_LOGGER_OPTIONS]
};
