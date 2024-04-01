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
// function DogCard(){
//     return(
//         <>
//         <h3>Dog</h3>
//         <Image src="https://as1.ftcdn.net/v2/jpg/05/59/27/48/1000_F_559274893_O9iSRQwTKIkAooNTglilMgx2yMcXK9Or.jpg"/>
//         <Image src="https://t3.ftcdn.net/jpg/06/10/71/64/240_F_610716498_li6BIgt75TXw8B4W89pbf3VtKgHNQkXo.jpg"/>
//         </>
//         // by doing <> .... </> we do not need to wrap in div  tag -->This is also know as fragment
//     )
// }



//Implementing Props
// function DogCard(props){
//     return(
//         <>
//         <h3>{props.name}</h3>
//         <Image src={props.image}/>
//         {/* <Image src="https://t3.ftcdn.net/jpg/06/10/71/64/240_F_610716498_li6BIgt75TXw8B4W89pbf3VtKgHNQkXo.jpg"/> */}
//         </>
//         // by doing <> .... </> we do not need to wrap in div  tag -->This is also know as fragment
//     )
// }


//defining in such a way that in Name  Component we can access full JSX 
import Name from './Name';
function DogCard(props){
    let title="this is a dog card"
    return(
        <>
        {/* we can print like this but it should be valid javascript expression */}
        <h2 style={{fontSize:'10px',color:'red'}}>
            {title}
        </h2>
        <Name>
            <h3>{props.name}</h3>
        </Name>
        <Image src={props.image}/>
       </>
    )
}
export default DogCard