//  function Image()
// {
//     return <img src="https://as1.ftcdn.net/v2/jpg/05/59/27/48/1000_F_559274893_O9iSRQwTKIkAooNTglilMgx2yMcXK9Or.jpg"/>

// }

//Using Props
// function Image(props)
// {
//     return(
//         <div className="image-box">
//             <img src={props.src}/>
//         </div>
//     )
// }


//Here onwards learning how to do destructuring
//we can also pass  the default values
function Image({src=10})
{
    return(
        <div className="image-box">
            <img src={src}/>
        </div>
    )
}


export default Image;