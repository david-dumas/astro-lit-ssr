import { LitElement, html, css } from "lit";

export class LoginHeader extends LitElement {
    static styles = css`
    .Title {
        text-align: center;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background-color: #FFFFFF;
      }
      
      .container {
        padding: 16px;
      }
    `

    render () {
        return html`
        <div class="card">
        <div class="container">
        <img src="../../src/assets/ing-logo.png" alt="logo" style="width:100px;height: 25px">
        </div>
      </div>        
        `
    }
}

customElements.define('login-header', LoginHeader);