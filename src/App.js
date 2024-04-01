
// import DogCard from './DogCard';
// import './App.css';

// function App() {
//   return (
//    <div>
//     hello 
//     <DogCard/>
//     <DogCard/>
//     <DogCard/>
//    </div>
//   );
// }

// export default App;


//we can do that by two ways

// import {Image,DogCard} from './DogCard';
// import './App.css';

// function App() {
//   return (
//    <div>
//     hello 
//     <DogCard/>
//     <DogCard/>
//     <DogCard/>
//    </div>
//   );
// }

// export default App;

import DogCard,{Image} from './DogCard';
import './App.css';

function App() {
  return (
   <div>
    hello 
    <DogCard name="Bruno" image="https://as1.ftcdn.net/v2/jpg/05/59/27/48/1000_F_559274893_O9iSRQwTKIkAooNTglilMgx2yMcXK9Or.jpg"/>
    <DogCard name="tiger" image="https://t3.ftcdn.net/jpg/06/10/71/64/240_F_610716498_li6BIgt75TXw8B4W89pbf3VtKgHNQkXo.jpg"/>
   
   </div>
  );
}

export default App;