const l=document.querySelector(".feedback-form");let a={email:"",message:""};const o=()=>{const e=JSON.parse(localStorage.getItem("feedBackFormState"));if(e!==null){a=e;for(const t in e)e.hasOwnProperty(t)&&(l.elements[t].value=e[t])}};o();const m=e=>{let t=e.target.value,r=e.target.name;a[r]=t,localStorage.setItem("feedBackFormState",JSON.stringify(a))},s=e=>{const t=a.email.trim(),r=a.message.trim();if(e.preventDefault(),e.target.reset(),localStorage.removeItem("feedBackFormState"),t===""||r===""){alert("Fill please all fields");return}};l.addEventListener("change",m);l.addEventListener("submit",s);
//# sourceMappingURL=2-form-c5538973.js.map
