"use client";

import React, { useState } from 'react'
import Header from '../Header'
import { Nav, NavItem, NavLink, Tab, TabContent, TabPane, Tabs } from 'react-bootstrap'
import BlogCard from './BlogCard';

const blogData = [
	{id:1, title:"Why Revision with AI is Crucial for Exam Success!", discription:'Revision is the secret sauce to unlocking academic excellence! 🧠💪 As you immerse yourself in your studies, revisiting the material is the key to solidifying your understanding and retaining crucial information.'},
	{id:2, title:"How to create perfect time table2?", discription:'Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.'},
	{id:3, title:"How to create perfect time table3?", discription:'Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.'},
	{id:4, title:"How to create perfect time table4?", discription:'Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.'},
	{id:5, title:"How to create perfect time table5?", discription:'Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.'},
	{id:6, title:"How to create perfect time table6?", discription:'Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.'},
	{id:7, title:"How to create perfect time table7?", discription:'Lorem ipsum dolor sit amet consectetur. Ipsum pellentesque aliquam sed tempus placerat vitae. Aliquet elementum ut ipsum.'},
]
const Blog = () => {
	const[activeTab, setActiveTab]= useState('exam');

  return (
    <div>
        <Header />
        <div className="page-header">
	        <h1>Second Brain Blog</h1>
        </div>

		<div className="container">
			<Nav className="blogCat" id="myTab" role="tablist">
				<NavItem>
					<NavLink
						className={activeTab === 'exam' ? 'bcitem active' : 'bcitem'}
						onClick={() => setActiveTab('exam')}
						data-toggle="pill"
					>
						Exam
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={activeTab === 'motivation' ? 'bcitem active' : 'bcitem'}
						onClick={() => setActiveTab('motivation')}
					>
						Motivation
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={activeTab === 'result' ? 'bcitem active' : 'bcitem'}
						onClick={() => setActiveTab('result')}
						data-toggle="pill"
					>
						Result
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={activeTab === 'career' ? 'bcitem active' : 'bcitem'}
						onClick={() => setActiveTab('career')}
						data-toggle="pill"
					>
						Career
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={activeTab === 'civil' ? 'bcitem active' : 'bcitem'}
						onClick={() => setActiveTab('civil')}
						data-toggle="pill"
					>
						GATE & ESE -Civil
					</NavLink>
				</NavItem>
			</Nav>

			<h5 className="text-center mb-4">Latest Blogs</h5>

			<TabContent activetab={activeTab} id="pills-tabContent">
				<TabPane id="published" className={activeTab === 'exam' ? "show active" : ''}>
					<ul id="blogList">
	        			<BlogCard data={blogData} />
	        		</ul>
				</TabPane>
				<TabPane id="draft" className={activeTab === 'motivation' ? "show active" : ''}>
					<ul id="blogList">
	        			<BlogCard data={blogData} />
	        		</ul>
				</TabPane>
				<TabPane id="requestModeration" className={activeTab === 'result' ? "show active" : ''}>
					<ul id="blogList">
	        			<BlogCard data={blogData} />
	        		</ul>
				</TabPane>
				<TabPane id="requestModeration" className={activeTab === 'career' ? "show active" : ''}>
					<ul id="blogList">
	        			<BlogCard data={blogData} />
	        		</ul>
				</TabPane>
				<TabPane id="requestModeration" className={activeTab === 'civil' ? "show active" : ''}>
					<ul id="blogList">
	        			<BlogCard data={blogData} />
	        		</ul>
				</TabPane>
			</TabContent>
		</div>
    </div>
  )
}

export default Blog