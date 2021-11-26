<div id="top"></div>

<!-- ABOUT THE PROJECT -->
## About The Project

Style utils for Angular, use the angular way.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm i ngx-style-utils --save
  ```

### Installation

1. Enter your project directory
2. Install NPM packages
   ```sh
    npm i ngx-style-utils --save
   ```
<p align="right">(<a href="#top">back to top</a>)</p>


## Usage

Load the module:

```ts
import {NgxStyleUtilsModule} from "ngx-style-utils";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStyleUtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And use in template:

```html
<div box padding="1rem" flex justifyContent="center" >
  <span box display="inline-block"
        boxShadow="0 0 3px #0000ff"
        padding="6px 2rem" color="#fff"
        background="blue" border="1px solid rgba(0, 0, 0, 0.8)"
        borderRadius="5px">Hello world.</span>
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

