import copyright from "../assets/copyright.png";

const Footer = () => {
  return (
    <footer style={styles.footer}>    
        <div style={styles.copyright}>
          <img style={styles.copyImage} src={copyright} alt="copyright"/>
          <span>Gurus of the Apocalypse</span>          
        </div>
        <div>
          <a href="mailto:info@apocalypse.com" className="hover-underline"><span>email: info@apocalypse.com</span></a>
        </div>       
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    borderRadius: '8px',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
  },
  copyright: {
    display: 'flex',
    flexDirection: 'horizontal',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyImage: {
    height: '25px',
    width: 'auto',  }  
};

export default Footer;
