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
  
This package provides a client to access the Nomado API.

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

Below is a quick example for initializing the library and **sending a SMS**.

```javascript
const NomadoClient = require('nomado');

const USERNAME = 'username';
const PASSWORD = 'password';

const nomado = new NomadoClient({USERNAME, PASSWORD});

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
The `NomadoClient` class provides the public interfaces to access the Nomado API 
* `SMS`
* `OTP`
* `Calls`
* `HLR`
* `Account`

### Authentication
First, initialize the library with your Nomado credentials.
````javascript
const nomado = new NomadoClient({USERNAME, PASSWORD});
````

Now, you can start sending requests to the API.

### Responses
Every call will return a promise that will be resolved (or rejected) with a 
`NomadoResponse` object wrapping the API response code and the data.  

````javascript
// Result object:
{
  code: 200,
  reason: "", //in case of error
  data: {}
}
````


### SMS

#####Send
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
If you are sending unicode SMS, don't forget to turn on the `unicode` flag.
    
###OTP
Sending 2FA code via SMS to your users without the hassle.

#####Send
````javascript
nomado.otp.send({
  number: '3245678901', // e164 formatted number
  template: 'Your verification code is {{code}}.'
})
````
In the template, `{{code}}` will be replaced by the generated 2FA code. 

#####Verify
Let's check the code entered by your user.
````javascript
nomado.otp.verify({
  number: '3245678901', // their phone number,
  code: '456789' // their code
})
````

###Calls
#####Make
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

###HLR
Make HLR queries to any mobile number.
#####Fetch
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
#####Validate
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

###Account
Easy way to check your current balance
#####Get balance
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
For any problem or question, feel free to [contact us](https://www.nomado.eu/page/contact-call-support-nomado).

## Contributors
- [Flavien Barsé](https://github.com/flavienb)
- [Aley Rizvi](https://github.com/aleyrizvi)
