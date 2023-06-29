import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Box, Button, Tabs, Tab } from '@mui/material';
import { authActions } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(90deg, rgba(9,113,121,1) 3%, rgba(205,110,231,1) 100%)' }}>
      <Toolbar>
        <Typography variant="h4">BlogoSphere</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft="auto">
            <Tabs textColor="inherit" value={value} onChange={handleChange}>
              <Tab component={Link} to="/blogs" label="All Blogs" />
              <Tab component={Link} to="/myBlogs" label="My Blogs" />
              <Tab component={Link} to="/blogs/add" label="Add Blog" />
              <Tab component={Link} to="/blogs/delete" label="Delete Blog" />
              <Tab component={Link} to="/blogs/update" label="Update Blog" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn ? (
            <>
              <Button component={Link} to="/login" sx={{ margin: 1, fontWeight: 'bold', color: 'white', borderRadius: 10 }}>
                Login
              </Button>
              <Button component={Link} to="/signup" sx={{ margin: 1, fontWeight: 'bold', color: 'white', borderRadius: 10 }}>
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              onClick={() => dispatch(authActions.logout())}
              component={Link}
              to="/login"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
