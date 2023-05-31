import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

ReactDom.render(<App />, document.getElementById('root'));
/* UPDATE: ReactDom.render is no longer supported in React 18 and is
  now replaced by createRoot */