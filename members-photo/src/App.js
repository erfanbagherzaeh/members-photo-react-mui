import './App.css';
import Header from './components/header/Header'
import Photo from './components/BoxPhoto/Photo'
import LikeShare from './components/LikeShare/LikeShare'
import BoxEnd from './components/BoxEnd/BoxEnd'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      {/* test */}
      <Header/>
      <Photo/>
      <LikeShare/>
      <BoxEnd/>
      <Footer/>
       
    </div>
  );
}

export default App;
