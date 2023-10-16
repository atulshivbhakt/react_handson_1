import './Style.css'


// function Funcbtn(){
//     return(
//         <div>
//             <button>this is function Component</button>
//         </div>
//     )
// }


function Funccompo(){
    return(
        <div>
            <div className="one">
                <h1>This is created using class</h1>
                <h1>Component</h1>
                <p>This is done using external CSS</p>
                <p style={{color: 'blue'}}>This is done using inline CSS</p>
            </div>
        </div>
    )
}
export default Funccompo
