import './Footer.css';
import { motion } from 'framer-motion';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
  const imgGitHub = './icon/footer_github.svg';
  const imgLinkedIn = './icon/footer_linkedin.svg';

  return (
    <>
      <div className="footer">
        <ScrollToTop
          smooth
          to="20"
          color="#ffffff"
          width="20"
          style={{ right: '25px', width: '35px', height: '35px' }}
        />
        <div className="footer-socialnetworks">
          <a href="https://linkedin.com/in/jorgelina-mariano" target="_blank">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={imgLinkedIn}
              alt="Link to LinkedIn"
            />
          </a>
          <a href="https://github.com/jormariano" target="_blank">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={imgGitHub}
              alt="Link to GitHub"
            />
          </a>
        </div>
        <div className="footer-copy-logo">
          <p className="footer-copyright">
            {' '}
            Copyright © 2023 -{' '}
            <a href="https://jorgelinamariano.netlify.app" target="_blank">
              Jorgelina Mariano
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
