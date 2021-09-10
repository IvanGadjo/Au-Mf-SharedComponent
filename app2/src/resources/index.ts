import {FrameworkConfiguration} from 'aurelia-framework';
import { SharedComponent } from './sharedComponent';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([SharedComponent]);
}
