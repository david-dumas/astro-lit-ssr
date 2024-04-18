import { LitElement, html, css } from "lit"; 
import { IngButton } from 'ing-web/button';
import { IngNotificationInline } from "ing-web/notification-inline.js";
import { IngInput } from 'ing-web/input.js';

export class LoginForm extends LitElement {
    static styles = css`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh; 
      flex-direction: column;
    }

    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      background-color: #FFFFFF;
      width: 30rem;
      padding: 20px;
      box-sizing: border-box; 
    }

    .form-header {
        border-bottom: 2px solid;
        border-color: lightgray;
        width: 30rem;
        height: 3rem;
        background-color: #FFFFFF;
    }
    h1 {
      color: #FF6200;
      font-size: 25px;
    }

    h4 {
        color: gray;
        font-weight: lighter;
    }

    input[type="text"], input[type="password"] {
      width: 100%; 
      padding: 10px;
      box-sizing: border-box;
      border-radius: 3px;
      border-width: thin;
    }

    .submit-button {
      background-color: #FF6200; 
      border-radius: 8px;
      color: #FFFFFF;
      border: none;
      padding: 10px;
      padding : 10px 20px 10px 20px;
      cursor: pointer;
      font-size: 18px;
      margin: 20px 0; 
    }

    .checkbox-input {
        margin: 20px 0;
    }

    .login-details {
        font-size: 15px;
        text-decoration: none;
        padding-left: 2rem;
    }

    .links {
        padding-top: 2rem;
    }

    .link {
        color: gray;
    }

     @media (max-width: 600px) {
      .card, .form-header {
        width: 90%;
        margin: 0 auto;
      }
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="form-header"></div>
        <div class="card">
        <ing-notification-inline
                    closeable=""
                    data-tag-name="ing-notification"
                    type="information"
                  >
                    Vanaf nu ziet de inlogpagina er iets anders uit.
                    <a
                      href="https://www.ing.nl/de-ing/veilig-bankieren/nieuwe-login-pagina/index.html"
                      role="link"
                    >
                      Meer weten
                    </a>
                  </ing-notification-inline>
          <form @submit=${this._handleSubmit}>
            <h1>Log in to Mijn ING</h1>
            <h4>Username</h4>
            <ing-input label="username" name="username"></ing-input>
            <h4>Password</h4>
            <input type="password" name="password" label="Password" .modelValue=${''} />
            
            <label><input class="checkbox-input" type="checkbox" label="Remember my username"> Remember my username</label>
            <br>
            <ing-button>Log In</ing-button>
            <a class="login-details" href="#">Lost your login details?</a>
          </form>
        </div>
        <div class="links">
          <a class="link" href="#">Join ING</a>
          <a class="link" href="#">Secure Banking</a>
          <a class="link" href="#">Privacy and cookies</a>
          <a class="link" href="#">Disclaimer</a>
        </div>
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

    customElements.define('login-form', LoginForm);
    customElements.define('ing-button', IngButton); 
    customElements.define('ing-input', IngInput)
    customElements.define('ing-notification-inline', IngNotificationInline);
    