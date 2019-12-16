import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
    }
    a {
        color:${props => props.theme.blueColor};
        text-decoration: none;
    }
    input:focus{
      outline:none;
    }
`;
