import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Users></Users>
      <Footer></Footer>
    </div>
  );
}

export default App;
