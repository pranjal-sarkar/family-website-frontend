import React from 'react';

// importing hooks
import { useState, useEffect } from 'react';

// importing stylesheet
import "./Anthology.css";

// importing Components
import ResponsiveAppBar from '../../Components/Navbar/Navbar.tsx';
import Footer from '../../Components/Footer/Footer.tsx';
import TransitionExample from '../../Components/See Others Story/TransitionExample.tsx';
import SaveWorkAndContinue from '../../Components/Save Work And Continue/SaveWorkAndContinue.tsx';
import SaveWorkAndExit from '../../Components/Save Work And Exit/SaveWorkAndExit.tsx';

// for APIs
import axios from 'axios';
import process from 'process';

const Anthology = () => {
    const [messageText, setMessageText] = useState("");

    useEffect(() => {
        // fetch token from local storage
        const token = localStorage.getItem('key');

        const url = process.env.REACT_APP_HOSTED_BACKEND_DOMAIN + '/api/v1.0.0/anthology/secured/story';

        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((results) => {
            changeState(results.data.data.story);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    function changeState(myInput) {
        setMessageText(myInput);
    }

    const handleChangeTextArea = (e) => {
        setMessageText(e.target.value);
    }

    return (
        <>
            <ResponsiveAppBar />

            <div className="page-heading">
                <h1>Let's See You Write Your Story </h1>
            </div>

            <div className="story">
                <div className="story-input-area">
                    <textarea value={messageText} onChange={handleChangeTextArea} />
                </div>
                <div className="others-story-and-save-button">
                    <div className="others-story">
                        <TransitionExample />
                    </div>
                    <div className="save-and-exit">
                        <SaveWorkAndExit props={messageText} />
                    </div>
                    <div className="save-button">
                        <SaveWorkAndContinue props={messageText} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Anthology