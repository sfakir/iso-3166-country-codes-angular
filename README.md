>Note that this README is for the currently developed version of the library

## ISO 3166 for Angular JS

This project is an ISO 3166 (Country codes) module for AngularJS. It provides:

* A service (factory) that gives access to all country codes
* A filter to print country codes as their standard name (FR -> FRANCE)
* The filter is locale depending for German and  English locale Settings  (FR-> France or Frankreich)
* A validation directive to validate country codes


## Get it

This library is available with the bower package manager, you can either:

* Execute the following command: `bower install iso-3166-country-codes-angular --save`
* Add this line in your dependencies: `"iso-3166-country-codes-angular": "1.2.1"`

If you prefer using NPM, it is now available at npmjs.com. To get it you can either:

* Execute the following command: `npm i iso-3166-country-codes-angular`
* Add this line in your `package.json`: `"iso-3166-country-codes-angular": "1.2.1"`

## Use it

Add `iso-3166-country-codes`` to your module dependencies. 

## Features

### Factory

You can have access to country codes information and several utilitary methods.

```javascript
// Declare the factory as dependency
angular.module('myApp', ["iso-3166-country-codes"])
  .controller('MyCtrl', function (ISO3166) {

        ISO3166.setLocale('de-de'); // or 'de' or 'de_DE', ...

        $scope.countryList = ISO3166.codeToCountry; // list of German countries..
        




    // Test if a value is a country code
    console.log(ISO3166.isCountryCode('FR')); // true
    console.log(ISO3166.isCountryCode('FRA')); // false

    // Get country name
    console.log(ISO3166.getCountryName('FR'));
    // FRANCE

    // Get several country names at once (ignores invalid codes)
    console.log(ISO3166.getCountryNames(['DE', 'FR', 'invalid']));
    // {
    //   'DE': 'Germany',
    //   'FR': 'France'
    // }

    // Get country name, manipulated by String methods.
    console.log(ISO3166.getCountryName('FR', 'toLowerCase'));
    // france

    // Get several country names at once (ignores invalid codes)
    console.log(ISO3166.getCountryNames(['DE', 'FR', 'invalid'], 'toLowerCase'));
    // {
    //   'DE': 'germany',
    //   'FR': 'france'
    // }

    // Get country code by country name
    console.log(ISO3166.getCountryCode('France'));
    // FR

    // Get country code by country name, manipulated by String methods.
    console.log(ISO3166.getCountryCode('France'), 'toLowerCase');
    // fr

    // Direct access to the data
    console.log(ISO3166.codeToCountry);
    // {
    //   'FR': 'France',
    //   ...
    // }
    console.log(ISO3166.countryToCode);
    // {
    //   'France': 'FR'
    //  ...
    // }
    console.log(ISO3166.countryCodes);
    // ['AF', 'AX', 'AL', ... ]

  });
```

### Filter

If you get country codes from your REST server, you can print their standard names with the provided filter:

```html
<!-- if countryCode is 'FR', will print 'France' -->
<p>{{countryCode | isoCountry }}</p>
```

On the other hand, if you get country names from your REST server, you can print their ISO codes:

```html
<!-- if countryName is 'France', will print 'FR' -->
<p>{{countryName | isoCountryCode }}</p>
```

### Validation directive

If you want users to enter country codes, you can validate it like so (it fits in Angular validation process):

```html
<form name="form" novalidate>
  <input type="text" name="countryField" country-code />
  <span ng-show="form.countryField.$error.countrycode">This must be a country code!</span>
</form>
```

## Release

*  grunt build
* bump version
* git tag -a v0.0.2 -m "Release version 0.0.2"

