"use client";

import React from 'react'
import Header from '../Header'
import { Tab, Tabs } from 'react-bootstrap'

const Blog = () => {
  return (
    <>
        <Header />
        <div className="page-header">
	        <h1>Second Brain Blog</h1>
        </div>
    
        <div className="container">

            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                  Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                  Tab content for Contact
                </Tab>
            </Tabs>

	        <div className="blogCat">
	        	<a href="#" className="bcitem">Exam</a>
	        	<a href="#" className="bcitem">Motivation</a>
	        	<a href="#" className="bcitem">Result</a>
	        	<a href="#" className="bcitem">Career</a>
	        	<a href="#" className="bcitem">GATE & ESE -Civil</a>
	        </div>

	        <h5 className="text-center mb-4">Latest Blogs</h5>

	        <ul id="blogList">
	        	<li>
	        		<a href="#">
	        			<img src="https://place-hold.it/400x300" alt="" />
	        			<span className="blginfo">
	        				<h4>How to create perfect time table?</h4>
	        				<p>Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.</p>
	        			</span>
	        		</a>
	        	</li>
	        	<li>
	        		<a href="#">
	        			<img src="https://place-hold.it/400x300" alt="" />
	        			<span className="blginfo">
	        				<h4>How to create perfect time table?</h4>
	        				<p>Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.</p>
	        			</span>
	        		</a>
	        	</li>
	        	<li>
	        		<a href="#">
	        			<img src="https://place-hold.it/400x300" alt="" />
	        			<span className="blginfo">
	        				<h4>How to create perfect time table?</h4>
	        				<p>Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.</p>
	        			</span>
	        		</a>
	        	</li>
	        	<li>
	        		<a href="#">
	        			<img src="https://place-hold.it/400x300" alt="" />
	        			<span className="blginfo">
	        				<h4>How to create perfect time table?</h4>
	        				<p>Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.</p>
	        			</span>
	        		</a>
	        	</li>
	        	<li>
	        		<a href="#">
	        			<img src="https://place-hold.it/400x300" alt="" />
	        			<span className="blginfo">
	        				<h4>How to create perfect time table?</h4>
	        				<p>Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.</p>
	        			</span>
	        		</a>
	        	</li>
	        	<li>
	        		<a href="#">
	        			<img src="https://place-hold.it/400x300" alt="" />
	        			<span className="blginfo">
	        				<h4>How to create perfect time table?</h4>
	        				<p>Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.</p>
	        			</span>
	        		</a>
	        	</li>
	        	<li>
	        		<a href="#">
	        			<img src="https://place-hold.it/400x300" alt="" />
	        			<span className="blginfo">
	        				<h4>How to create perfect time table?</h4>
	        				<p>Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.</p>
	        			</span>
	        		</a>
	        	</li>

	        </ul>
        </div>
    </>
  )
}

export default Blog