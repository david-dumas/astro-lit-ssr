import { LitElement, html, css } from 'lit';

export class LoginFormInteractive extends LitElement {
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
  }`;

  render() {
    return html`
      <!-- Dynamische Username Input -->
      <input type="text" name="userName" label="Username" />
      <!-- Dynamische Password Input -->
      <input type="password" name="password" label="Password" />
      <!-- Checkbox en Submit Button -->
      <label>
        <input type="checkbox" />
        Remember my username
      </label>
      <button type="submit">Log in</button>
    `;
  }
}
customElements.define('login-form-interactive', LoginFormInteractive);