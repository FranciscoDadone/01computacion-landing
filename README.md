
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/FranciscoDadone/01computacion-landing">
    <img src="public/images/logo.png" />
</a>

  <h3 align="center">01computacion-landing</h3>
  <p align="center">
  Landing page for 01computacion.com webpage.
<br />
    <br />
  </p>
</p>

Page in production: [www.01computacion.com](www.01computacion.com)
### Built With

* [NodeJS](https://nodejs.org)
* [Express](https://expressjs.com)
* [Sqlite3](https://www.sqlite.org/index.html)
* [Bootstrap](https://getbootstrap.com)


### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* pm2 (optional)
  ```sh
  npm install pm2 -g
  ```

* Sqlite3 requires Python to work, so prior to installing the node modules (```npm i```), install Python.

### Installation
#### Regular install
1. Clone the repo.
   ```sh
   git clone https://github.com/FranciscoDadone/01computacion-landing
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change the admin panel default credentials under ```./keys/adminKeys.js```

### Docker install
1. Build the image
```$ docker build . -t 01computacion-landing```

2. Running the image
```$ docker run -d -p <PORT>:3000 --restart unless-stopped 01computacion-landing```


<!-- USAGE EXAMPLES -->
## Usage

* If you want to change the port (default: 3000) you can edit the ´ecosystem.config.js´ file and change the port to whatever you want or if you'r not using pm2, you can go to ´bin/www´ and change ´var port = normalizePort(process.env.PORT || '3000');´ and change it there.

To start the server use
  ```sh
   npm run start
  ```
or this if you're using pm2
  ```
  pm2 start ecosystem.config.js
  ```

<!-- CONTACT -->
## Contact

Francisco Dadone - [@FranDadone](https://twitter.com/FranDadone) - dadonefran@gmail.com

Project Link: [https://github.com/FranciscoDadone/01computacion-landing](https://github.com/FranciscoDadone/01computacion-landing)
