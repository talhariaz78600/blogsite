import "./globals.css";
import "../assets/css/base.css"
import "../assets/css/bold-options.css"
import "../assets/css/bsub.scss.css"
import "../assets/css/component-card.css"
import "../assets/css/component-cart-items.css"
import "../assets/css/component-cart-notification.css"
import "../assets/css/component-facets.css"
import "../assets/css/component-list-menu.css"
import "../assets/css/component-list-payment.css"
import "../assets/css/component-loading-overlay.css"
import "../assets/css/component-list-social.css"
import "../assets/css/component-newsletter.css"
import "../assets/css/component-menu-drawer.css"
import "../assets/css/component-newsletter.css"
import "../assets/css/component-rating.css"
import "../assets/css/disclosure.css"
import "../assets/css/section-footer.css"
import "../assets/css/section-rich-text.css"
import "../assets/css/template-collection.css"
import "../assets/css/component-menu-drawer.css"
import "../assets/css/component-price.css"
import "../assets/css/component-search.css"
import "../assets/css/component-rte.css"
import "../assets/css/custom.css"
import "../assets/css/component-card.css"
import Headernav from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export const metadata = {
  title: "Guest Glow",
  description: "The purpose of this application is provide context",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Headernav />
        {children}
        <Footer />
        <script src="https://kit.fontawesome.com/94794741f1.js" crossorigin="anonymous"></script>
      </body>
    </html>
  );
}