import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { gtag,install} from 'ga-gtag';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faPhone,
  faRocket,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";

// import Page from "./Footer1/Page";
export default function HeaderRight() {
    let HowCanIhelp = []
    const data= {
    name:"",
    email:"",
    phone:"",
    tellUsAbout:"",
    howCanHelp:[],
     budget:"",
    }

  useEffect(()=>{
    document.getElementById("INR").checked = true
  },[])
   const[Inr,setInr]= useState(true)
  function ValidateNumber(event) {
    const phoneNumber = document.getElementById("text-number");
    const number = event.target.value.replace(/\D/g, "");
    console.log(number);
    phoneNumber.value = number;
  }
   function ValidateName(event){
    const name = document.getElementById('name')
    const myName = event.target.value.replace(/[^a-zA-Z\s]+/, '')
    name.value = myName
   }
    function moveLabel(id){
         document.getElementById(id).style.transform ="translateY(13px)"
    }
    function resetPos(id){
      const elemnet = document.getElementById(id)
        elemnet.style.transform ="translateY(20px) scale(1,1)"
    }
    function curencyChange(){
     const USD = document.getElementById("USD").checked
     const INR =  document.getElementById("INR").checked
     if (USD && !INR){
      setInr(false)
     }
     else {
      setInr(true)
     }
        
    }

     function toCheckChecked(){
      const elements = document.querySelectorAll(".checkbox_wrap input")
      for(let element of elements){
          if(element.checked){
           data.howCanHelp.push(element.value)
          }
      }
      console.log(data)
      HowCanIhelp = data.howCanHelp
     }

      function Reset() {
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('text-number').value = ""
        document.getElementById('tellus').value = ""
        const length = data.howCanHelp.length
        data.howCanHelp.splice(0, length)
        const elements = document.querySelectorAll(".checkbox_wrap input")
        for(let element of elements){
            if(element.checked){
               element.checked = false
            }
        }
      }

     function sendData() {
      const EMAIL_REGEX = new RegExp(/[^a-z]/gi, '')

       toCheckChecked()
      const numberdata=document.getElementById('text-number').value
      const name=document.getElementById('name').value
          if (numberdata === "" || numberdata.length < 10 || name === "" ){
            Swal.fire({
              title: 'Please Enter Valid Detail',
              backdrop: 'swal2-backdrop-show',
              icon: 'error',
            }
              
            )
            return
          }
          else if (!EMAIL_REGEX.test(document.getElementById('email').value)){
            Swal.fire(
              'Error',
              'Enter Valid Email',
              'error'
            )
                return
          }
        
         const myvalue = {
           "name":document.getElementById('name').value,
           "email":document.getElementById('email').value,
           "phone":document.getElementById('text-number').value,
           "tellUsAbout":document.getElementById('tellus').value,
           "howCanHelp":HowCanIhelp,
            "budget":document.getElementById("budget").value,
         }
        const myReq = JSON.stringify( {
          "subject": "SKYDREAMERS",
            "data": myvalue
        })
           console.log(myvalue)
        const requestOption = {
          method: "POST",
          headers : {
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
          },
          body:myReq,
       }
          fetch('https://lead-management-api.1click.tech/leads',requestOption)
          .then(
            function(response) {
              if (response.status !== 200) {
                response.json().then(function(result) {
                  alert(result.message)
                })
                return
              }
              response.json().then(function(result) {
                console.log(result)
                Swal.fire(
                 'Details Submitted',
                 'We will get touch with you soon',
                 'success'
               )
               Reset()
               install('AW-11139671819');
               gtag('event', 'conversion', {send_to: 'AW-11139671819/KMRsCN_NkpwYEIvO578p'})
            //    MeetingRequest(result.id)
              })
            })
       }
  return (
    <div className='full-section'>
            <section className='section-contactUs'>
                <div className="contact_black">
                    {/* <h1 className="contact-heading_2">Join The Waitlist</h1> */}
                    <p className="contact-heading_3">If you’d like to work with us on your project, the best place to start is here.</p>
                </div>
                {/* <img src={BgBird} alt='error' className='bgimage' /> */}
                <div className="contactForm">
                    <div className="contactMainSection">
                        <div className='test'>
                            <div className="inputwrap">

                                <label className="label1" id="label1">
                                    <FontAwesomeIcon icon={faUser} />
                                    Name
                                </label>
                                <input type="text" id="name"onFocus={() => { moveLabel("label1") }} onChange={(e) => { ValidateName(e) }} onBlur={() => { resetPos("label1") }}/>
                            </div>
                            <div className="input2spanwrap">
                                <div className="inputwrap">
                                    <label className="label1" id="label2" >
                                        <FontAwesomeIcon icon={faEnvelope} />E mail
                                    </label>
                                    <input type="text" id="email" onFocus={() => { moveLabel("label2") }} onBlur={() => { resetPos("label2") }} />
                                </div>
                                <div className="inputwrap">
                                    <label className="label1" id="label3">
                                        <FontAwesomeIcon icon={faPhone} />
                                        Phone
                                    </label>
                                    <input type="text" id="text-number" onChange={(e) => { ValidateNumber(e) }} onFocus={() => { moveLabel("label3") }} onBlur={() => { resetPos("label3") }} minLength={10} maxLength={10} />
                                </div>
                            </div>
                            <div className="inputwrap" >
                                <label className="label1" id="label4">
                                    <FontAwesomeIcon icon={faRocket} />
                                    Tell us about your project
                                </label>
                                <input type="text" id="tellus" onFocus={() => { moveLabel("label4") }} onBlur={() => { resetPos("label4") }} />
                            </div>
                            <div className="inputwrap">
                                <label style={{paddingTop:"10px"}}>How can i help ?</label>
                                <div className="checkbox_parent">
                                    <div className="checkbox_wrap">
                                        <input
                                            type="checkbox"
                                            id="Branding"
                                            name="Branding"
                                            value="Branding"
                                        />
                                        <label for="Branding">Branding</label>
                                    </div>
                                    <div className="checkbox_wrap">
                                        <input type="checkbox" id="ui_ux" name="ui_ux" value="Ui/UX Design" />
                                        <label for="ui_ux"> Ui/UX Design</label>
                                    </div>
                                    <div className="checkbox_wrap">
                                        <input
                                            type="checkbox"
                                            id="Website"
                                            name="Website"
                                            value="Website"
                                        />
                                        <label for="Website">Website</label>
                                    </div>
                                    <div className="checkbox_wrap">
                                        <input
                                            type="checkbox"
                                            id="Marketing"
                                            name="Marketing"
                                            value="Search Marketing"
                                        />
                                        <label for="Marketing">Search Marketing</label>
                                    </div>
                                    <div className="checkbox_wrap">
                                        <input
                                            type="checkbox"
                                            id="Content"
                                            name="Content"
                                            value="Content Creation"
                                        />
                                        <label for="Content">Content Creation</label>
                                    </div>
                                    <div className="checkbox_wrap">
                                        <input
                                            type="checkbox"
                                            id="AI"
                                            name="AI"
                                            value="AI & Automation"
                                        />
                                        <label for="AI">AI & Automation</label>
                                    </div>
                                    <div className="checkbox_wrap">
                                        <input
                                            type="checkbox"
                                            id="Creative"
                                            name="Creative"
                                            value="Creative Direction"
                                        />
                                        <label for="Creative">Creative Direction</label>
                                    </div>
                                    <div className="checkbox_wrap">
                                        <input
                                            type="checkbox"
                                            id="Strategy"
                                            name="Strategy"
                                            value="Strategy"
                                        />
                                        <label for="Strategy">Strategy</label>
                                    </div>
                                </div>
                            </div>
                            <div className="inputwrap" style={{ marginTop: "30px" }}>
                                <span>
                                    <label>
                                        <FontAwesomeIcon icon={faDollar} />
                                        Budget</label>
                                    <input type="radio" id="INR" name="Currency" value="INR"
                                     style={{marginLeft:"10px"}}
                                    onClick={() => {
                                      curencyChange()
                                  }}
                                    />
                                    <label for="INR">INR</label>
                                    <input type="radio" id="USD" name="Currency" value="USD"
                                      style={{marginLeft:"10px"}}
                                    onClick={() => {
                                      curencyChange()
                                  }}/>
                                    <label for="USD">USD</label>

                                </span>

                                {
                                    Inr ?
                                        <select id="budget" >
                                            <option selected>Budget</option>
                                            <option value="1-5lakh">1-5lakh</option>
                                            <option value="5-10 lakh">5-10 lakh</option>
                                            <option value="10 lakh and above">10 lakh and above</option>
                                        </select>
                                        : <select id="budget"><option value="2000-10000$">2000-10000$</option>
                                            <option value="10000-20000$">10000-20000$</option>
                                            <option value="20000$ and above ">20000$ and above </option>
                                        </select>
                                }

                            </div>
                            <span className="btn-top">
                                <button
                                    type="submit"
                                    className="sky_button"
                                    style={{ paddingBottom: "2px" }}
                                     onClick={()=>{
                                      sendData()
                                     }}
                                >
                                    SUBMIT
                                </button>
                            </span>
                        </div>
                    </div>

                    <span className="rightTopCorner"></span>
                    <span className="leftBottomCorner"></span>
                </div>
                {/* <div className='text-bold'>
                    <p>ONLY YOUNG MINDS ARE ACCEPTED</p>
                </div> */}
            </section>

        </div>
  );
}
