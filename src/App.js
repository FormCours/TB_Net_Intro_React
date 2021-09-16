import './App.css';
import LikeButton from './components/like-button/like-button';
import Welcome from './components/welcome/welcome';
import Header from './containers/header/header';
import TodoApp from './containers/todo-app/todo-app';

function App() {
  return (
    <div>
      <Header />
      <Welcome name="la demo" />
      <LikeButton />

      <TodoApp />
      
    </div>
  );
}

export default App;
