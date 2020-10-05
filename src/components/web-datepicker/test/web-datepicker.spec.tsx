import { newSpecPage } from '@stencil/core/testing';
import { WebDatepicker } from '../web-datepicker';

describe('web-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebDatepicker],
      html: `<web-datepicker></web-datepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <web-datepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-datepicker>
    `);
  });
});
