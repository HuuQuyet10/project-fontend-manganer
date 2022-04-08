import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import logo101 from './img/logo101.png';
// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src={logo101} sx={{ width: 100, height: 100, ...sx }} />;
}
