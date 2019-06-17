(function() {
  'use strict';
  console.log('loaded');

  class Blink extends HTMLElement {
    constructor() {
      super();
      //  Create a showdow root
      const shadow = this.attachShadow({
        mode: 'open'
      });
  
      //  Create container
      const wrapper = document.createElement('span');

      //  Create a slot for user input content
      const slot = document.createElement('slot');
      slot.setAttribute('name', 'blinkContent');
    
      //  Button to toggle blink
      let blink = false;
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.innerText = 'Start Blink';

      function toggleBlink() {
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
  
      // Style the component
      const style = document.createElement('style');
      style.textContent = "@import './blink.css';";
  
      // attach the created elements to the shadow dom
      shadow.appendChild(wrapper);
      wrapper.appendChild(slot);
      wrapper.appendChild(button);
  
      // attach styles
      shadow.appendChild(style);
    }
  }
  
  customElements.define('app-blink', Blink);

})();
