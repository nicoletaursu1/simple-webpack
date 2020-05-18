import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    font: 24px/24px Arial, sans-serif;
    color: #8b8b8b;
    text-align: center;
    &::first-letter{
    color: indianred;
    }
`
const Header = () => {
   
    return ( 
        <StyledHeader>
            <p>ToDo List</p>
        </StyledHeader>
    );
}
    
export default Header;
