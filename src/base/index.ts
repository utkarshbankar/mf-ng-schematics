import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask, RunSchematicTask } from '@angular-devkit/schematics/tasks';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function base(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
   
    const installTaskId = _context.addTask(new NodePackageInstallTask({
      packageName: '@angular-architects/module-federation'
    }));

    /**
     * This is to install and add external schematics - module federation.
    */
    const installTaskId1 = _context.addTask(new RunSchematicTask('add-mf', _options), [installTaskId]);

    /**
     * This task will update the code and add the container approach i.e. it will add container module as a root module and lazy module with respective names that you have provided. 
    */
    const installTaskId2 = _context.addTask(new RunSchematicTask('refactor-app', _options), [installTaskId1]);

    /**
     * This task will refactor the files as per updated module names and component names.
    */
    _context.addTask(new RunSchematicTask('refactor-files', _options), [installTaskId2]);
   
    return tree;
  };
}
