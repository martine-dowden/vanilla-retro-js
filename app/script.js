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
      style.textContent = `
          @keyframes blink {
          0% { visibility: hidden; }
          50% { visibility: hidden; }
          100% { visibility: visible; }
        }
        .blink { animation: 1s linear infinite blink; }
      `;


      //  Append
      shadow.appendChild(wrapper);
      wrapper.appendChild(style);

    }

  }

  customElements.define('app-blink', Blink);

})();
