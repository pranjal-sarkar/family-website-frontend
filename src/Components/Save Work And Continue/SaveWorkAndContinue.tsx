import React from 'react';

// importing Chakra UI Components
import { Stack, Button } from '@chakra-ui/react';

// for APIs
import axios from 'axios';
import process from 'process';

const SaveWorkAndContinue = (props) => {

    console.log("props.messageText in SaveWorkAndContinue: " + props.props);
    // console.log(props);

    const postStory = async () => {
        try {
            // fetch token from local storage
            const token = localStorage.getItem('key');

            console.log("messageText in postStory: " + props.props);

            const url = process.env.REACT_APP_SAVE_WORK_AND_CONTINUE;

            const response = await axios.patch(url, {
                story: props.props
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
            <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='teal' variant='outline' onClick={postStory}>
                    Save and Continue
                </Button>
            </Stack>
        </>
    )
}

export default SaveWorkAndContinue;