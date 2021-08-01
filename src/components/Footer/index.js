import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {
    return (

        <footer id="footer">
            <div>
                <a href="mailto:chitra.iyer00@gmail.com">
                    {/* <FontAwesomeIcon icon={["fas", "envelope-square"]} size="3x"  /> */}
                    <i className="fas fa-envelope-square" id="icon" ></i>
                </a>
            </div>
            <div>
                <a href="https://github.com/ciyer87" target="_blank" rel="noreferrer">
                    {/* <FontAwesomeIcon icon={["fab", "git-square"]} size="3x" color="#607d8b" /> */}
                    <i className="fab fa-git-square" size="3x" color="#607d8b"></i>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/chitra-padmanabhan-2404812/" target="_blank" rel="noreferrer">
                    {/* <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" color="#607d8b" /> */}
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div>
                <a href="https://stackoverflow.com/users/16558724/chitra" target="_blank" rel="noreferrer">
                    {/* <FontAwesomeIcon icon={["fab", "stack-overflow"]} size="3x" color="#607d8b" /> */}
                    <i className="fab fa-stack-overflow"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;