<div id="top"></div>

<!-- ABOUT THE PROJECT -->
## About The Project

QRcode generator for Angular, based on kjua.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm i kjua --save
  npm i ngx-simple-qrcode --save
  ```

### Installation

1. Enter your project directory
2. Install NPM packages
   ```sh
    npm i kjua --save
    npm i ngx-simple-qrcode --save
   ```
<p align="right">(<a href="#top">back to top</a>)</p>


## Usage

Load the module:

```ts
import {NgxSimpleQrcodeModule} from "ngx-simple-qrcode";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSimpleQrcodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And then just put the element in template:

```html
<ngx-simple-qrcode text="Hello world!" [size]="300"></ngx-simple-qrcode>
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
