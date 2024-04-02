import { LitElement, html, css } from "lit";
import { IngInput } from 'ing-web/input.js';
import { IngCard } from 'ing-web/card.js';
import { IngButton } from 'ing-web/button.js'
import { IngCheckbox } from 'ing-web/checkbox-group.js'

export class LoginFormIng extends LitElement {
    static styles = css`
    .demo-card__box {
        background-color: gray;
        align-items: center;
        max-width: 100px;
    }

    .container {
        margin: auto;
        width: 50%;
        padding: 10px;
    }

    .Title {
        color:#FF6200;
    }
    `;

    render() {
        return html`
        <div class="container">
        <ing-card>
        <p slot="content">
          ** notification
        </p>
        <h2 class="Title" slot="heading">Log in to Mijn ING</h2>
        <ing-form slot="content">
        <form>
        <ing-input name="userName" label="Username" .modelValue=${''}></ing-input>
        <ing-input name="password" label="Password" .modelValue=${''}></ing-input>
        <ing-checkbox label="Remember my username"></ing-checkbox>
        </form>
        <ing-button>Log in</ing-button>
        </ing-form>      
        </ing-card>
        </div>
        `;
      }
    
      _handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
        console.log(`Inloggen met gebruikersnaam: ${username} en wachtwoord: ${password}`);
      }
    }
    
    customElements.define('ing-input', IngInput);
    customElements.define('login-form-ing', LoginFormIng);
    customElements.define('ing-card', IngCard);
    customElements.define('ing-button', IngButton);
    customElements.define('ing-checkbox', IngCheckbox);
