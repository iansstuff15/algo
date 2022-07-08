import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import ButtonComponent from '../components/button'
import InputComponent from '../components/input'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import {RiArrowRightSFill} from 'react-icons/ri'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MdEmail,MdPassword} from 'react-icons/md'
import { motion } from 'framer-motion'
import LoginWithProvider from '../components/loginWithProvider'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import Container from '../components/container'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {


  const [pivot,setPivot] = useState()
  const [collection,setCollection] = useState([9,6,3,7,2,12,5,1])
  const expectedResult = [9,6,3,7,2,12,5,1].sort(function (a,b) {
    return a - b; // Ascending
})
  const data = collection.map((value,index)=>({index,value}))
  const [pivotHistory,setPivotHistory] = useState([])
  const [leftPartition,setLeftPartition] = useState([])
  const [rightPartition,setRightPartition] = useState([])
 
  const createPivot=(array=[])=>{ 
    let index = (Math.floor((Math.random() * array.length) + 1))-1
    
    setPivot(array[index])
    setPivotHistory((pivotHistory) => [pivot,...pivotHistory] );
  }
  const divide = (array=[]) => {
    createPivot(array)
    let right = []
    let left = []
    array.forEach((value,index)=>{
    
      if(pivot>=value){
        right.push(value)
       
      }
      else{
        left.push(value)
        
      }
      console.log(left)
      console.log(right)
     
    })
   console.log('right')
    setRightPartition(right)
   console.log('left')
    setLeftPartition(left)
    console.log(leftPartition)
    console.log(rightPartition)
    if(left.length == 2 ){
      left.sort(function(a, b){return a - b})
     
      console.log(left)
      // setCollection(leftPartition.concat(rightPartition))
    }
    else{
      divide(leftPartition)
    }
    if( right.length ==2){
      right.sort(function(a, b){return a - b})
      console.log(right)
    }
    else{
      
      divide(rightPartition)
    }
  }


  return (
    <Layout>
      <div className={styles.grid}>
      
      <div>
      
     <Container>
     <BarChart
          width={900}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
           <Bar dataKey="value" fill="#8884d8" />
           <Cell key={`cell-${pivot}`} fill={'#fcba03'} />
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />

        
        </BarChart>
    
     </Container>
       
      </div>
      <div>
      <Container>
       <h3>Initial collection</h3>
       <div className={styles.blue_container}>
        <p>
        [ {collection.map((value,index)=>(
            <strong key={index}>{value}, </strong>
          ))}
       ]
        </p>
       <br/>
      
       </div>
       <br/>
       <h3>Expected final collection</h3>
       <div className={styles.blue_container}>
        <p>
        [ {expectedResult.map((value,index)=>(
            <strong key={index}>{value}, </strong>
          ))}
       ]
        </p>
       <br/>
      
       </div>
       <br/>
       <ButtonComponent onClick={()=>{
        divide(collection)
        }}>
            <strong>Sort</strong>
        </ButtonComponent>
        <br/>
        <br/>
        <h4>Pivot</h4>
        <div className={styles.blue_container}>
      
       <p><strong>Current</strong><br/> {pivot}</p>
       {/* <br/>
       <h4>History</h4>
       <p>[{pivotHistory.map((value,index)=>(
            <strong key={index}>{value}, </strong>
          ))}]</p> */}
        </div>
        <br/>
        <h4>Phases</h4>
        <div className={styles.blue_container}>
          <h4>Phase 1</h4>
          <p>
        [ {leftPartition.map((value,index)=>(
            <strong key={index}>{value}, </strong>
          ))}
       ]
        </p>
        <p>
        [ {rightPartition.map((value,index)=>(
            <strong key={index}>{value}, </strong>
          ))}
       ]
        </p>
          
       </div>
       
     </Container>
      </div>
      </div>
    
    </Layout>
  )
}
