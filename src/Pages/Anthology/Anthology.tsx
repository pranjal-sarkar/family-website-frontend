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

const Anthology = () => {
    const [messageText, setMessageText] = useState("ff");
    const [postStoryText, setPostStoryText] = useState('');

    useEffect(() => {
        // fetch token from local storage
        const token = localStorage.getItem('key');
        axios.get("http://localhost:8000/api/v1.0.0/anthology/secured/story", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((results) => {
            console.log(results);
            console.log("results.data.data.story: " + results.data.data.story);

            changeState(results.data.data.story);
            // setMessageText(results.data.data.story);
            // console.log("messageText: " + messageText);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    function changeState(myInput) {
        setMessageText(myInput);
        // console.log("messageText (inside changeState() function): " + messageText);
    }

    const handleChangeTextArea = (e) => {
        setMessageText(e.target.value);

        console.log("messageText in handleChangeTextArea: " + messageText);
        // setPostStoryText(messageText + " " + e.target.value);

        // console.log(e.target.value);
    }

    // useEffect(() => {
    //     console.log("messageText in useEffect hook: " + messageText);
    // }, [messageText])

    const postStory = async () => {
        try {
            // fetch token from local storage
            const token = localStorage.getItem('key');

            console.log("messageText in postStory: " + messageText);

            const response = await axios.patch("http://localhost:8000/api/v1.0.0/anthology/secured/story", {
                story: messageText
            }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })

            console.log("Posting after Save button was clicked!");
            console.log(response);
        } catch (error) {
            console.log("There was some error saving your story. Error: \n");
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