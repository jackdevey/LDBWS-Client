# LDBWS-Client
A TypeScript client library for the [National Rail Live Departure Boards Web Service (LDBWS / OpenLDBWS)](http://lite.realtime.nationalrail.co.uk/openldbws/)

## What is LDBWS / OpenLDBWS?
As provided by National Rail:
> LDBWS provides a request-response web service to access real time train information from Darwin. This is the same information that powers the 
> Live Departure Boards, provided in XML format.

## Why this library?
LBDWS is a [SOAP](https://en.wikipedia.org/wiki/SOAP) based API which basically means it's kind of a big hastle to use! I created this library as I wanted a 
simple and updated way to interract with the service for my departure board CLI project called [Boards](https://github.com/jackdevey/Boards). All
other clients for the API seemed to be incredibly outdated or lacking of important features I wanted to use with Boards, so I had to develop my own method of
interracting with the service.

## How to use
To install LDBWS-Client from npm:
```
npm i ldbws-client
```
You will need an API key to use this library, you can apply for one from NRE [here](http://realtime.nationalrail.co.uk/OpenLDBWSRegistration/)

To import the library in your code:
```javascript
import { LDBWSClient } from "ldbws-client";

// Create a new client instance
const api = new LDBWSClient("TOKEN");

// Get data from the API
await api.GetDepartureBoard("BHM", 10);
```

## Operations
Every operation on the LDBWS API is supported in the client, please refer to the LDBWS documentation [here](http://lite.realtime.nationalrail.co.uk/openldbws/)

## License
LDBWS-Client is licensed under the MIT license
```
Copyright (c) 2022 Jack Devey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
> LDBWS-Client gets all of its realtime data from National Rail's [Live Departure Boards Web Service](http://lite.realtime.nationalrail.co.uk/openldbws/)
<img src="https://raw.githubusercontent.com/jackdevey/Boards/main/images/NRE_Powered_logo.png" width="300" height="auto">
