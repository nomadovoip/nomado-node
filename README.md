![Nomado Logo](./assets/nomado-logo.png)
# NodeJS SDK for the Nomado API
<div>
  <h3>
    <a href="https://www.nomado.eu">
      Website
    </a>
    <span> | </span>
    <a href="https://www.nomado.eu/page/contact-call-support-nomado">
      Support
    </a>
    <span> | </span>
    <a href="https://www.nomado.eu/page/website.contactus">
      Contact
    </a>
    <span> | </span>
    <a href="#contributing">
      Contributing
    </a>
  </h3>
</div>

## Introduction
Nomado is a telephony and SMS solution for businesses and private customers.  
Our goal is to provide super user-friendly tools to meet your growing needs of nomadism.  
  
This package provides a module to access the Nomado API.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Quickstart](#quickstart)
- [Documentation](#documentation)
- [TODO](#todo)
- [Contributing](#contributing)
- [Support](#support)

## Installation

```
npm install nomado
```

## Quickstart

Below is an example of **making a call** with the Nomado API.

```javascript
const NomadoClient = require('nomado');

const USERNAME = 'username';
const PASSWORD = 'password';

const nomado = new NomadoClient({USERNAME, PASSWORD});
const calls = nomado.calls;

const callConfig = {
  snumber: '0123456789',
  cnumber: '1234567890',
};

calls.make(callConfig)
    .then((response) => {
      console.log(response.code);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.reason);
    });
```

## Documentation
The `NomadoClient` class provides the public interfaces to the Nomado API 
* `Calls`
* `Account`

#### Authentication
Pass in your Nomado credentials to the `NomadoClient` class.
````javascript
const nomado = new NomadoClient({USERNAME, PASSWORD});
````

#### Responses
The public interface methods always return a promise that will be resolved (or rejected) with a `NomadoResponse` object wrapping the API response code and the data.  

**Properties:**
* ``code`` {integer}
* ``reason`` {string}
* ``data``:  {object}


### Class: `NomadoClient.calls`
**Methods**
* ``make({cnumber, snumber})`` make a call
  
### Class: `NomadoClient.account`

**Methods**
* ``getBalance()`` get the customer current balance



## TODO
work in progress

## Contributing
You are welcome to contribute in several ways like creating new features, fixing bugs, improving documentation etc...  
[More information in CONTRIBUTING.md](CONTRIBUTING.md).

## Support
We are a small team dedicated to offer you the best support because we want to satisfy you.  
For any problem or question, feel free to [contact us](https://www.nomado.eu/page/contact-call-support-nomado).

## Contributors
- [Flavien Barsé](https://github.com/flavienb)
- [Aley Rizvi](https://github.com/aleyrizvi)