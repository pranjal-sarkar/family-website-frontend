import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// importing image
import DadaWriting from "../../Assets/DadaWriting.jpeg";

// importing hooks
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/anthology");
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={DadaWriting}
                    alt="green iguana"
                    onClick={handleClick}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Family Anthology
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Let's Write Our Story Together!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
