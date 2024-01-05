import React from 'react';

// importing hooks
import { useState, useEffect } from 'react';

// importing stylesheet
import "./Anthology.css";

// importing Components
import ResponsiveAppBar from '../../Components/Navbar/Navbar.tsx';
import Footer from '../../Components/Footer/Footer.tsx';

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

    const postStory = async () => {
        try {
            // fetch token from local storage
            const token = localStorage.getItem('key');

            console.log("messageText in postStory: " + messageText);

            const url = process.env.REACT_APP_HOSTED_BACKEND_DOMAIN + '/api/v1.0.0/anthology/secured/story';

            const response = await axios.patch(url, {
                story: messageText
            }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            console.log(response);

            alert(response.data.data);

            console.log("Posting after Save button was clicked!");
        } catch (error) {
            console.log("There was some error saving your story. Error: \n");
            alert("There was some error saving your story. Error: \n");
            console.log(error);
        }
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
                        See others' story
                    </div>
                    <div className="save-button">
                        <button onClick={postStory}>SAVE WORK</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Anthology