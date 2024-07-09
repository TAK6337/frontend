import React from 'react';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import NaverIcon from '@mui/icons-material/NearMe';

function App() {
    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <TextField
                    label="Enter your ID/Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="Enter your Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ margin: '20px 0' }}
                >
                    Login
                </Button>
                <Box display="flex" justifyContent="space-between" width="100%" mb={2}>
                    <Link href="#" variant="body2">find your ID/Email</Link>
                    <Link href="#" variant="body2">find your password</Link>
                </Box>
                <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    style={{ marginBottom: '10px' }}
                >
                    Continue with Google
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<ChatIcon />}
                    fullWidth
                    style={{ marginBottom: '10px', backgroundColor: '#FEE500' }}
                >
                    Continue with Kakao
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<NaverIcon />}
                    fullWidth
                    style={{ backgroundColor: '#03C75A', color: 'white' }}
                >
                    Continue with Naver
                </Button>
                <Box mt={2}>
                    <Typography variant="body2">New to our community</Typography>
                    <Link href="#" variant="body2" color="secondary">
                        Signup now
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default App;
