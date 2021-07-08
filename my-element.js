import { css } from 'lit-element';
import BXButton from 'carbon-web-components/es/components/button/button';

class MBTAButton extends BXButton {}

MBTAButton.styles = [
  BXButton.styles,
  css`
    .bx--btn--primary {
      border-radius: .25rem;
      padding: .6rem 1.6rem;
    }
  `,
];

window.customElements.define('mbta-btn', MBTAButton);
