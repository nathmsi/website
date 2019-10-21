import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <>
  <div className="mt-3 mb-5">
   <h1 className='text-center'>home</h1>
  </div>
</>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
