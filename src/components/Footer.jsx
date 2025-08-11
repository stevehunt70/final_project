const Footer = () => {
  return (
    <footer style={styles.footer}>    
        <div>
        <img src="../assets/copyrightsymbol.png"/>
          <span>: Gurus of the Apocalypse</span>
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
};

export default Footer;
