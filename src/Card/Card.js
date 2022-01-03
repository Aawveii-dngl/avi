// import React, { Component } from 'react'
// import '../Card/Card.css'

// export default class Card extends Component {
//     render() {
//         const {id,name,email} = this.props;
//         return (
//             <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
//                 <img src= {`https://robohash.org/${this.props.id}?200x200`} alt='Monster'/>
//                 <div>
//                 <h2>{this.props.name}</h2>
//                 <p>{email}</p>
                
//                 </div>
//             </div>
//         )
//     }
// }
//This keyword used in class and it indicates class and destructuring made it easy

import React from 'react'

export default function Card({id,email,name}) {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src= {`https:robohash.org/${id}?200x200`} alt='Monster'/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            
            </div>
        </div>
    )
}

