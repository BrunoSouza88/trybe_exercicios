import React from "react";
import { Route, Switch } from "react-router-dom";
import LiveLectures from "../pages/LiveLectures";
import Calendar from "../pages/Calendar";
import TrybeTalks from "../pages/TrybeTalks";
import NotFound from "../pages/NotFound"
import Solutions from "../pages/Solutions";
import Solution from "../pages/Solution";

class Content extends React.Component {

  state = {
    solutions: [
      {
        url: 'hello-word',
        title: '11.1 - Hello World no React',
      },
      {
        url:'componentes-do-react',
        title: '11.2 - Componentes no React'
      },
      {
        url: 'componenetes-com-estado-e-evevento',
        title: '12.1 - Componentes com estado e evento'
      },
    ],
  }
  render() {

    const { solutions } = this.state;

    return (
      <main className="Content">
        <Switch>
          <Route exact path={'/'} component={LiveLectures} />
          <Route exact path={'/calendar'} component={Calendar} />
          <Route exact path={'/live-lectures'} component={LiveLectures} />
          <Route exact path={'/trybe-talks'} component={TrybeTalks} />
          <Route exact path={'/solutions'} render={(props) => <Solutions {...props} arrayOfSolutions={solutions} />} />
          <Route exact path={'/solution/:anyUrl'} component={ Solution } />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Content;
