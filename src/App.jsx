import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import SlotList from "./pages/SlotList";
import DetailsForm from "./pages/DetailsForm";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <SlotList startHour={9} endHour={17} />
          </Route>
          <Route exact path="/details">
            <DetailsForm />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
