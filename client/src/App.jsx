import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Blogs from "./screens/Blogs/Blogs";
import BlogPostCreate from "./screens/BlogPostCreate/BlogPostCreate";
import BlogPostEdit from "./screens/BlogPostEdit/BlogPostEdit";
import BlogPostDetail from "./screens/BlogPostDetail/BlogPostDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route path="/add" component={BlogPostCreate} />
        <Route exact path="/blogPosts/:id/edit" component={BlogPostEdit} />
        <Route exact path="/BlogPosts/:id" component={BlogPostDetail} />
      </Switch>
    </div>
  );
}

export default App;
