"use client";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

import Link from "next/link";

// Input component
const Input = ({ label, placeholder }) => (
  <div class="li">
    <label id="mainlabel">{label}</label>
    <input type="text" placeholder={placeholder} />
  </div>
);

const Form2 = () => (
  <form>
    <h2 class="heading1">AGENT(ONLY REGISTERED WITH GUJRERA)</h2>
    <div class="projectdetails">
      <div class="labels">
        <div class="splabel">
          <label>3.1 PAN No </label>
          <div class="inbtn">
            <input type="text"></input>
            <button>Search</button>
          </div>
        </div>
        <Input label="3.2 Agent Registration No of RERA" />
        <Input label="3.3 Name" />
      </div>

      <div class="labels">
        <Input label="3.4 PAN No" />
        <Input label="3.5 EmailId" />
        <Input label="3.6 Mobile No" />
      </div>
      <div class="labels">
        <Input label="3.7 Address" />
      </div>
      <div class="flexend">
        <button class="grnbtn">Add</button>
    </div>
    </div>
    


    <h2 class="heading1">ARCHITECT(ONLY REGISTERED WITH GUJRERA)</h2>
    <div class="projectdetails">
      <div class="labels">
        <div class="splabel">
          <label>3.8 CoA Number </label>
          <div class="inbtn">
            <input type="text"></input>
            <button>Search</button>
          </div>
        </div>
        <Input label="3.9 Reg No with COA Certificate" />
        <Input label="3.10 Name" />
      </div>

      <div class="labels">
        
        <Input label="3.11 EmailId" />
        <Input label="3.12 Mobile No" />
        <Input label="3.13 Address" />
      </div>
      <div class="labels">
        <Input label="3.14 No of Key Project Completed" />
        <Input label="3.15 Professional Experience in Yrs." />
      </div>
      <div class="flexend">
        <button class="grnbtn">Add</button>
    </div>
    </div>



    <h2 class="heading1">STRUCTURAL ENGINEER(ONLY REGISTERED WITH GUJRERA)</h2>
    <div class="projectdetails">
      <div class="labels">
        <div class="splabel">
          <label>3.16 PAN No </label>
          <div class="inbtn">
            <input type="text"></input>
            <button>Search</button>
          </div>
        </div>
        <Input label="3.17 Local Authority License No Certificate" />
        <Input label="3.18 Name" />
      </div>
      <div class="labels">       
        <Input label="3.19 EmailId" />
        <Input label="3.20 Mobile No" />
        <Input label="3.21 PAN No" />
      </div>
      <div class="labels">
        <Input label="3.22 Address" />
        <Input label="3.23 No of Key Project Completed" />
        <Input label="3.24 Professional Experience in Yrs." />

      </div>
      <div class="flexend">
        <button class="grnbtn">Add</button>
    </div>
    </div>




    <h2 class="heading1">CONTRACTOR(ONLY REGISTERED WITH GUJRERA)</h2>
    <div class="projectdetails">
      <div class="labels">
        <div class="splabel">
          <label>3.25 PAN No </label>
          <div class="inbtn">
            <input type="text"></input>
            <button>Search</button>
          </div>
        </div>
        <Input label="3.26 EmailId" />
        <Input label="3.27 Name" />
      </div>
      <div class="labels">       
        <Input label="3.28 Mobile No" />
        <Input label="3.29 PAN No" />
        <Input label="3.30 Address" />
      </div>
      <div class="labels">
        <Input label="3.31 No of Key Project Completed" />
        <Input label="3.32 Professional Experience in Yrs." />

      </div>
      <div class="flexend">
        <button class="grnbtn">Add</button>
    </div>
    </div>

    <div class="btndiv">
          <button class="grnbtn" type="submit">
           <Link href='/Uploaddocs'>Next</Link> 
          </button>
    </div>


  </form>
);

function Addprofessionals() {
  return (
    <div>
      <Header />
      <div class="pdflex">
        <Sidebar />
        <div>
          <Form2 />
        </div>
      </div>
    </div>
  );
}

export default Addprofessionals;
