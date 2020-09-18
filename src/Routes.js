import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import CreateSurvey from './components/createsurvey/CreateSurvey';
import TakeSurvey from './components/takesurvey/TakeSurvey';
import PublishQstns from './components/publishQstns/PublishQstns';
import ResultPage from './components/resultpage/ResultPage';


const Routes = () => {
  return (
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create-survey' exact component={CreateSurvey} />
          <Route path='/take-survey' exact component={TakeSurvey} />
          <Route path='/publish' exact component={PublishQstns} />
          <Route path='/result' exact component={ResultPage}/>
      </Switch>
  )
}

export default Routes;