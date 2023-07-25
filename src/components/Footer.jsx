import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
	return (
		<div className='footer'>
			<p className='footnote'>Created by Utpal Singhal</p>
			<div className='social-links'>
				<a href="mailto: utpal.singhal499@gmail.com" target="_blank">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
				<a href="https://www.linkedin.com/in/utpalsinghal/" target="_blank">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href="https://github.com/utpalsinghal" target="_blank">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="" /*target="_blank"*/ onClick={()=>{alert("Website in-progress")}}>
					<FontAwesomeIcon icon={faLink} />
				</a>
			</div>
		</div>
	);
};

export default Footer;
