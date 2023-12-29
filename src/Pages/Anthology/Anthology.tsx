import React from 'react';

// importing stylesheet
import "./Anthology.css";

// importing Components
import ResponsiveAppBar from '../../Components/Navbar/Navbar.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

const Anthology = () => {
    return (
        <>
            <ResponsiveAppBar />

            <div className="page-heading">
                <h1>Let's See You Write Your Story </h1>
            </div>

            <div className="story">
                <div className="story-input-area">
                    <textarea placeholder='Type here :)' />
                </div>
                <div className="others-story-and-save-button">
                    <div className="others-story">
                        See others' story
                    </div>
                    <div className="save-button">
                        <button>SAVE WORK</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Anthology