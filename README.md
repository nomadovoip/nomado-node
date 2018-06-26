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
- [Documentation](#Documentation)
- [TODO](#TODO)
- [Contributing](#contributing)
- [Support](#support)

## Installation

```
npm install nomado-client
```

## Quickstart

Below is an example of **making a call** with the Nomado API.

```javascript
const NomadoClient = require('nomado-client');

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
work in progress

## TODO
work in progress

## Contributing
work in progress

## Support
We are a small team dedicated to offer you the best support because we want to satisfy you.  
For any problem or question, feel free to [contact us](https://www.nomado.eu/page/contact-call-support-nomado).

## Contributors
- [Flavien Barsé](https://github.com/flavienb)