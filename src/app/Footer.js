import React from 'react'

const Footer = () => {
  return (
    <footer id="sitefooter">
	    <div className="container">
	    	<div className="row">
	    		<div className="col-lg-3 col-xl-4 flogo">
	    			<img src="/2nd-brain-logo-footer.svg" alt="Second Brain" />
	    		</div>
	    		<div className="col-md-7 col-lg-5 row flinks">
	    			<div className="col-md-auto">
	    				<h5>Company</h5>
	    				<ul>
	    					<li><a href="#whatwedo">About Us</a></li>
	    					{/* <li><a href="#">Blog</a></li>
	    					<li><a href="#">Careers</a></li> */}
	    				</ul>
	    			</div>
	    			<div className="col-md">
	    				<h5>Contact</h5>
	    				<ul>
	    					<li><a href="mailto:secondbrainapp@gmail.com">secondbrainapp@gmail.com</a></li>
	    					<li>+91 9995555555</li>
	    				</ul>
	    			</div>
	    		</div>
	    		<div className="col-md-5 col-lg-4 col-xl-3 footerLast">
	    			<div className="order-md-2">
	    				<h5>Download App</h5>
	    				<div className="d-flex storeBtns">
	    					{/* <button><img src="/app-store.png" alt="App Store"/></button> */}
	    					<a href='https://play.google.com/store/apps/details?id=com.second.brain.app&hl=en&gl=US' target='_blank'><img src="/google-play.png" alt="Google Play"/></a>
	    				</div>
	    			</div>
	    			<div className="social order-md-1">
					<a href="https://www.instagram.com/secondbrain_app/" target='_blank'><img src="/instagram-logo.svg" /></a>
	      		<a href="https://www.facebook.com/people/Second-Brain/100091783296992/" target='_blank'><img src="/facebook-logo.svg" /></a>
	      		<a href="https://www.linkedin.com/company/secondbrainapp/" target='_blank'><img src="/linkedin-logo.svg" /></a>
	      		{/* <a href="#"><img src="/twitter-logo.svg" /></a> */}
				<a href="https://www.youtube.com/@SecondBrain-Smart_Revision_App" target='_blank'><img src="/youtube-logo.svg" /></a>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </footer>
  )
}

export default Footer