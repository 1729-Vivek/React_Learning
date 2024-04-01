// function Image()
// {
//     return <img src="https://as1.ftcdn.net/v2/jpg/05/59/27/48/1000_F_559274893_O9iSRQwTKIkAooNTglilMgx2yMcXK9Or.jpg"/>

// }

// function DogCard(){
//     return( 
//     <div> 
//         <h3>Dog</h3>
//        <Image/>
       
//     </div>
//     )
// }

// export default DogCard;


// export function Image()
// {
//     return <img src="https://as1.ftcdn.net/v2/jpg/05/59/27/48/1000_F_559274893_O9iSRQwTKIkAooNTglilMgx2yMcXK9Or.jpg"/>

// }

// export function DogCard(){
//     return( 
//     <div> 
//         <h3>Dog</h3>
//        <Image/>
       
//     </div>
//     )
// }

import Image  from "./Image"

//  function DogCard(){
//     return( 
//     <div> 
//         <h3>Dog</h3>
//        <Image/>
       
//     </div>
//     )
// }

//  what if we don't want to  return as wrapping div
function DogCard(){
    return(
        <>
        <h3>Dog</h3>
        <Image/>
        </>
        // by doing <> .... </> we do not need to wrap in div  tag -->This is also know as fragment
    )
}

export default DogCard