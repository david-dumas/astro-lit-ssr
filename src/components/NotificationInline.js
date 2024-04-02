import { LitElement, html } from "lit";
import { IngNotificationInline } from "ing-web/notification-inline.js";

class NotificationInline extends LitElement {
    render() {
        return html`
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
        `
    }
}

customElements.define('notification-inline', NotificationInline)
customElements.define('ing-notification-inline', IngNotificationInline);
