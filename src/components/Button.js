import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-family: "Courier New",Courier,monospace;
font-size:1.0rem;
background: transparent;
border: 0.05rem solid var(--mainDark) !important;
border-color:${props => 
    props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
color: ${prop => prop.cart ? "var(--mainYellow)" :  "var(--mainRose)" };
border-radius:0rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${prop => 
        prop.cart? "var(--mainYellow)" :  "var(--mainRose)" };
    color:var(--mainDark);
}
&:focus {
    outline:none;
}
@media only screen and (max-width: 1000px) {
font-size: 12px;
}
`;