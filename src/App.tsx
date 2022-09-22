import Hello from '@/components/Hello';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Index from './components/page2/index';
function App() {
  return (
    <>
      {/* <Router>
        <Route element={<Hello />} path={'/'}></Route>
        <Route element={<Index />} path='/list'></Route>
      </Router> */}
      <Router>
        <div>
          <Switch>
            <Route path='/list'>
              <Index />
            </Route>
            <Route path='/'>
              <Hello />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
