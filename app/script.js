(function () {
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
      wrapper.classList.add('blink');
      const text = this.getAttribute('text');
      wrapper.textContent = text;

      // Styles
      const style = document.createElement('style');
      style.textContent = "@import './blink.css";


      //  Append
      shadow.appendChild(wrapper);
      wrapper.appendChild(style);

    }

  }

  customElements.define('app-blink', Blink);

})();
