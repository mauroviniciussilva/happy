<p align="center">
  <img src="https://github.com/mauroviniciussilva/happy/blob/main/docs/logo.png" alt="Happy" width="280"/>
</p>

<p align="center">	
  <img alt="Repository Size" src="https://img.shields.io/github/repo-size/mauroviniciussilva/happy?color=29B6D1">
  <a aria-label="Completed" href="https://nextlevelweek.com/episodios/omnistack/edicao/3">
    <img src="https://img.shields.io/badge/Happy-NLW%203.0-29B6D1"></img>
  </a>
  <a href="https://github.com/mauroviniciussilva/happy/commits/master">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/mauroviniciussilva/happy?color=29B6D1">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-29B6D1">
  <a href="https://github.com/mauroviniciussilva/happy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/mauroviniciussilva/happy?color=29B6D1&logo=github">
  </a>
</p>

<div align="center">Project made to connect people to orphanages, inspired by Next Level Week #3 @Rocketseat</div>

### Web Screenshot
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img src="./docs/web-landing.png" width="400px" alt="Landing Page">
  <img src="./docs/orphanages-map.png" width="400px" alt="Orphanages Map">
</div>
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img src="./docs/create-orphanages-1.png" width="400px" alt="Create Orphanage 1">
  <img src="./docs/create-orphanages-2.png" width="400px" alt="Create Orphanage 2">
</div>
<div style="display: flex; flex-direction: 'row'; align-items: 'center';">
  <img src="./docs/orphanage-detail-1.png" width="400px" alt="Orphanage Detail 1">
  <img src="./docs/orphanage-detail-2.png" width="400px" alt="Orphanage Detail 2">
</div>

### Mobile Screenshot
<div>
   <img src="./docs/map.jpg" width="180" alt="Orphanages Map" />
   <img src="./docs/create-orphanages-1.jpg" width="180" alt="Create Orphanage 1" />
   <img src="./docs/create-orphanages-2.jpg" width="180" alt="Create Orphanage 2" />
   <br/>
   <img src="./docs/create-orphanages-3.jpg" width="180" alt="Create Orphanage 3 />
   <img src="./docs/orphanage-detail-1.jpg" width="180" alt="Orphanage Detail 1" />
   <img src="./docs/orphanage-detail-2.jpg" width="180" alt="Orphanage Detail 2" />
</div>

# Technologies
This project was made using the follow technologies:
<ul>
  <li><a href="https://nodejs.org/en/">NodeJS</a></li>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://expressjs.com/en/api.html#express">Express</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://www.sqlite.org/index.html">SQLite</a></li>
</ul>

---
# API

The API was built with the following functionalities:

### Orphanages
- Create orphanage;
- List orphanages;
- List orphanage by id;

> NOTE: you can find a [Postman](https://www.postman.com/) Collection at the `server/postman` folder, with examples of all the requests.

---

# How to run

## 1. Clone Repository

```bash
git clone https://github.com/mauroviniciussilva/happy.git
```

## 2. Run API

### Setup `.env` file

Create a `.env` file in the `/server` folder and setup your IP Adress:

```dosini
BASE_IP_ADRESS=<ip_adress>:3333
```

#### Go to server folder
```
cd server
```

#### Install dependencies
```
yarn
```

### Run migrations

As the project is using SQLite, it is not necessary to do any previous database installation or configuration to run the project. You just need to run the migrations with the following command:

```
yarn typeorm migration:run
```

---

#### Run
```
yarn dev
```

> **NOTE**: *API will run at port 3333*

## 3. Run WEB Project

### Setup `.env` file

As I'm using mapbox you need to have the token to render the map. You can see how to create one in the official [docs](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/). After getting the token, you must create an `.env` file in the `/web` folder with the following syntax:

```dosini
REACT_APP_MAPBOX_TOKEN=<mapbox_token>
```

#### Go to web folder
```bash
cd web
```

#### Install dependencies
```
yarn
```

#### Run application
```
yarn start
```

> **NOTE**: *WEB Application will run at port 3000*

## 4. Run Mobile Project

To run the mobile project you need a phone with the [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) app instaled or a emulator Android/iOS.

### Setup `.env` file

Create a `.env` file in the `/mobile` folder and setup your IP Adress to access the backend:

```dosini
BASE_URL=http://<ip_adress>:3333
```

#### Go to mobile folder
```
cd mobile
```

#### Install Dependencies
```
yarn
```

#### Run Aplication
```
yarn start
```

When you run it, the expo developer tools should open on a browse window. 

You need to read the QRCode with [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) app, or run on emulator to see the result.

---
