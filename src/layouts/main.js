import React from 'react';
import Header from '../components/header'
export default ({ children }) => (
  <div>
    <Header />
    { children }
  </div>
)