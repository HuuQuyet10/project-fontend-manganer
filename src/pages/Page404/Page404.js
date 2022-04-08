// import { motion } from 'framer-motion';
// import { Link as RouterLink } from 'react-router-dom';
// // material
// import { styled } from '@mui/material/styles';
// import { Box, Button, Typography, Container } from '@mui/material';
// // components
// import { MotionContainer, varBounceIn } from '../../components/animate';
// import Page from '../../../components/Page';

// // ----------------------------------------------------------------------

// const RootStyle = styled(Page)(({ theme }) => ({
//   display: 'flex',
//   minHeight: '100%',
//   alignItems: 'center',
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(10)
// }));

// // ----------------------------------------------------------------------

// export default function Page404() {
//   return (
//     <RootStyle title="404 Page Not Found | Minimal-UI">
//       <Container>
//         <MotionContainer initial="initial" open>
//           <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
//             <div className="clearfix">
//               <div className="row">
//                 {/* {this.state.data.map((data) => ( */}
//                 <div className="col-md-4 animated fadeIn">
//                   <div className="card">
//                     <div className="card-body">
//                       <div className="avatar">
//                         <img src="" className="card-img-top" alt="" />
//                       </div>
//                       <h5 className="card-title">
//                         {/* {this.uppercase(data.name.first) + ' ' + this.uppercase(data.name.last)} */}
//                       </h5>
//                       <p className="card-text">
//                         {/* {data.location.city + ', ' + this.uppercase(data.location.state)} */}
//                         <br />
//                         <span className="phone"> 070663512 </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 ))
//               </div>
//               <button className="btn btn-light btn-block w-50 mx-auto" onClick="">
//                 Load More Users
//               </button>
//             </div>
//             <Button to="/" size="large" variant="contained" component={RouterLink}>
//               Go to Home
//             </Button>
//           </Box>
//         </MotionContainer>
//       </Container>
//     </RootStyle>
//   );
// }

import React from 'react';

const Page404 = () => {
  return (
    <div>
      page 404
    </div>
  );
}

export default Page404;
