import{r,j as e,Q as d}from"./index-3139f6c3.js";import{R as l,a as m,F as x}from"./Footer-ffda50c7.js";import{B as h}from"./Breadcrumbs-caa4fb0b.js";import{a as j}from"./axios-21b846bc.js";import{C as f}from"./CanonicalHeaders-660706f9.js";l.initialize("G-PWXX0RHDML");const p=()=>{const[s,i]=r.useState({name:"",email:"",subject:"",message:""}),t=async c=>{c.preventDefault();try{(await j.post("https://radiant-forest-85440-7635edd64cab.herokuapp.com/sendmail",s)).status===200&&(d("Message Sent Successfully"),l.event({category:"Contact Form",action:"Submitted Form"}),i({name:"",email:"",subject:"",message:""}))}catch(n){console.error("Error sending message:",n)}},a=c=>{const{name:n,value:o}=c.target;i({...s,[n]:o})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"comment-field",children:[e.jsx("h2",{className:"comment-form-title",children:"Get in touch"}),e.jsxs("form",{onSubmit:t,className:"commentform",children:[e.jsxs("div",{className:"row form-fields",children:[e.jsx("p",{className:"comment-author col-md-6",children:e.jsx("input",{placeholder:"Name*",type:"text",name:"name",autoComplete:"off",required:!0,value:s.name,onChange:a})}),e.jsx("p",{className:"author-email col-md-6",children:e.jsx("input",{placeholder:"Email Address*",type:"email",name:"email",autoComplete:"off",required:!0,value:s.email,onChange:a})}),e.jsx("p",{className:"comment-author col-md-12",children:e.jsx("input",{placeholder:"Subject*",type:"text",name:"subject",autoComplete:"off",required:!0,value:s.subject,onChange:a})})]}),e.jsx("p",{className:"comment-form",children:e.jsx("textarea",{placeholder:"Write Your Message*",name:"message",autoComplete:"off",cols:"20",rows:"5",required:!0,value:s.message,onChange:a})}),e.jsx("p",{className:"form-submit",children:e.jsx("button",{className:"theme-btn theme-btn-1",type:"submit",children:"Send Message"})})]})]})})},u=()=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"contact-page-sec te-pt-100 te-pb-80 te-pt-md-70 te-md-pb-50 te-sm-pt-50 te-sm-pb-20",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 col-md-6 d-lg-flex d-md-flex",children:e.jsxs("div",{className:"contact-info-inner",children:[e.jsx("div",{className:"contact-info-icon",children:e.jsx("i",{className:"icofont-google-map"})}),e.jsxs("div",{className:"contact-info-text",children:[e.jsx("h2",{children:"Office: Kenya"}),e.jsx("span",{children:"The Address, Westlands,"}),e.jsx("span",{children:"Nairobi, Kenya"})]})]})}),e.jsx("div",{className:"col-lg-3 col-md-6 d-lg-flex d-md-flex",children:e.jsxs("div",{className:"contact-info-inner",children:[e.jsx("div",{className:"contact-info-icon",children:e.jsx("i",{className:"icofont-google-map"})}),e.jsxs("div",{className:"contact-info-text",children:[e.jsx("h2",{children:"Office: Seychelles"}),e.jsx("span",{children:"Providence             "}),e.jsx("span",{children:"Mahe, Seychelles                   "})]})]})}),e.jsx("div",{className:"col-lg-3 col-md-6 d-lg-flex d-md-flex",children:e.jsxs("div",{className:"contact-info-inner",children:[e.jsx("div",{className:"contact-info-icon",children:e.jsx("i",{className:"icofont-google-map"})}),e.jsxs("div",{className:"contact-info-text",children:[e.jsx("h2",{children:"Office: Dubai"}),e.jsx("span",{children:"Business Bay          "}),e.jsx("span",{children:"Dubai, UAE                      "})]})]})}),e.jsx("div",{className:"col-lg-3 col-md-6 d-lg-flex d-md-flex",children:e.jsxs("div",{className:"contact-info-inner",children:[e.jsx("div",{className:"contact-info-icon",children:e.jsx("i",{className:"icofont-google-map"})}),e.jsxs("div",{className:"contact-info-text",children:[e.jsx("h2",{children:"Office: Saint Vincent"}),e.jsx("span",{children:"St. Vincent Bank Ltd. Building "}),e.jsx("span",{children:"James Street, Kingston"}),e.jsx("span",{children:"St. Vincent & the Grenadines"})]})]})})]}),e.jsx("br",{}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 col-md-6 d-lg-flex d-md-flex",children:e.jsxs("div",{className:"contact-info-inner",children:[e.jsx("div",{className:"contact-info-icon",children:e.jsx("i",{className:"icofont-google-map"})}),e.jsxs("div",{className:"contact-info-text",children:[e.jsx("h2",{children:"Office: Mauritius"}),e.jsx("span",{children:"8th Floor Hennessy Tower"}),e.jsx("span",{children:"Pope Hennessy Street"}),e.jsx("span",{children:"Port Louis, Mauritius"})]})]})}),e.jsx("div",{className:"col-lg-3 col-md-6 d-lg-flex d-md-flex",children:e.jsxs("div",{className:"contact-info-inner",children:[e.jsx("div",{className:"contact-info-icon",children:e.jsx("i",{className:"icofont-telephone"})}),e.jsxs("div",{className:"contact-info-text",children:[e.jsx("h2",{children:"phone number"}),e.jsx("span",{children:e.jsx("a",{href:"tel:(0117) 900 9463",className:"me-1",children:"+2(482) 611 651"})}),e.jsx("span",{children:e.jsx("a",{href:"tel:(0121) 268 3610",children:"+1(540)2342232"})})]})]})}),e.jsx("div",{className:"col-lg-3 col-md-6 d-lg-flex d-md-flex",children:e.jsxs("div",{className:"contact-info-inner",children:[e.jsx("div",{className:"contact-info-icon",children:e.jsx("i",{className:"icofont-envelope-open"})}),e.jsxs("div",{className:"contact-info-text",children:[e.jsx("h2",{children:"email address"}),e.jsx("span",{children:e.jsx("a",{href:"mailto:jeanne@hotmail.com",children:"info@camitrade.com"})}),e.jsx("span",{children:e.jsx("a",{href:"mailto:ytillman@gmail.com",children:"sales@camitrade.com"})})]})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-8",children:e.jsx(p,{})})})]})})}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"About Us | We ensure legal compliance and sustainable growth.",description:"Camitrade Fiduciaries provides global company incorporation and administration services, Licensing services and Payment solutions"}),e.jsx(m,{}),e.jsx(h,{pageTitle:"Contact Us"}),e.jsx(u,{}),e.jsx(x,{})]});export{C as default};
