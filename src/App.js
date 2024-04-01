
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
    <DogCard/>
    <DogCard/>
    <DogCard/>
   </div>
  );
}

export default App;