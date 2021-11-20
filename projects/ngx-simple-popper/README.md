<div id="top"></div>

<!-- ABOUT THE PROJECT -->
## About The Project

Popper wrap for Angular

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm i @popperjs/core --save
  npm i ngx-simple-popper --save
  ```

### Installation

1. Enter your project directory
2. Install NPM packages
   ```sh
   npm i @popperjs/core --save
   npm i ngx-simple-popper --save
   ```
<p align="right">(<a href="#top">back to top</a>)</p>


## Usage

Load the module:

```ts
import {NgxSimplePopperModule} from "ngx-simple-popper";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSimplePopperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And use in template:

```html
<div class="container">
  <button [popperFor]="popperContent"
          [offset]="[0, 10]"
          (mouseenter)="popperContent.state = 'show'"
          (mouseleave)="popperContent.state = 'hide'"
          placement="bottom">
    Hello
  </button>

  <popper-container #popperContent>
    <div class="">
      Hello
    </div>
  </popper-container>

</div>
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

