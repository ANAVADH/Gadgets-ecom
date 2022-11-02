import Banner from './component/Banner/Banner';
import './App.css';
import Head from './component/Head';
import BestDeals from './component/BestDeals/BestDeals';
import Classified from './component/classifiedProducts/Classified';
import Recommend from './component/Recommended/Recommend';



function App() {
  
  return (
    <div className="App">
      <Head/>
      <Banner/>
      <BestDeals/>
      <Classified/>
      <Recommend/>
      
      
      
    </div>
  );
}

export default App;
