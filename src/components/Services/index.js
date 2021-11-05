import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Masonry from 'react-masonry-css';
import { getposts} from '../../store/actions';
import NewsLetter from '../utills/newsletter'
const Clients = () => {


    const homeposts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getposts({}, 1, "desc", 5))
    })

    return (
        <>
            <h1>Our Services</h1>
            <Masonry
                breakpointCols={{ default: 5, 800: 3, 400: 2 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    { homeposts.posts ?
                     homeposts.posts.map((item)=>(
                <Card key={item.id}>
                    <CardContent>
                        <Typography >
                        <img
                                style={{ width: '100%', height: '200px',borderRadius: '10%'}}
                                src={item.image}
                                alt="img"
                            />
                            <div className="excerpt">{item.excerpt}</div>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="dark">Learn More</Button>
                    </CardActions>
                </Card>
                    ))
                    :null
                    }
            </Masonry>
            <NewsLetter/>
        </>
    )
}

export default Clients

