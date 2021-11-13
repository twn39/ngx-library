# NgxLibrary


## Library

* ngx-simple-i18n
* ngx-vconsole-logger


### Ngx-simple-i18n

Simple I18n library for angular, support storage for cache with TTL.

**Install:**

```shell
npm i ngx-simple-i18n --save
```

**Usage:**

Import modules:

```ts
import {NgxSimpleI18nModule} from 'ngx-simple-i18n';

@NgModule({
  imports: [
    NgxSimpleI18nModule,
  ]
})
```

Configure:

```ts
import {SimpleI18n} from 'ngx-simple-i18n';

class AppComponent implements OnInit {
  constructor(
    private simpleI18n: SimpleI18n,
  ){}
  
  ngOnInit() {
    const zhData = {title: '标题', description: '描述'};
    const enData = {title: 'title', description: 'description'};
    // the callback is usefull for custom data source, return the k/v map object
    this.simpleI18n.setLanguage('zh', async() => zhData, sessionStorage, 60 * 1000);
    this.simpleI18n.setLanguage('en', async() => enData, localStorage, 60 * 1000);
    this.simpleI18n.switchLanguage('zh');
  }
}
```

Use in template with pipe:

```html
 {{"title" | T}}
```

the pipe will automatically unsubscribe from the `Observable`.

Use in component:

```ts
import {SimpleI18n} from 'ngx-simple-i18n';

class AppComponent implements OnInit {
  constructor(
    private simpleI18n: SimpleI18n,
  ){}

  ngOnInit() {
    this.simpleI18n.translation$.subscribe(data => {
      console.log(data);
    })
  }
}
```

### Ngx-vconsole-logger

A simple vConsole integration for angular. 


#### Install

```shell
npm i ngx-vconsole-logger --save
```

#### Usage

* Build time configure:

```ts
import {NgxVConsoleLoggerModule} from "ngx-vconsole-logger";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // debug option, set false to clear the log info in production.
    NgxVConsoleLoggerModule.register(true),  // use environment vars
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Import the module will not trigger the vconsole because of the lazy load,
so you must log some information.

```ts
import {IVconsoleLogger, NGX_VCONSOLE_LOGGER} from "ngx-vconsole-logger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'playground';

  constructor(
    @Inject(NGX_VCONSOLE_LOGGER) private ngxLogger: IVconsoleLogger
  ) {}

  ngOnInit() {
    this.ngxLogger.warn("some warn message", document);
  }
}
```

* Configure in runtime

```ts
import {NGX_VCONSOLE_LOGGER_OPTIONS, ngxVconsoleLoggerFactory} from "ngx-vconsole-logger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: NGX_VCONSOLE_LOGGER_OPTIONS,
      useValue: {debug: false} // use useFactory to decide the debug status in runtime
    },
    {
      provide: NGX_VCONSOLE_LOGGER,
      useFactory: ngxVconsoleLoggerFactory,
      deps: [NGX_VCONSOLE_LOGGER_OPTIONS]
    }
  ]
})
export class AppComponent implements OnInit {
  title = 'playground';

  constructor(
    @Inject(NGX_VCONSOLE_LOGGER) private ngxLogger: IVconsoleLogger
  ) {}

  ngOnInit() {
    this.ngxLogger.warn("some warn message", document);
  }
}
```



