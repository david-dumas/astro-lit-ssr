//combine with username
import { LitElement, html } from "lit"

class PasswordInput extends LitElement {
    render() {
        return html`
        <ing-input class="input" type="text" name="password" label=""></ing-input>
        `
    }
}

customElements.define('password-input', PasswordInput)
