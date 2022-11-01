import Banner from './component/Banner/Banner';
import './App.css';
import Head from './component/Head';
import BestDeals from './component/BestDeals/BestDeals';
import Classified from './component/classifiedProducts/Classified';



function App() {
  
  return (
    <div className="App">
      <Head/>
      <Banner/>
      <BestDeals/>
      <Classified/>
      
      
      
    </div>
  );
}

export default App;
