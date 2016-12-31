# fastboot-mirage-test

This is an experiment for using mirage in fastboot. See https://github.com/samselikoff/ember-cli-mirage/pull/975 for some more background.

To start with fastboot:
```
FASTBOOT=1 FASTBOOT_MIRAGE_PORT=1234 FASTBOOT_LOAD_MIRAGE=1 DEBUG=express:* ember fastboot --serve-assets --port 4201
```
then visit http://localhost:4201


The role of variables:
   * FASTBOOT - passed to know we're in fastboot mode, just used to disable normal mirage. Needed because EMBER_CLI_FASTBOOT was not always set in config/environment.js
   * FASTBOOT_MIRAGE_PORT - configures the port mirage is running express server on
   * FASTBOOT_LOAD_MIRAGE - when fastboot is loaded by default mirage doesn't loads anything. This constant overrides that behavior

To start without fastboot:
```
ember serve
```

then visit http://localhost:4200

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd fastboot-mirage-test`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
