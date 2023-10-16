import React, { Component } from 'react';
import './Style.css'

// class Classbtn extends Component{
//     render(){
//         return(
//             <div>
//                 <button>This is class Component</button>
//             </div>
//         )
//     }
// }


class Classcompo extends Component{
    render(){
        return(
            <div>
                <div className='two'>
                    <h1>This is created using class</h1>
                    <h1>Component</h1>
                    <p>This is done using external CSS</p>
                    <p style={{color: 'blue'}}>This is done using inline CSS</p>
                </div>
            </div>
        )
    }
}
export default Classcompo