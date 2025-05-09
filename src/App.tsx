import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Headers from './components/headers';
import { Fragment } from 'react';
import SectionHead from './page/sectionHead';

function App() {
  return (
    <Fragment>
      <Router>
        <Headers />
        <Routes>
          <Route path="/" element={<SectionHead />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
