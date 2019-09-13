import React from 'react';
import ReactDOM from 'react-dom';

class ipDisplay extends React.Component {

  ip = require('ip');
  render() {
    return (   
      <h3>Test{ip.address}</h3>
    );
  }
}

ReactDOM.render(<ipDisplay />, document.getElementById('root'));