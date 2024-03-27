
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Login() {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
const section = gsap.utils.toArray('.page')
console.log(section);
gsap.to(section,{
        xPercent:-100*(section.length-1),
        ease:'none',
        scrollTrigger:{
            trigger:'.pages',
            pin:true,
            scrub:1,
            end:'+=3000'
        }
})
}); 





  return (
    <>
<div className="h100"></div>
<div className="wrapper">
<div className="pages">
    <div className="page">gwaga</div>
    <div className="page">bbbbb</div>
    <div className="page">cccc</div>
    <div className="page">dddd</div>
    <div className="page">dddd</div>
    <div className="page">dddd</div>
    <div className="page">dddd</div>
</div>
</div>
<div className="h100"></div>









    </>
  )
}

export default Login
