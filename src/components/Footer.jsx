import copyright from "../assets/copyright.png";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <div style={styles.copyright}>
          <img style={styles.copyImage} src={copyright} alt="copyright" />
          <span>Gurus of the Apocalypse 2025, All Rights Reserved</span>
        </div>
        <div style={styles.text}>
          <a href="mailto:info@apocalypse.com" style={styles.link}>
            email: info@apocalypse.com
          </a>
        </div>
        <div style={styles.number}>
          <a href="tel:+441234567890" style={styles.link}>
            phone: +(44)1234 567890
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "linear-gradient(to right, #f9dd51, #f89e5e, #f25656)",
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
    padding: "20px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  copyright: {
    display: "flex",
    flexDirection: "horizontal",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  },
  copyImage: {
    height: "25px",
    width: "auto",
  },
  text: {
    height: "15px",
    fontSize: "16px",
  },
  number: {
    marginTop: "8px",
  },
};

export default Footer;
