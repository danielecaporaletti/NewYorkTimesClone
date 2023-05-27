**Note: This document is available in two languages, <a href="#english">English</a> and <a href="#italian">Italian</a>.**

<a href="#english"></a>
**ENGLISH VERSION**

# Local Installation Guide

This project utilizes Docker to streamline the container setup process. Before proceeding with container creation, it is essential to obtain permissions for the following APIs:

1. New York Times APIs: https://developer.nytimes.com/
2. Open Weather Map: https://home.openweathermap.org/
3. Twelve data API: https://twelvedata.com/

After obtaining the API keys, you need to create a `.env` file in the root of the project. These keys should be inserted into the file in the following format:

```
REACT_APP_NEW_YORK_TIMES_API_KEY = [...]
REACT_APP_WEATHER_DATA_API_KEY = [...]
REACT_APP_TWELVE_DATA_API_KEY = [...]
```

At this point, you can start the container with a single command, executed from the project's root directory:

```
docker run -d -p 80:80 --name newyorktimes
```

The application can now be accessed at http://localhost:80 using any web browser.

## Project Features

This project is a reproduction of the New York Times website, created using React and the New York Times APIs. The main goal is to provide a smooth and responsive user experience with an interface as close as possible to the original website.

The project, based on React, leverages various libraries and functionalities, including:

- New York Times APIs for accessing up-to-date data and articles
- Open Weather Map API for obtaining current weather forecasts
- Twelve data API for monitoring major stock market trends
- Navigation between different pages managed by React Router
- HTTP Get requests made using Axios
- Usage of React hooks and effect hooks for component management
- Extensive use of CSS to replicate the appearance of the New York Times website

The procedure for obtaining weather forecasts deserves special attention. To retrieve weather information, multiple Axios calls were made:

- The first call to retrieve the client's IP address: https://api.ipify.org?format=json
- The second call to convert the IP address to longitude and latitude: http://ip-api.com/json/${ip}
- The last call to obtain weather forecasts: https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}

## Libraries and Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - Library for managing navigation and routes in React applications
- [Axios](https://github.com/axios/axios) - Library for making HTTP requests

<a href="#italian"></a>
**VERSIONE ITALIANA**

# Guida all'installazione locale

Questo progetto utilizza Docker per facilitare il processo di avviamento del container. Prima di procedere alla creazione del container, è indispensabile ottenere le autorizzazioni per le seguenti API:

1. New York Times APIs: https://developer.nytimes.com/
2. Open Weather Map: https://home.openweathermap.org/
3. Twelve data API: https://twelvedata.com/

Dopo aver ottenuto le chiavi API, si necessita creare un file `.env` nella radice del progetto. Queste chiavi devono essere inserite nel file nel seguente formato:

```
REACT_APP_NEW_YORK_TIMES_API_KEY = [...]
REACT_APP_WEATHER_DATA_API_KEY = [...]
REACT_APP_TWELVE_DATA_API_KEY = [...]
```

A questo punto, è possibile avviare il container con un solo comando, eseguito dalla radice del progetto:

```
docker run -d -p 80:80 --name newyorktimes
```

L'applicazione può essere ora raggiunta all'indirizzo http://localhost:80 tramite qualsiasi browser web.

## Funzionalità del progetto

Questo progetto è una riproduzione del sito del New York Times, realizzata utilizzando React e le API del New York Times. L'obiettivo principale è di offrire un'esperienza utente fluida e reattiva, con un'interfaccia più simile possibile a quella del sito originale.

Il progetto, basato su React, sfrutta diverse librerie e funzionalità, tra cui:

- API del New York Times per l'accesso a dati e articoli aggiornati
- API di Open Weather Map per ottenere le previsioni meteo attuali
- API di Twelve data per monitorare l'andamento delle principali borse
- Navigazione tra diverse pagine gestita da React Router
- Chiamate HTTP Get effettuate tramite Axios
- Uso di hook e effect hook per la gestione dei componenti React
- Ampio uso di CSS per replicare l'aspetto del sito del New York Times

La procedura per la creazione delle previsioni meteo merita un'attenzione particolare. Per ottenere le informazioni meteo, sono state effettuate diverse chiamate Axios:

- La prima per ottenere l'indirizzo IP del client: https://api.ipify.org?format=json
- La seconda per convertire l'indirizzo IP in longitudine e latitudine: http://ip-api.com/json/${ip}
- L'ultima per ottenere le previsioni meteo: https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}

## Librerie e tecnologie impiegate

- [React](https://reactjs.org/) - Libreria JavaScript per la creazione di interfacce utente
- [React Router](https://reactrouter.com/) - Libreria per la gestione della navigazione nelle applicazioni React
- [Axios](https://github.com/axios/axios) - Libreria per effettuare chiamate HTTP
