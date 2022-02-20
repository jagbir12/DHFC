import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

function Footer() {
    return(
        
        <div>
  		<div class="row">
			<div class="col-md-12">
			<footer class="footer">				
				<div class="container">
					<div class="row">
						<div class="col-md-3 m-b-30">
							<div class="footer-title m-t-5 m-b-20 p-b-8">
								About us
							</div>	
							<p class="white-text">
							All the Darwin Hearts Football Club members including: Coaches, players, guardians of miniroos, management team and the volunteers must sign-up this form and keep updates with the club's contact list. Guardians of miniroos must fill-up this form for their kids.
							</p>
						</div>
						<div class="col-md-3 m-b-30">
							<div class="footer-title m-t-5 m-b-20 p-b-8">
								Quick Links
							</div>	
							<div class="footer-links">
								<Link to="/home">Home</Link>
								<Link to="/history">History</Link>
								<Link to="/achievements">Achievements</Link>
								<Link to="/objectives">Objectives</Link>
							</div>
						</div>
						
						<div class="col-md-3 m-b-30">
							<div class="footer-links" style={{paddingTop:"62px"}}>
								<Link to="/special-thanks">Special Thanks</Link>
								<Link to="/volunteers">Volunteers</Link>
								<Link to="/contact-us">Contact Us</Link>
							</div>

							<div class="footer-social-links m-t-30">
								<li>
									<a href="https://www.facebook.com/darwinhearts">
										<i class="fab fa-facebook" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i class="fab fa-twitter" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i class="fab fa-linkedin" aria-hidden="true"></i>
									</a>
									<a href="#">
										<i class="fab fa-youtube" aria-hidden="true"></i>
									</a>
								</li>
							</div>
						</div>
						<div class="col-md-3 m-b-30">
							<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdarwinhearts%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{height:"340px"}}></iframe>
						</div>
					</div>
				</div>
			</footer>
			<div class="footer-bottom">
				Copyright © 2021, All Rights Reserved
			</div>
    	</div>
	</div>
</div>
    );
}

export default Footer;