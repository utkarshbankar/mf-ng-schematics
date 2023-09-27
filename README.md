# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

### Using it localy

1. Download the code on your system.

2. Create angular workspace using. - ng new app_Name --create-application=false

3. now link the copyed code to this work space like,
     >> <App_Name>npm link <path_to_copyed_code>/mf-ng-schematics
     >> after successful installation. 
4. Run the schematics like,
    > ng g mf-ng-schematics:base
    > ng g mf-ng-schematics:lazymod
    > ng g mf-ng-schematics:standalone
and finally 
5. The Result.
<img width="584" alt="sucessful schematic first" src="https://github.com/utkarshbankar/mf-ng-schematics/assets/26164773/5d54759a-ae3c-4bf6-8510-cf28bfeb1289">



