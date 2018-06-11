# NodeJS SDK for the Nomado API

## Overview

This package provides a module to access the Nomado API.


## Installation

Not yet published

## Quickstart

Below is an example of making a call with the Nomado API.

```js

const MY_USERNAME = 'username';
const MY_PASSWORD = 'password';

const nomado = new NomadoClient(MY_USERNAME, MY_PASSWORD);
const calls = nomado.calls;

const callConfig = {
  snumber: '0123456789',
  cnumber: '1234567890',
};

calls.make(callConfig)
    .then(function (nomadoResponse) {
      console.log(nomadoResponse.code);
      console.log(nomadoResponse.data);
    })
    .catch(function (nomadoResponse) {
      console.log(nomadoResponse.code);
      console.log(nomadoResponse.reason);
    });

```