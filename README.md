![nomado Logo](https://my.nomado.eu/join/public/images/nomado-logo.png)
# NodeJS SDK for the nomado API
<div>
  <h3>
    <a href="https://www.nomado.eu">
      Website
    </a>
    <span> | </span>
    <a href="https://odoo.nomado.eu/page/contact-call-support-nomado">
      Support
    </a>
    <span> | </span>
    <a href="https://odoo.nomado.eu/page/website.contactus">
      Contact
    </a>
    <span> | </span>
    <a href="#contributing">
      Contributing
    </a>
  </h3>
</div>

## Introduction
nomado is a telephony and SMS solution for businesses and private customers.
Our goal is to provide super user-friendly tools to meet your growing needs of nomadism.

This package provides a client to access the nomado API.

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
You should first get a free nomado account on [my.nomado.eu/join](https://my.nomado.eu/join).

Below is a quick example for initializing the library and **sending a SMS**.

```javascript
const nomadoClient = require('nomado');

const USERNAME = 'username';
const PASSWORD = 'password';

const nomado = new nomadoClient({USERNAME, PASSWORD});

const smsOptions = {
  to: ['3245678901'],
  message: 'Hello world',
  unicode: false
};

nomado.sms.send(smsOptions)
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
The `nomadoClient` class provides the public interfaces to access the nomado API
* `SMS`
* `OTP`
* `Calls`
* `HLR`
* `Account`

### Authentication
First, initialize the library with your nomado credentials.
````javascript
const nomado = new nomadoClient({USERNAME, PASSWORD});
````

Now, you can start sending requests to the API.

### Responses
Every call will return a promise that will be resolved (or rejected) with a
`nomadoResponse` object wrapping the API response code and the data.

````javascript
// Result object:
{
  code: 200,
  reason: "", //in case of error
  data: {}
}
````


### SMS

**Send**

Send a SMS to one or multiple numbers.
````javascript
nomado.sms.send({
  to: ['3245678901','3245678902'], // e164 formatted numbers
  message: 'Bonjour le monde',
  unicode: false
});

// example response
{
  code: 200,
  data: {
    callerID: 'NOMADO',
    text: 'Bonjour le monde',
    unicode: 0,
    '3245678901': { ... },
    '3245678902': { ... }
  },
  cost: 0.16,
  total_sms: 2,
}
````
If you are sending unicode SMS, don't forget to turn on the `unicode` flag, otherwise encoding problems  may occur.

### OTP
Sending 2FA code via SMS to your users without the hassle.

**Send**
````javascript
nomado.otp.send({
  to: '3245678901', // e164 formatted number
  template: 'Your verification code is {{CODE}}.',
  type: 'ALPHANUMERIC', // optional, ALPHA, NUMERIC or ALPHANUMERIC (default)
  length: 4, // optional, defaults to 4
  expiry: 7200 // optional, defaults to 7200 seconds (2 hours)
})
````
In the template, `{{CODE}}` will be replaced by the generated 2FA code.

**Verify**

Let's check the code entered by your user.
````javascript
nomado.otp.verify({
  number: '3245678901', // their phone number,
  token: '456789' // their code
})

// expected response
{
  code: 200,
  data: {
    verify: true
  }
}
````

Once the code has been verified, it becomes invalidated.

### Calls
**Make**

Makes a call to a telephone line or number. When it answers, makes a second call to a number, bridging both calls together.
````javascript
nomado.calls.make({
  cnumber: '3245678901',
  snumber: '3245678902'
});

// example response
{
  code: 200
}
````

### HLR
Make HLR queries to any mobile number.

**Fetch**
````javascript
nomado.hlr.fetch({
  numbers: ['3245678901','3245678902'], // e164 formatted numbers
});

// example response
{
  code: 200,
  data: {
    '3245678901': { ... },
    '3245678902': { ... },
    valid_numbers: 2
  },
  cost: 0.05,
}
````
**Validate**

Free query to validate mobile phone numbers and get short information
````javascript
nomado.hlr.validate({
  number: '3245678901', // e164 formatted number
});

// example response
{
  code: 200,
  data: {
     Status: 'Valid',
     Region: 'BE',
     ...
  }
}
````

### Account
Easy way to check your current balance

**Get balance**
````javascript
nomado.account.getBalance();

// example response
{
  code: 200,
  data: {
     balance: '95.740418'
  }
}
````


## Contributing
You are welcome to contribute in several ways like creating new features, fixing bugs, improving documentation, translating etc...
[More information in CONTRIBUTING.md](CONTRIBUTING.md).

## Support
We are a small team dedicated to offer you the best support because we want to satisfy you.
For any problem or question, feel free to [contact us](https://odoo.nomado.eu/page/contact-call-support-nomado).

## Contributors
- [Flavien Barsé](https://github.com/flavienb)
- [Aley Rizvi](https://github.com/aleyrizvi)
