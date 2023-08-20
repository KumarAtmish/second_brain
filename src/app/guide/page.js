import React from 'react'
import Stage1 from './Stage1'
import Stage2 from './Stage2'

const Guide = () => {
  return (
    <div id="bannerGuide">
        <section className="section guide-header">
            <h2>Let’s see how we can use second brain app</h2>
        </section>
        <section className="section guide-video">
            <h2>Watch video tutorial</h2>
            {/* <video width="320" height="240" controls >
                <source src="https://www.youtube.com/embed/P7c9WBAHW6U" type="video/mp4" />
                <source src="https://www.youtube.com/embed/P7c9WBAHW6U" type="video/ogg" />
                Your browser does not support the video tag.
            </video> */}
            <iframe
                
                src={`https://www.youtube.com/embed/P7c9WBAHW6U`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </section>
       <section className="section guide-step">
            <h2>STEP 1</h2>
			<h4>Create subject</h4>
			<Stage1 
                text='Click On Add subject button and Create your subject' 
                stageImg="/Rectangle.svg"
            />
            <Stage2 
                text='After click on add subject button now add subject image and subject name like chemistry and click on create subject' 
                stageImg='/Rectangle.svg'
            />
		</section>

        <section className="section guide-step">
            <h2>STEP 2</h2>
			<h4>Create Chapter</h4>
			<Stage1 
                text='Click on Create chapter button and Create Chapter in your subject ' 
                stageImg="/Rectangle.svg"
            />
            <Stage2 
                text='After click on add Chapter  button now add chapter image and chapter name like mole concept and click on Submit  Chapter' 
                stageImg='/Rectangle.svg'
            />
		</section>

        <section className="section guide-step">
            <h2>STEP 3</h2>
			<h4>Create Topic</h4>
			<Stage1 
                text='Click on Add Topic button and Add Topic in your Chapter' 
                stageImg="/Rectangle.svg"
            />
            <Stage2 
                text='Enter Topic Name, About Topic & rate Your Familiarity & importance  and click on add resource button ' 
                stageImg='/Rectangle.svg'
            />
		</section>

        <section className="section guide-step">
            <h2>STEP 4</h2>
			<h4>Add Resource </h4>
			<Stage1 
                text='Click On add resource button and add your topic related Notes like PDF ,Audio, video, documents' 
                stageImg="/Rectangle.svg"
            />
            <Stage2 
                text='After resource add click on Submit Resource button' 
                stageImg='/Rectangle.svg'
            />
		</section>

        <section className="section guide-step">
            <h2>STEP 5</h2>
			<h4>Add study duration</h4>
			<Stage1 
                text='Add study duration & rate your topic understanding' 
                stageImg="/Rectangle.svg"
            />
            <Stage2 
                text='Turn On revision reminder and click on submit button ' 
                stageImg='/Rectangle.svg'
            />
		</section>

        <section className="section guide-step">
            <h2>STEP 6</h2>
			<h4>Ready for revision</h4>
			<Stage1 
                text='After Submit Topic you will  get recommended  revision on home page' 
                stageImg="/Rectangle.svg"
            />
		</section>
    </div>
  )
}

export default Guide