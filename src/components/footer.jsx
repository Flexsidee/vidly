import React from "react";

const Footer = () => {
  return (
    <footer class="footer page-footer footer-light">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://github.com/Flexsidee"
            >
              <i class="fa fa-github fa-lg"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-tw mx-1"
              href="http://twitter.com/flexsidee"
            >
              <i class="fa fa-twitter fa-lg"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/somade-daniel-a52478114/"
            >
              <i class="fa fa-linkedin fa-lg"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://wa.me/+2347019983346"
            >
              <i class="fa fa-whatsapp fa-lg"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-copyright text-center py-3">© : Somade Daniel</div>
    </footer>
  );
};

export default Footer;
