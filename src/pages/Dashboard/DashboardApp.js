// material
import { Box, Grid, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// import Calendar from 'rc-year-calendar';
// import Calendar from 'react-calendar';
// components
import Page from '../../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales
  // CalendarApp
} from '../../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const userState = useSelector((store) => store.user);
  const { loading, errorMessage, users } = userState;
  // if(!loading){
  //   localStorage.setItem('token--ss', users.data.token);
  // } else {
  //   return;
  // }
  
  return (
    <>
      {loading && <h2>LOADING.....</h2>}
      {!loading && errorMessage && (
        <h3>{errorMessage}</h3>
      )}
      {!loading && (
        <Page title="Dashboard | Minimal-UI">
        <Container maxWidth="xl">
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome {users.data.name}</Typography>
          </Box>
          <Grid container spacing={9}>
            <Grid item xs={12} sm={6} md={4}>
              <AppWeeklySales />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <AppNewUsers />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <AppItemOrders />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <AppTasks />
            </Grid>
  
            <Grid item xs={12} md={6} lg={12}>
              <AppNewsUpdate />
            </Grid>
  
            <Grid item xs={12} md={6} lg={4}>
              {/* <AppOrderTimeline /> */}
            </Grid>
  
            <Grid item xs={12} md={6} lg={4}>
              {/* <AppTrafficBySite /> */}
            </Grid>
          </Grid>
        </Container>
      </Page>
      )}
    </>
  );
}
