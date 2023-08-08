import React from 'react'
var $ = require('jquery');
import Footer from './Footer'
import Link from 'next/link'

if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});

export const HomePage = () => {
  return (
    <div id="bannerHome">

      {/* first container */}
	    <div className="container">	
	    	<div className="banner-intro order-lg-2">
	    		<h1>One <span className="text-sky">App</span> Is Enough For</h1>
	    		<h4>All your <span className="text-aliceblue">Exam Preparation</span></h4>
	    		<a className="btn btn-primary" href="#dwdApp">Download App</a>
	    	</div>
	    	<div className="d-flex justify-content-end order-lg-1">
	    		<div className="mock-wraper">
	    			<img src="/banner-preview.png" className="bannerApp" alt="" />
	    			<img src="/banner-bgcircle.png" className="bannerBgimg" alt="" />

	    			<div className="bannerCourse">
	    				<span>JEE Main’s</span>
	    				<span>NEET</span>
	    				<span>UPSE</span>
	    				<span>SSC</span>
	    				<span>IBPS</span>
						{/* <span>RRB</span> */}
	    			</div>
	    		</div>
	    	</div>
 	    </div>

      	{/* second container */}
      	<div className="container" id="menuWrapper">
	      	<div className="social">
	      		<a href="https://www.instagram.com/secondbrain_app/" target='_blank'><img src="/instagram-logo.svg" /></a>
	      		<a href="https://www.facebook.com/people/Second-Brain/100091783296992/" target='_blank'><img src="/facebook-logo.svg" /></a>
	      		<a href="https://www.linkedin.com/company/secondbrainapp/" target='_blank'><img src="/linkedin-logo.svg" /></a>
	      		{/* <a href="#"><img src="/twitter-logo.svg" /></a> */}
				<a href="https://www.youtube.com/@SecondBrain-Smart_Revision_App" target='_blank'><img src="/youtube-logo.svg" /></a>
	      	</div>

	      	<div id="mainmenu">
	      	  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	      		<li className="nav-item">
	      		  <a className="nav-link active" href="#features">Features</a>
	      		</li>
	      		<li className="nav-item">
	      		  <a className="nav-link" href="#usecases">Use cases</a>
	      		</li>
	      		{/* <li className="nav-item">
	      		  <a className="nav-link" href="#howitworks">How it Works?</a>
	      		</li> */}
	      		<li className="nav-item">
	      		  <a className="nav-link" href="#packages">Pricing</a>
	      		</li>
	      		{/* <li className="nav-item">
	      		  <Link className="nav-link" href="blog">Blog</Link>
	      		</li> */}
	      	  </ul>
	      	</div>
      	</div>

      	<div data-bs-spy="scroll" data-bs-target="#mainmenu"></div>

      	{/* third container */}
        
      	<section id="loved" className="section text-center">
      		<h2>Students Loved</h2>
	
      		<div className="owl-carousel owl-theme instLogos" style={{display: "flex",justifyContent: "space-evenly"}}>
      			<div className="item"><img src="/unacademy.png" alt="" /></div>
      			<div className="item"><img src="/vedantu-logo.png" alt="" /></div>
      			<div className="item"><img src="/aakash.png" alt="" /></div>
      		</div>
	
      	</section>

		{/* fourth container */}
		<section id="whatwedo" className="section">
			<h2 className="d-lg-none">What is Second Brain ?</h2>
			<img src="/banner-bgcircle.png" className="glowBgimg" alt="" />
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<img src="/human-brain.png" alt="" />
					</div>
					<div className="col-lg-7 align-self-center ps-lg-5">
						<h2 className="d-none d-lg-block">What is Second Brain ?</h2>
						<h5>Cognitive AI Applied</h5>
						<p>Second Brain, a cutting-edge AI-powered platform utilizing deep tech advancements, revolutionizes learning. It leverages the Forgetting Curve principle for optimal memory recall. With the ability to consolidate study material like handwritten notes,pdfs,lecture notes,audios,videos at one place, it offers unparalleled organization. Second Brain employs AI to generate the personalized revision schedules for any studied topic.Through real-time revision notifications, users receive timely reminders for effective knowledge retention. Its advanced algorithms and personalized revision schedules set new standards in efficient learning. </p>
						<a href="#dwdApp" className="btn btn-outline-info">Download App</a>
					</div>
				</div>
			</div>
		</section>
		
		{/* 5th container */}
		<section id="features" className="section">
			<img src="/features-circle.svg" className="glowBgimg" alt="" />
			<div className="featuresBgWrapper">
				<div className="container">
					<h2 className="text-center">
						Features of Second Brain App
					</h2>
					<div className="secInfo text-center">
						Supercharge your learning with Second Brain! Organize all study materials in one place - PDFs, articles, videos, and more. Get timely reminders for seamless revisions and stay on top of your game!
					</div>
					<div className="row align-items-center">
						<div className="col-md-4">
							<div className="featureBox">
								<span className="feature-icon">
									<i className="fa fa-user"></i>
								</span>
								<h3>
									Organize your study materials at one place   
								</h3>
								<p>
								Second Brain's personalizedstore handwritten notes, web articles, YouTube videos, PDFs, audio, and video files all in one convenient place! revision schedule and timely notifications for any topic, ensuring you never miss a chance to review and ace your learning journey.
								</p>
							</div>
				
							<div className="featureBox">
								<span className="feature-icon">
									<i className="fa fa-user"></i>
								</span>
								<h3>
									Get AI-Powered Insights
								</h3>
								<p>
									Leverage the potential of AI to gain insights into your study patterns and compare yourself with other students preparing for the same exams.
								</p>
							</div>
						</div>
						<div className="col-md-4 text-center d-none d-md-block">
							<img src="/features-mobile-app.png" alt="" />
						</div>
						<div className="col-md-4">
							<div className="featureBox">
								<span className="feature-icon">
									<i className="fa fa-user"></i>
								</span>
								<h3>Get personalized revision schedule for any topic</h3>
								<p>
									Second Brain's personalized revision schedule and timely notifications for any topic, ensuring you never miss a chance to review and ace your learning journey
								</p>
							</div>
				
							<div className="featureBox">
								<span className="feature-icon">
									<i className="fa fa-user"></i>
								</span>
								<h3>Solve Your Doubts with ChatGPT</h3>
								<p>
									With ChatGPT, you have a powerful and personalized learning companion at your fingertips.
								</p>
							</div>
						</div>
					</div>
				
					<div className="text-center mt-5 d-none d-md-block">
						<a href="#dwdApp" className="btn btn-primary">Download App</a>
					</div>
				</div>
			</div>
		</section>
		
		{/* 6th container */}
		<section id="usecases" className="section">
			<img src="/usecase-circle.png" className="glowBgimg" alt="" />

			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<h2 className="h1">Use Cases</h2>
						<div className="secInfo">What ever you preparing for, we have solution's for all  </div>
					</div>
					<div className="col-lg-7">
						<p>Welcome to the world of Second Brain App, your ultimate smart and effective study companion for exam preparation! Our app caters to a wide range of popular exams, making it the perfect tool for students and learners like you. Whether you're preparing for competitive entrance exams, board exams, university assessments, or any other academic challenge, Second Brain has got you covered. With personalized revision schedules and AI-powered technology, you'll tackle every topic with confidence and stay ahead of the competition. Say goodbye to scattered study materials and embrace the future of revision with Second Brain App. Download now and unlock the full potential of your studies!</p>
					</div>
				</div>

				<div className="row gy-5 caseList">
					<div className="col-md-4">
						<h4>IIT-JEE</h4>
						<p>Ace your IIT JEE exam with Second Brain! Organize all study materials for Physics, Chemistry, and Mathematics while getting personalized revision schedules for each subject.</p>
					</div>
					<div className="col-md-4">
						<h4>NEET</h4>
						<p>Boost your NEET exam preparation with Second Brain! Store all study materials for Biology, Chemistry, and Physics in one place and receive customized revision schedules for each subject.</p>
					</div>
					<div className="col-md-4">
						<h4>UPSC</h4>
						<p>Ace your UPSC exam with Second Brain! Organize study materials for General Studies, History, Geography, and more subjects in a single platform. Get personalized revision schedules and notifications to master the diverse UPSC syllabus effortlessly!</p>
					</div>
					<div className="col-md-4">
						<h4>SSC</h4>
						<p>Prepare for SSC exams with ease using Second Brain! Store study materials for Quantitative Aptitude, English, General Awareness, and other subjects all in one place. Benefit from personalized revision schedules and timely reminders to stay ahead in your SSC exam preparation journey!</p>
					</div>
					<div className="col-md-4">
						<h4>Banking Exams</h4>
						<p>Ace your banking exams with Second Brain! Keep all your study materials organized, including topics like Reasoning, Quantitative Aptitude, English, and Banking Awareness.</p>
					</div>
					<div className="col-md-4">
						<h4>Railway exams</h4>
						<p>Store and manage all your study materials in one place, covering topics like General Awareness, Mathematics, General Intelligence, and Reasoning. Receive tailored revision schedules and timely reminders to stay ahead in your railway exam preparation journey!</p>
					</div>
				</div>
			</div>
		</section>

		{/* 7th container */}
		 <section id="howitworks" className="section">
			<img src="/howitworks-circle.png" className="glowBgimg" alt="" />

			<div className="container">
				<h2 className="text-center">How It Works?</h2>
				{/* <div className="owl-carousel owl-theme">
					<div className="item">
						<div className="row">
							<div className="col-md-4 order-md-1 stepCount">
								Step 1
							</div>
							<div className="col-md-4 order-md-3 stepInfo">
								<div className="stepTitle">Register on App</div>
								<p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
							</div>
							<div className="col-md-4 order-md-2">
								<img src="/Step1.png" alt="Second Brain" />
							</div>
						</div>
					</div>
					<div className="item">
						<div className="row">
							<div className="col-md-4 order-1 stepCount">
								Step 2
							</div>
							<div className="col-md-4 order-md-3 stepInfo">
								<div className="stepTitle">Register on app</div>
								<p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
							</div>
							<div className="col-md-4 order-md-2">
								<img src="/Step1.png" alt="Second Brain" />
							</div>
						</div>
					</div> 
				</div> */}
				<OwlCarousel
              		loop={true}
              		items={1}
              		responsiveRefreshRate={0}
              		autoplay={true}
              		autoplayTimeout={7000}
              		autoplayHoverPause={true}
              		nav={true}
              		navText={[
                		"<i class='icon-arrow-prev'></i>",
                		"<i class='icon-arrow-next'></i>"
              		]}
              		dots={false}
              		margin={20}
            	>
					<>
              		<div className="item">
						<div className="row">
							<div className="col-md-4 order-1 stepCount">
								Step 2
							</div>
							<div className="col-md-4 order-md-3 stepInfo">
								<div className="stepTitle">Register on app</div>
								<p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
							</div>
							<div className="col-md-4 order-md-2">
								<img src="/Step1.png" alt="Second Brain" />
							</div>
						</div>
					</div>
					<div className="item">
						<div className="row">
							<div className="col-md-4 order-1 stepCount">
								Step 2
							</div>
							<div className="col-md-4 order-md-3 stepInfo">
								<div className="stepTitle">Register on app</div>
								<p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.</p>
							</div>
							<div className="col-md-4 order-md-2">
								<img src="/Step1.png" alt="Second Brain" />
							</div>
						</div>
					</div>
					</>
            	</OwlCarousel>
			</div>
		</section>		
		{/* 8th container */}
		<section id="packages" className="section">
			<img src="/pkg-circle.png" className="glowBgimg" alt="" />

			<div className="container">
				<h2 className="text-center d-none d-lg-block">Speed Up Your preparation With <br /> second brain Premium</h2>
				<h2 className="text-center d-lg-none">Plans</h2>

				<div className="row">
					<div className="col-lg pkgItem">
						<div className="pkgTitle">Freemium</div>
						<div className="pkgExp">Freemium pack to help you to get started</div>
						<div className="pkgInfo">
							<ul>
								<li>Add and organize up to 4 topics per day.</li>
								<li>Unlimited Revision reminders and notifications</li>
								<li>20 study assistant conversations per day</li>
							</ul>
						</div>
						<button className="btn btn-outline-light">Get Started</button>
					</div>
					<div className="col-lg pkgItem">
						<div className="pkgTitle">Monthly</div>
						<div className="pkgExp">Monthly pack to help you to get started</div>
						<div className="pkgInfo">
							<ul>
								<li>Add and organize up to 4 topics per day.</li>
								<li>Unlimited Revision reminders and notifications</li>
								<li>20 study assistant conversations per day</li>
							</ul>
						</div>
						<div className="pkgCost"><small>₹</small><span>99</span></div>
						<button className="btn btn-outline-light">Get Started</button>
					</div>
					<div className="col-lg pkgItem bestPkg">
						<span className="bestPkgvalue btn-secondary-grd">Best Value</span>
						<div className="pkgTitle">3 Month's</div>
						<div className="pkgExp">Quarterly pack to help you to get started</div>
						<div className="pkgInfo">
							<ul>
								<li>Add and organize up to 4 topics per day.</li>
								<li>Unlimited Revision reminders and notifications</li>
								<li>20 study assistant conversations per day</li>
							</ul>
						</div>
						<div className="pkgCost"><small>₹</small><span>249</span></div>
						<button className="btn btn-secondary-grd">Get Started</button>
					</div>
					<div className="col-lg pkgItem">
						<div className="pkgTitle">6 Month's</div>
						<div className="pkgExp">Half Yearly pack to help you to get started</div>
						<div className="pkgInfo">
							<ul>
								<li>Add and organize up to 4 topics per day.</li>
								<li>Add and organize up to 4 topics per day.</li>
								<li>Add and organize up to 4 topics per day.</li>
								<li>Unlimited Revision reminders and notifications</li>
								<li>20 study assistant conversations per day</li>
							</ul>
						</div>
						<div className="pkgCost"><small>₹</small><span>449</span></div>
						<button className="btn btn-outline-light">Get Started</button>
					</div>
					<div className="col-lg pkgItem">
						<div className="pkgTitle">Annual</div>
						<div className="pkgExp">Annual pack to help you to get started</div>
						<div className="pkgInfo">
							<ul>
								<li>Add and organize up to 4 topics per day.</li>
								<li>Unlimited Revision reminders and notifications</li>
								<li>20 study assistant conversations per day</li>
								<li>20 study assistant conversations per day</li>
							</ul>
						</div>
						<div className="pkgCost"><small>₹</small><span>799</span></div>
						<button className="btn btn-outline-light">Get Started</button>
					</div>
				</div>
			</div>
		</section>

		{/* 9th container */}
		<section id="dwdApp" className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 align-self-center">
						<h3>DOWNLOAD APP & <br />GET THE VOUCHER!</h3>
						<p>Get all your study materials at one place, Solve mock test and past papers, create your personalized your time-table</p>

						{/* <button><img src="/app-store.png" alt="App Store" /></button> */}
						<a href='https://play.google.com/store/apps/details?id=com.second.brain.app&hl=en&gl=US' target='_blank'><img src="/google-play.png" alt="Google Play" /></a>
					</div>
					<div className="col-md-6">
						<img src="/download-app.svg" alt="download app" className="d-none d-md-block" />
						<img src="/download-app-sm.svg" alt="download app" className="d-md-none" />
					</div>
				</div>
			</div>
		</section>

		{/* 10th container */}
		<section id="learners" className="section">
			<div className="container">
				<h2 className="text-center">lets hear it from learners</h2>

				{/* <div className="owl-carousel learnReview">
					<div className="item">
						<div className="learnerCnt">
							<div className="learner-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="learner-comment">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.
							</div>
							<div className="learner-pic">
								<img src="/learner.jpg" alt="" />
							</div>
							<div className="learner-name">
								Vinay verma
							</div>
							<div className="learner-course">
								NEET -2022
							</div>
						</div>
						<div className="learnPic d-none d-lg-block">
							<img src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
						</div>
					</div>

					<div className="item">
						<div className="learnerCnt">
							<div className="learner-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="learner-comment">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.
							</div>
							<div className="learner-pic">
								<img src="images/learner.jpg" alt="" />
							</div>
							<div className="learner-name">
								Vinay verma
							</div>
							<div className="learner-course">
								NEET -2022
							</div>
						</div>
						<div className="learnPic d-none d-lg-block">
							<img src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
						</div>
					</div>

					<div className="item">
						<div className="learnerCnt">
							<div className="learner-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="learner-comment">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.
							</div>
							<div className="learner-pic">
								<img src="/learner.jpg" alt="" />
							</div>
							<div className="learner-name">
								Vinay verma
							</div>
							<div className="learner-course">
								NEET -2022
							</div>
						</div>
						<div className="learnPic d-none d-lg-block">
							<img src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
						</div>
					</div>

					<div className="item">
						<div className="learnerCnt">
							<div className="learner-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="learner-comment">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.
							</div>
							<div className="learner-pic">
								<img src="/learner.jpg" alt="" />
							</div>
							<div className="learner-name">
								Vinay verma
							</div>
							<div className="learner-course">
								NEET -2022
							</div>
						</div>
						<div className="learnPic d-none d-lg-block">
							<img src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
						</div>
					</div>

					<div className="item">
						<div className="learnerCnt">
							<div className="learner-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="learner-comment">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.
							</div>
							<div className="learner-pic">
								<img src="images/learner.jpg" alt="" />
							</div>
							<div className="learner-name">
								Vinay verma
							</div>
							<div className="learner-course">
								NEET -2022
							</div>
						</div>
						<div className="learnPic d-none d-lg-block">
							<img src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
						</div>
					</div>

					<div className="item">
						<div className="learnerCnt">
							<div className="learner-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="learner-comment">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.
							</div>
							<div className="learner-pic">
								<img src="/learner.jpg" alt="" />
							</div>
							<div className="learner-name">
								Vinay verma
							</div>
							<div className="learner-course">
								NEET -2022
							</div>
						</div>
						<div className="learnPic d-none d-lg-block">
							<img src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
						</div>
					</div>

					<div className="item">
						<div className="learnerCnt">
							<div className="learner-rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<div className="learner-comment">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac.
							</div>
							<div className="learner-pic">
								<img src="/learner.jpg" alt="" />
							</div>
							<div className="learner-name">
								Vinay verma
							</div>
							<div className="learner-course">
								NEET -2022
							</div>
						</div>
						<div className="learnPic d-none d-lg-block">
							<img src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg" alt="" />
						</div>
					</div>


				</div> */}
			</div>
		</section>

		<section id="getinTouch" className="section">
			<div className="container">
				<div className="text-center">
					<h4>Get in Touch</h4>
					<div className="secInfo">Contact Us</div>
				</div>

				<div className="homeForm">
					<div className="row">
						<div className="col-md-6">
							<input type="text" className="form-control" placeholder="Your Name" />
						</div>
						<div className="col-md-6">
							<input type="text" className="form-control" placeholder="Your Phone" />
						</div>
						<div className="col-md-12">
							<input type="emil" className="form-control" placeholder="Your Email" />
						</div>
						<div className="col-md-12">
							<textarea className="form-control" rows="4" placeholder="Please Write Your Message"></textarea>
						</div>
					</div>
					<div className="text-center mt-3">
						<button className="btn btn-primary">Send</button>
					</div>
				</div>
			</div>
		</section>

		<Footer />
            
    </div>
	)
}