import { LitElement, html } from "lit"
import { IngInput } from 'ing-web/input.js';

class UsernameInput extends LitElement {
    render() {
        return html`
        <ing-input type="text" name="userName" label="" />
        `
    }
}

customElements.define('username-input', UsernameInput)
customElements.define('ing-input', IngInput)
