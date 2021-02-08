import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import BlogPostCreate from "./screens/BlogPostCreate/BlogPostCreate";
import BlogPostDetail from "./screens/BlogPostDetail/BlogPostDetail";
import BlogPostEdit from "./screens/BlogPostEdit/BlogPostEdit";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blogs/add" component={BlogPostCreate} />
        <Route path="/blogs/:id/edit" component={BlogPostEdit} />
        <Route exact path="/blogs/:id" component={BlogPostDetail} />
      </Switch>
    </div>
  );
}

export default App;
