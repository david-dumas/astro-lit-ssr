import { LitElement, html, css } from "lit"
import { IngButton } from "ing-web/button.js"

class ActionButton extends LitElement {
    static styles = css`
    
    .button {
        background-color: #FF6200; 
        border-radius: 8px;
        color: #FFFFFF;
        border: none;
        padding: 10px;
        padding : 10px 20px 10px 20px;
        cursor: pointer;
        font-size: 18px;
      }`;

    render() {
        return html`
        <ing-button class="button" type="button" name="loginButton" label="LoginButton">Log In</ing-button>
        `
    }
}

customElements.define('action-button', ActionButton)
customElements.define('ing-button', IngButton)