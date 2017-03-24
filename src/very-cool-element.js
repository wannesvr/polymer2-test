class VeryCoolElement extends Polymer.Element {
  static get is() { return 'very-cool-element'; }
  static get properties() {
    return {
      prop: {
        type: String
      },

      feedback: {
        type: Array,
        value: []
      }
    }
  }

  _handleCustomEvent(e) {
    this.prop = e.detail;
    this.push('feedback', e.detail);
  }
}

window.customElements.define(VeryCoolElement.is, VeryCoolElement);