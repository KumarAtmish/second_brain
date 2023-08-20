import React from 'react'

const Stage2 = (props) => {
    const {text, stageImg} = props;

  return (
    <div className="container">
		<div className="row">
            <div className="col-lg-5 order-sm-first order-last d-flex justify-content-center">
				<img src={stageImg} alt="" />
			</div>
            <div className="col-lg-7 align-self-center ps-lg-5 step-text">
				<p>{text}</p>
			</div>		
		</div>
	</div>
  )
}

export default Stage2