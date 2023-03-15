import React from 'react'
import * as c from './styled'

const Wrapper = () => {
    const wrraper = document.querySelector('.wrraper')

const marcarclick = ()=> {
    const wrraper = document.querySelector('.wrraper')
   document.querySelector('.wrraper').classList.add('active');
   wrraper.style.height="520px"

   const from1 = document.querySelector('.from-box1')
   from1.style.transition="none"
   from1.style.transform="translateX(-400px)"

   const from2 = document.querySelector('.from-box2')
   from2.style.transform="translateX(0px)"
}

const desmarcarClick = ()=> {
    const wrraper1 = document.querySelector('.wrraper')
   document.querySelector('.wrraper').classList.remove('active')
   wrraper1.style.height="440px"

   const from1 = document.querySelector('.from-box1')
   from1.style.transition="transfrom .18s ease"
   from1.style.transform="translateX(0px)"

   const from2 = document.querySelector('.from-box2')
   from2.style.transform="translateX(400px)"
   from1.style.transition="transfrom .18s ease"
}
    const onDelet = ()=> {
   const wrraper1 = document.querySelector('.wrraper')
   wrraper1.classList.remove('active')
   wrraper1.style.transform = "scale(0)";



}

    return (
        <c.Center> {/*seve apenas para centarlizar o quadrado*/}
        <c.Wrapper className='wrraper'>
    <button onClick={onDelet}><c.Fechar /></button>
            <c.From_box1 className='from-box1'>
                <h2>Login</h2>
                <form action='#'>
                     <c.Input_box>
                        <c.Ic_Email />
                        <input type="email" required />
                        <label>Email</label>
                    </c.Input_box>
                    <c.Input_box>
                        <c.Ic_Password/>
                        <input type="password" required/>
                        <label>Password</label>
                    </c.Input_box>
                    <c.Remember>
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </c.Remember>
                    <c.Button type='submit'>Login</c.Button>
                    <c.Register>
                        <p>Don't have an account?
                          
                        </p>
                        <a href="#" className='link-login' onClick={marcarclick}>Register </a>
                    </c.Register>
                </form>
            </c.From_box1>

        <button onClick={onDelet}><c.Fechar /></button> 
            <c.From_box2 className='from-box2'>
                <h2>Registration</h2>
                <form action='#'>
                <c.Input_box>
                        <c.Ic_User/>
                        <input type="text" required />
                        <label>USername</label>
                    </c.Input_box>
                    <c.Input_box>
                        <c.Ic_Email />
                        <input type="email" required />
                        <label>Email</label>
                    </c.Input_box>
                    <c.Input_box>
                        <c.Ic_Password/>
                        <input type="password" required />
                        <label>Password</label>
                    </c.Input_box>
                    <c.Remember>
                        <label><input type="checkbox" /> I agree to the terms & conditions</label>
                        
                    </c.Remember>
                    <c.Button type='submit'>Register</c.Button>
                    <c.Register>
                        <p>Already have an account?
                          
                        </p>
                        <a href="#" className='link-regitre' onClick={desmarcarClick} >Login </a>
                    </c.Register>
                </form>
            </c.From_box2>
        </c.Wrapper>
        </c.Center>
    )

}

export default Wrapper
