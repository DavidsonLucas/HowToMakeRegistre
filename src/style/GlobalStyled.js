import { createGlobalStyle } from "styled-components";
import Backgrung from '../assets/background.jpg'

const Global = createGlobalStyle`
        *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        body{
            font-family: 'Poppins', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 110vh;
            height: 100%;
            background: url(${Backgrung}) no-repeat;
            background-position: center;
            background-size:cover;
          
          
        }

        a{
            text-decoration:none ;
            outline: none;
        }
`

export default Global