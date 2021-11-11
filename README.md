# NgxLibrary


## Library

* ngx-simple-i18n


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
    // the callback is usefull for custom data source, return the k/v map object
    this.simpleI18n.setLanguage('zh', async() => zhData, sessionStorage, 60 * 1000);
    this.simpleI18n.setLanguage('en', async() => enData, localStorage, 60 * 1000)
    this.simpleI18n.switchLanguage('zh');
  }
}
```

Use in template with pipe:

```html
 {{"title" | T | async}}
```

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






