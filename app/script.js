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
      const text = this.getAttribute('text');
      wrapper.textContent = text;

      // Create a slot for user input content
      const slot = document.createElement('slot');
      slot.setAttribute('name', 'blinkContent');
      wrapper.appendChild(slot);

      // Styles
      const style = document.createElement('style');
      style.textContent = "@import './blink.css";

      // Button to toggle blink
      let blink = false;
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.innerText = 'Start Blink';
      
      function toggleBlink() {
        console.log('blnik')
        if (blink) {
          slot.classList.remove('blink');
          button.innerText = 'Start Blink';
          blink = false;
        } else {
          slot.classList.add('blink');
          button.innerText = 'Stop Blink';
          blink = true;
        }
      }
      button.onclick = toggleBlink;


      //  Append
      shadow.appendChild(wrapper);
      wrapper.appendChild(slot);
      wrapper.appendChild(button);

      //  Append Styles
      wrapper.appendChild(style);

    }

  }

  customElements.define('app-blink', Blink);

})();
