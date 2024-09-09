import styled from "styled-components";

export const StyledMenu = styled.nav`
    display: flex;
    align-items: flex-end;
    border-top: 1px solid lightgray;

    & ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    & li{
        display: flex;
        align-items: center;
        flex-direction: column;
 
        & a{
            color: #032cfc;
            text-decoration: none;
        }

    }


`