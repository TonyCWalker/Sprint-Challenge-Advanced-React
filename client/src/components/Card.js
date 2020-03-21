import React from 'react'
import styled from 'styled-components'
const Styled = styled.div`

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