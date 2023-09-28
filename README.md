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
     
   -     <App_Name>npm link <path_to_copyed_code>/mf-ng-schematics

   -     after successful installation. 

4. Run the schematics like,

    -      ng g mf-ng-schematics:base

    -      ng g mf-ng-schematics:lazymod
     Here, we need to update the index.html file with root selector and update the main/bootstrap file with container component.

    -      ng g mf-ng-schematics:standalone
    - update the import of container module with standalone component name.
      then update the main.ts import manual for now.

and finally.

Note : Always use the rootmodule name as container.
       to run the different schematic create new workspace.
       always link the schematic to worspace when before executing it.

5. The Result.

<img width="584" alt="sucessful schematic first" src="https://github.com/utkarshbankar/mf-ng-schematics/assets/26164773/5d54759a-ae3c-4bf6-8510-cf28bfeb1289">



