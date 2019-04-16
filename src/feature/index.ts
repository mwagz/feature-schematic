import { normalize, strings } from '@angular-devkit/core';
import {
  apply, mergeWith, Rule,
  template, url, chain, branchAndMerge
} from '@angular-devkit/schematics';

export function feature(options: any): Rule {
  return () => {
    options.path = options.path ? normalize(options.path) : options.path;
    const templateSource = apply(url('./files'), [
      template({
        ...strings,
        ...options,
      }),
    ]);
    return chain([
      branchAndMerge(chain([
        mergeWith(templateSource),
      ])),
    ]);
  };
}
