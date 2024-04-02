import { LitElement, html, css } from "lit";
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';

export class LoginFormLion extends LitElement {
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
        <lion-form>
        <form>
          <lion-input name="firstName" label="First Name" .modelValue=${'Foo'}></lion-input>
          <lion-input name="lastName" label="Last Name" .modelValue=${'Bar'}></lion-input>
        </form>
      </lion-form>
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
    
    customElements.define('lion-form', LionForm);
    customElements.define('lion-input', LionInput);
    customElements.define('login-form-lion', LoginFormLion);

