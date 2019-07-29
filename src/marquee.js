const Marquee = (function() {
  'use strict';

  class Component extends HTMLElement {
    constructor() {
      super();

      //  Create a shadow root
      const shadow = this.attachShadow({
        mode: 'open'
      });

      const wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      console.log(!!this.getAttribute('height'), !!this.getAttribute('width'));
      const height = this.getAttribute('height') ? `${this.getAttribute('height')}px` : '100%';
      const width = this.getAttribute('width') ? `${this.getAttribute('width')}px`: '100%';
      const direction = !!this.getAttribute('direction') ? this.getAttribute('direction') : 'right';
      console.log(height, width);

      const container = document.createElement('div');
      container.classList.add('container', direction);
      const _height = height + container.height;
      
      const slot = document.createElement('slot');
      slot.setAttribute('name', 'content');

      // Styles
      const style = document.createElement('style');
      style.textContent = `
        @keyframes shift-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes shift-left {
          0% { transform: translateX(300%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes shift-top {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        @keyframes shift-bottom {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .wrapper {
          height: ${height};
          overflow: hidden;
          position: relative;
          width: ${width};
        }
        .container {
          animation: 10s linear infinite;
          display: inline-block;
          height: inherit;
          left: 0;
          position: relative;
          top: 0;
          width: inherit;
        }
        .inner-container {
          overflow: hidden;
          position: absolute;
        }
        .bottom { animation-name: shift-bottom; }
        .left { animation-name: shift-left; }
        .right { animation-name: shift-right; }
        .top { animation-name: shift-top; }
      `;

      //  Append
      shadow.appendChild(wrapper);
      wrapper.appendChild(container);
      container.appendChild(slot);

      //  Append Styles
      wrapper.appendChild(style);

    }
  }
  customElements.define('retro-marquee', Component);
})();

export { Marquee };