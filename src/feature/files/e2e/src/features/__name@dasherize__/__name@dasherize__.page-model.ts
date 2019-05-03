import { AngularSelector } from 'testcafe-angular-selectors';

export class <%= classify(name) %>Page {
  public component: Selector;
  public mainText: Selector;

  constructor () {
    const component = AngularSelector('<%= dasherize(name) %>');
    this.component = component;
    this.mainText = component.find('p');
  }
}
