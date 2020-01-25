import React from 'react'
import styled from 'styled-components'
const Styled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 22%;
justify-content: space-around;
text-align: center;
padding: 1% 1%;
background: green;
margin:2% 0;
border-radius: 20px;
border: 4px solid black;
font-weight: bold;
`
const Card = props => {
    return(
        <Styled>
            <p>Name : {props.item.name}</p>
            <p>Country : {props.item.country}</p>
        </Styled>
    )
    
}
export default Card