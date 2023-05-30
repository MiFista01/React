
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Header />
      <main className='col-8'><Content /></main>
      <Footer />
    </>
  );
}

export default App;
