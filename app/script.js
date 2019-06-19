(function() {
  'use strict';
  console.log('loaded');

  class Blink extends HTMLElement {
    constructor() {
      super();

      //  Create a shadow root
      const shadow = this.attachShadow({
        mode: 'open'
      });

      const wrapper = document.createElement('span');
      const text = this.getAttribute('text');
      wrapper.textContent = text;

      //  Append
      shadow.appendChild(wrapper);

    }
    
  }

  customElements.define('app-blink', Blink);

})();
