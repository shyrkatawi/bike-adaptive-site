import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <a className="footer__link" href="#">Политика конфиденциальности</a>
                    <div className="footer__social">
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src="images/svg/IG.svg"  alt=""/>
                        </a>
                        <a className="footer__social-link" href="#">
                            <img className="footer__social-img" src="images/svg/FB.svg"  alt=""/>
                        </a>
                    </div>
                    <div className="footer__contacts">
                        <a className="footer__contacts-link" href="tel:+380506777777">
                            <img className="footer__contacts-img" src="images/svg/phone.svg" alt=""/>
                            <span>+38 050 677 77 77</span>
                        </a>
                        <a className="footer__contacts-link" href="mailto:elektrobikeukr@gmail.com">
                            <img className="footer__contacts-img" src="images/svg/mail.svg" alt=""/>
                            <span>elektrobikeukr@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
