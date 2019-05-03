import { waitForAngular } from 'testcafe-angular-selectors';
import { urlFor } from '../../../helpers/url.helper';

import { <%= classify(name) %>Page } from './<%= dasherize(name) %>.page-model';

const <%= camelize(name) %>Page = new <%= classify(name) %>Page();

fixture `<%= classify(name) %>`
  .page(urlFor('ng/<%= dasherize(name) %>'))
  .beforeEach(async (t) => {
    await waitForAngular();
  });

test('shows <%= dasherize(name) %>', async (t) => {
  await(t)
    .expect(<%= camelize(name) %>Page.mainText.innerText).eql('<%= dasherize(name) %> works!');
});
