import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display:  flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;

    h2{
        font-size: 2rem;
        color: #fff;
        user-select: none;
    }

    nav{
        a{
            position: relative;
            font-size: 1.1rem;
            color: #fff;
            font-weight: 500;
            margin-left: 40px;

            &::after{
                content: '';
                position: absolute;
                left: 0;
                bottom: -6px;
                width: 100%;
                height: 3px;
                background: #fff;
                border-radius: 5px;
                transform-origin: right;
                transform: scalex(0);
                transition: transform .5s;
            }

            &:hover::after{
                transform-origin: left;
                transform: scalex(1);

            }

            @media (max-width: 750px){
               display :none ;
            }


        }
        button{
            width: 130px;
            height: 50px;
            background-color: transparent;
            border: 2px solid #fff;
            outline: none;
            border-radius: 6px;
            margin-left: 40px;
            cursor: pointer;
            font-size: 1.1rem;
            color: #fff;
            font-weight: 500;
            transition: .5s;

            &:hover{
                background: #fff;
                color: #162938;

            }

        }

    }
`