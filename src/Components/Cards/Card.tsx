import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// importing image
import DadaWriting from "../../Assets/DadaWriting.jpeg";

export default function ActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={DadaWriting}
                    alt="green iguana"
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
