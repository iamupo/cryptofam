import './App.css';
import Form from './pages/Form.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-500 h-screen relative to-purple-800 via-indigo-700">
      <Header />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
