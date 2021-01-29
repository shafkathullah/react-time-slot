import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SlotList from "./pages/SlotList";
import DetailsForm from "./pages/DetailsForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SlotList />
        </Route>
        <Route exact path="/details">
          <DetailsForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
