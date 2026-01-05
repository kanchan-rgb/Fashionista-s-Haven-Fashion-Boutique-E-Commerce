import React from 'react';
import { Navigate} from 'react-router-dom';
import AddNewAddressFormSelect from './AddNewAddressFormSelect';

const PrivateRouteAddNewUserAddress2 = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <AddNewAddressFormSelect /> : <Navigate to="/login" />;
};

export default PrivateRouteAddNewUserAddress2;
