import React from 'react'
import Card from 'react-bootstrap/Card';
import styled from 'styled-components'

import { BiFoodMenu } from 'react-icons/bi/'

const CardComponent = (props) => {
const Text=styled.h3`
 font-size:19px;
 margin-top: 15px;
 font-weight:lighter;
`
const Icon =styled(BiFoodMenu)`
font-size: 70px;
margin-top: 30px;
margin-bottom: 15px;
`

const Header=styled(Card.Title)`
text-align: center;
font-size: 26px;
font-weight: bold;
`

 const MyCard=styled(Card)`
 width:20rem;
 height:18rem;
 transition: all 0.3s ease-in;
 columns:black;
 margin-top: 30px;
 border-radius: 10%;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
 &:hover
 {
    cursor: pointer;
    transform: scale(1.1, 1.1);
   background-color: orange;
    color: white;
 }
 `
  return (
    <MyCard >
    <Card.Body>
          <Icon/>
      <Header>{props.title}</Header>
      <Text>{props.desc}</Text>
    </Card.Body>
  </MyCard>

  )
}

export default CardComponent