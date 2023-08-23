
import { Box, styled, Typography, Link } from '@mui/material';
import { LinkedIn,Email } from '@mui/icons-material';
const Banner = styled(Box)`
     background-image: url(http://mrtaba.ir/image/bg2.jpg);
     width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contacts = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Reach out to us on
                    <Link href="https://www.linkedin.com/in/anamika-singh-119a2a233/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link>
                    or send an Email 
                    <Link href="mailto:anamikasinghof1026@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contacts;