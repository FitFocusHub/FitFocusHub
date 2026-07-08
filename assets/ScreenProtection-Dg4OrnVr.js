import{r as d}from"./vendor-B-6r6a-2.js";function f(){return d.useEffect(()=>{const n=e=>{e.key==="PrintScreen"&&(navigator.clipboard.writeText("").catch(()=>{}),alert("Screenshots are not allowed on this website."))},r=e=>{if(e.key==="PrintScreen")return e.preventDefault(),navigator.clipboard.writeText("").catch(()=>{}),alert("Screenshots are not allowed on this website."),!1;if(e.ctrlKey&&e.key==="PrintScreen")return e.preventDefault(),navigator.clipboard.writeText("").catch(()=>{}),alert("Screenshots are not allowed on this website."),!1;if(e.ctrlKey&&e.key==="p")return e.preventDefault(),alert("Printing is not allowed on this website."),!1;if(e.ctrlKey&&e.shiftKey&&e.key==="S"||e.metaKey&&e.shiftKey&&e.key==="S")return e.preventDefault(),alert("Screenshots are not allowed on this website."),!1;if(e.altKey&&e.key==="PrintScreen")return e.preventDefault(),navigator.clipboard.writeText("").catch(()=>{}),alert("Screenshots are not allowed on this website."),!1;if(e.ctrlKey&&e.key==="u"||e.key==="F12"||e.ctrlKey&&e.shiftKey&&e.key==="I"||e.ctrlKey&&e.shiftKey&&e.key==="J"||e.ctrlKey&&e.shiftKey&&e.key==="C")return e.preventDefault(),!1;e.metaKey&&e.key!=="Meta"&&(e.key==="Shift"||e.key==="s"||e.key)},a=e=>(e.preventDefault(),!1),o=e=>(e.preventDefault(),!1),i=e=>(e.preventDefault(),!1),s=e=>(e.preventDefault(),!1),l=()=>{document.visibilityState==="hidden"&&navigator.clipboard.writeText("").catch(()=>{})},c=setInterval(()=>{navigator.clipboard.writeText("").catch(()=>{})},5e3);document.addEventListener("keyup",n),document.addEventListener("keydown",r),document.addEventListener("contextmenu",a),document.addEventListener("dragstart",o),document.addEventListener("copy",i),document.addEventListener("cut",s),document.addEventListener("visibilitychange",l);const t=document.createElement("style");return t.id="screen-protection",t.textContent=`
      * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
      }
      img, video, canvas {
        -webkit-user-drag: none;
        user-drag: none;
        pointer-events: none;
      }
      @media print {
        body { display: none !important; }
      }
    `,document.head.appendChild(t),()=>{document.removeEventListener("keyup",n),document.removeEventListener("keydown",r),document.removeEventListener("contextmenu",a),document.removeEventListener("dragstart",o),document.removeEventListener("copy",i),document.removeEventListener("cut",s),document.removeEventListener("visibilitychange",l),clearInterval(c);const e=document.getElementById("screen-protection");e&&e.remove()}},[]),null}export{f as S};
