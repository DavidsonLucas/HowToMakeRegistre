import styled from "styled-components"
import { BsFillEnvelopeAtFill, BsFillLockFill,BsFillXSquareFill,BsFillPersonFill } from 'react-icons/bs'

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
    position: relative;
    max-width: 90%;
    width: 400px;
    height: 440px;
    background: transparent;
    border: 2px solid rgba(255, 255 ,255, .5);
    border-radius: 20px;
    backdrop-filter: blur(20px);
    box-shadow: 0  0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center ;
    overflow: hidden;
    transform: scale(0);
    transition: transform .5s ease , height .2s ease;

  
`

export const Fechar = styled(BsFillXSquareFill)`
        position: absolute;
        top: 0px;
        right: 0px;
        width: 45px;
        height: 45px;
        font-size: 2em;
        background-color: #162938;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-bottom-left-radius: 20px;
        z-index: 1;

        &:hover{
            background-color:white;
        }
        
        &:active{
            opacity: .2;
        }
`

export const From_box1 = styled.div`
    width: 100%;
    padding:40px;
    /* display: none; */

    h2{
        font-size: 2em;
        color: #162938;
        text-align: center;
    }
`

export const From_box2 = styled.div`
    width: 100%;
    padding:40px;
    position: absolute;
    transform: translateX(400px);

    h2{
        font-size: 2em;
        color: #162938;
        text-align: center;
    }
`

export const Input_box =styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0;

    label{
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        font-size: 1em;
        color: #162938;
        font-weight: 500;
        pointer-events: none;
        transition: .5s ;
    }

    input:focus~label,
    input:valid~label{
        top: -5px;
    }

    input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        color: #162938;
        font-weight: 600;
        padding: 0 35px 0 5px;

    }
`
export const Ic_Email= styled(BsFillEnvelopeAtFill)`
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #162938;
    bottom: 13px;

`

export const Ic_Password= styled(BsFillLockFill)`
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #162938;
    bottom: 13px;

`
export const Ic_User = styled(BsFillPersonFill)`
      position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #162938;
    bottom: 13px;
`

export const Remember = styled.div`
    font-size: .9em;
    color: #162938;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
    
    a{
        color: #162938;

        &:hover{
            text-decoration: underline;
        }
    }

    label input{
        accent-color: #162938;
        margin-right: 3px;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
    transition: .5s;

    &:hover{
        background-color: #234058;
    }

    &:active{
        opacity: .5;
    }

`
export const Register = styled.div`
    font-size: .9rem;
    color: #182938;
    font-weight: 500;
    margin:  25px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
        padding-right: 5px;
    }
    
    a{
        color: #182938;
        font-weight: 600;

        &:hover{
            text-decoration: underline;
        }
    }
`