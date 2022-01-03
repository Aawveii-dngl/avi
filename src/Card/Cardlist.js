import React from 'react';
import Card from './Card';
// import {Robots} from '../Robots/Robots';

export default function Cardlist({Robots}) {
    // const Cardcomp = Robots.map((user,i)=>{
    //     return (
    //         <Card 
    //             key ={i}   
    //             id = {Robots[i].id} 
    //             name = {Robots[i].name} 
    //             email = {Robots[i].email}
    //         />
    //     )
    // }) {Cardcomp}
    return (   
        <div>
            {
                Robots.map((user,i)=>{
                    return (
                        <Card 
                            key ={i}   
                            id = {Robots[i].id} 
                            name = {Robots[i].name} 
                            email = {Robots[i].email}
                        />
                    );
                })
            }
        </div>
    )
}
