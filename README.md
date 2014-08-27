angular-web-starter-kit-seed
============================

An AngularJS and Web Starter Kit seed for modern web projects.

This aim to be a boostrap for projects based on [Web Starter Kit](http://developers.google.com/web/starter-kit) that want to use [AngularJS](http://www.angularjs.org) as a MVC Framework.

It is currently based onto Web Starter Kit `v0.4.0` and AngularJS `v1.2.16`.

Upon Web Starter Kit, it provides the following additional features :
* Web libraries management using [Bower](http://www.bower.io),
* AngularJS [multi-modules layout convention](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub) support,
* Unit testing of Angular code using [Karma](http://karma-runner.github.io),
* End to end testing of Angular code using [Protractor](https://github.com/angular/protractor).

How to use it ?
---------------

First, as pre-requisites, you should have `node`, `npm`, `ruby-saas` and `gulp` installed. They're pre-requisites for Web Starter Kit. Good setup notes are provided [here](https://developers.google.com/web/fundamentals/tools/setup/setup_kit#install-tooling). You also need to have `bower` installed globally (usually done with `npm install -g bower`)

Now, just clone the repo, cd to it and install dependencies.

```sh
git clone https://github.com/lbroudoux/angular-web-starter-kit-seed.git

cd angular-web-starter-kit-seed

# Install dependencies
npm install
```


How to start the server ?
-------------------------

Just type :

```sh
gulp serve
```

This should run the server and start a browser on `http://localhost:3000`. Livereload is now unable on your project !


How to run the tests ?
----------------------

Just type : 

```sh
gulp test
```

to run the Karma unit tests.

Or type :

```sh
npm run protractor
```

to run the Protractor end-to-end tests. You should have the server running for this later kind of tests.


How to distrib the project ?
----------------------------

Just type :

```sh
gulp
```

to build a ditribution for your project under `/dist` folder. `gulp clean` makes everything starts from fresh !


Licence
-------

This software is licensed under the Apache 2 license, quoted below.

Copyright 2013 Laurent Broudoux

Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
