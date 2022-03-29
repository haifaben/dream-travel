function Footer() {
  return (
    <footer className="container-fluid bg-primary">
      <p className="float-end">
        <a href="#top-page">Back to top</a>
      </p>

      <p>Copyright (c) 2020 Copyright Holder All Rights Reserved.</p>
      <ul className="social-link">
        <li>
          <a href="/">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
