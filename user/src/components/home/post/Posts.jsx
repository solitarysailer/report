import { useState,useEffect } from "react";
import{API} from '../../../service/api';
import {Grid,Box} from '@mui/material';
import {useSearchParams , Link} from 'react-router-dom';

import Post from './Post';



const Posts = () =>{

    const [posts,setPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async() =>{
         let response = await API.getAllPosts({category: category || ''});
         if(response.isSuccess){
            setPosts(response.data);
         }
        }
        fetchData();
    },[category])


    return(
       <>
        {posts && posts.length > 0 ? (
            <Grid container spacing={2}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        ) : (
            <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
                No data is available for the selected category
            </Box>
        )}
        </>
    )
}

export default Posts;