const Blink = (function() {
  'use strict';

  class Component extends HTMLElement {
    constructor() {
      super();

      //  Create a shadow root
      const shadow = this.attachShadow({
        mode: 'open'
      });

      const wrapper = document.createElement('span');

      // Create a slot for user input content
      const slot = document.createElement('slot');
      slot.setAttribute('name', 'content');
      wrapper.appendChild(slot);

      // Styles
      const style = document.createElement('style');
      style.textContent = `
        @keyframes blink {
          0% { visibility: hidden; }
          50% { visibility: hidden; }
          100% { visibility: visible; }
        }
        :host {
          animation: 1s linear infinite blink;
        }
      `;

      //  Append
      shadow.appendChild(wrapper);
      wrapper.appendChild(slot);

      //  Append Styles
      wrapper.appendChild(style);

    }
  }
  customElements.define('retro-blink', Component);
})();

export { Blink };