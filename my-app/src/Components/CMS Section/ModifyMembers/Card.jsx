import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ name, img, role, desc, func }) {
    return (
        <Card sx={{ height: "450px", width: "23%", border: "2px solid black" }}>
            <CardMedia
                sx={{ height: "200px" }}
                image={img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name} <br />{role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={func} sx={{ color: "red" }} size="small">Delete</Button>
            </CardActions>
        </Card>
    );
}