var l=Object.defineProperty;var n=(r,t,e)=>t in r?l(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>(n(r,typeof t!="symbol"?t+"":t,e),e);import"./assets/styles-27657b4b.js";class m{constructor(t,e){o(this,"formData",{email:"",message:""});o(this,"errorMessage",[]);this.form=document.querySelector(t),this.lsKey=e}loadFormData(){const t=this.readLS(this.lsKey);if(!t)return;Object.keys(t).forEach(s=>{this.form.elements[s].value=t[s]})}collectInputsValue(t){const e=new FormData(t),s={};for(const[i,a]of e)s[i]=a.trim();return s}validation(t){let e=[];const s=new FormData(t);for(const[i,a]of s)a.trim()===""?e.push(!1):e.push(!0);return this.errorMessage="Fill please all fields",e}writeLS(t,e){const s=JSON.stringify(e);localStorage.setItem(t,s)}readLS(t){const e=localStorage.getItem(t);return JSON.parse(e)}init(){this.loadFormData(),this.form.addEventListener("input",t=>{const e=this.collectInputsValue(this.form);this.formData=e,this.writeLS(this.lsKey,e)}),this.form.addEventListener("submit",t=>{t.preventDefault();const e=t.submitter.innerText;this.validation(this.form).includes(!1)?alert(this.errorMessage??"Error"):(t.submitter.innerText="Form submited",t.submitter.disabled=!0,console.log(this.formData),this.form.reset(),localStorage.clear()),setTimeout(()=>{t.submitter.innerText=e,t.submitter.disabled=!1},5e3)})}}const c=new m(".feedback-form","feedback-form-state");c.init();
//# sourceMappingURL=commonHelpers2.js.map
