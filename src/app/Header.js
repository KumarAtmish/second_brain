import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header id="siteheader">
	    <div className="container">
	    	<nav className="navbar navbar-expand-lg">
	    	  <div className="container-fluid">
	    		<a className="navbar-brand" href="/">
                    {/* <img 
                        src="/logo.svg" 
                        alt="2nd Brain"
                        width={0}
                        height={0}
                    /> */}
                    <img 
                        src="/logo.svg" 
                        alt="2nd Brain"
                    />
                </a>
	    		<a className="btn btn-primary-grd" href="#dwdApp">Download App</a>
	    	  </div>
	    	</nav>
	    </div>
    </header>
  )
}

export default Header