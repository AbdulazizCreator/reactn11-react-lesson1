import { createElement } from "react";

function Footer() {
  return createElement(
    "footer",
    { className: "footer" },
    <div className="container">Footer</div>
  );
}

export default Footer;
