class VeryCoolElement extends Polymer.Element {
  static get is() { return 'very-cool-element'; }
  static get properties() {
    return {
      prop: {
        type: String
      }
    }
  }

  _handleCustomEvent(e) {
    this.prop = e.detail;
  }
}

window.customElements.define(VeryCoolElement.is, VeryCoolElement);