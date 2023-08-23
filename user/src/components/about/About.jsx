import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email,LinkedIn } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3"> Welcome to Postulate Blogging!</Typography>
                <Text variant="h5">Hey there! We're Web watchers, the creative minds behind this website.<br />
                We're not just here to talk; we're here to listen. We encourage you to be an active participant in our community.<br/>
                View the project source code
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something or simply want to have chat? Reach out to us on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/anamika-singh-119a2a233/" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>  
                        or send an Email 
                        <Link href="mailto:anamikasinghof1026@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;