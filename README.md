# NodeJS SDK for the Nomado API

## Overview

This package provides a module to access the Nomado API.


## Installation

Not yet published

## Quickstart

Below is an example of making a call with the Nomado API.

```javascript

const MY_USERNAME = 'username';
const MY_PASSWORD = 'password';

const nomado = new NomadoClient(MY_USERNAME, MY_PASSWORD);
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