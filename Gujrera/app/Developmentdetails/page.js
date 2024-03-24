import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Link from "next/link";

// Input component
const Input = ({ label, placeholder ,type}) => (
  <div class="li">
    <label id="mainlabel">{label}</label>
    <input type={type} placeholder={placeholder} />
  </div>
);

const Form1 = () => (
  <form>
    <h2 class="heading1">INVENTORY DETAILS</h2>
    <div class="projectdetails">
      <div class="note">
        (Please make sure that the Total Carpet area of the different types of
        inventories entered here, match with the Total Carpet area (6433.09 Sq.
        Mtr) which is entered in Project Details Section (Field no. 1.13) on
        previous page.)
      </div>
      <div class="labels">
        <Input label="2.1 Type of Inventory*" placeholder="Shop" />
        <Input label="2.2 No of Inventory" placeholder="10" />
        <Input label="2.3 Carpet Area (Sq Mtrs)*" placeholder="6433.09" />
      </div>
      {/* <div class='bigdiv' >
            <Input label="1.4 Explanatory Note by Promoter (Reasons)*" placeholder="Guidance on Scenario (Circular 8 - PDF)" />
          </div> */}
      <div class="longlabels labels">
        <Input
          label="2.4 Area of exclusive balcony/verandah (Sq Mtr)*"
          placeholder="0"
        />
        <Input
          label="2.5 Area of exclusive open terrace if any (Sq Mtr)*"
          placeholder="0"
        />
        <Input label="2.6 No. of Inventory Booked*" placeholder="0" />
      </div>
      {/* <div class="labels">
            <Input label="1.8 Total Covered Land Area*" placeholder="453389" />
            <Input label="1.9 Total Open Land Area" placeholder="1298776" />
            <Input label="1.10 Land Area for Project Under Registration*" placeholder="66544" />
          </div>
          <div class="labels">
            <Input label="1.11 Total Carpet Area under approved layout*" placeholder="544344" />
            <Input label="1.12 Total Carpet Area for Project under registration" placeholder="4500" />
            <Input label="1.13 No. of Garages*" placeholder="5" />
          </div>
          <div class="labels">
            <Input label="1.14 Total Covered Land Area*" placeholder="453389" />
            <Input label="1.15 Total Open Land Area" placeholder="1298776" />
            <Input label="1.16 Area of Garage(Sq. Mtrs)*" placeholder="655" />
          </div>
          <div class="labels">
            <Input label="1.17 Area of Open Parking*(Sq. Mtrs)" placeholder="453389" />
            <Input label="1.18 Area of Covered Parking*(Sq. Mtrs)" placeholder="1298776" />
          </div>
          <div class="radioinput">
            <label class="openlabel"> 1.19 Is the Project in TP Area?*</label>
            <input type="radio" placeholder="" name='tparea'/>Yes(TP Area including Gamtal Area)
            <input type="radio" placeholder="" name='tparea'/>No(Non TP Area)
            
          </div> */}
    </div>

    <h2 class="heading2">INTERNAL DEVELOPMENT WORK</h2>
    <div id="head2div">
      <div class="longlabels labels">
        <Input label="2.7 Road System" placeholder="Self Development" />
        <Input label="2.8 Water Supply" placeholder="Self Development" />
        <Input
          label="2.9 Sewage and Drainage System"
          placeholder="Self Development"
        />
      </div>
      <div class="longlabels labels">
        <Input
          label="2.10 Electricity Supply Transformer And Sub Station"
          placeholder="Self Development"
        />
        <Input
          label="2.11 Solid Waste Management And Disposal*"
          placeholder="Self Development"
        />
      </div>
      {/* <div class="longlabels labels">
            <Input label="1.26 Revenue Survey No./Block No.(Add multiple Revenue Survey Nos. seperated by comma)*" placeholder="na" />
            <Input label="1.27 City Survey No." placeholder="na" />
          </div>
    
          <div class="labels Adrlabels">
            <Input label="1.28 Project Address Line 1*" placeholder="Vastrapur Road" />
            <Input label="1.29 Project Address Line 2" placeholder="" />
          </div>
    
          <div class="labels">
            <Input label="1.30 Pincode" placeholder="380051" />
            <Input label="1.31 State/UT" placeholder="Gujrat" />
            <Input label="1.32 District" placeholder="Ahmedabad" />
          </div>
          <div class="labels">
            <Input label="1.33 Town Planning Authority" placeholder="Balva Muncipality" />
            <Input label="1.34 Taluka" placeholder="Ahmedabad City" />
          </div>
    
     */}
    </div>
    <div>
      <section>
        <h2 class="heading1">OTHER INTERNAL DEVELOPMENT WORK</h2>
        <h2 class="heading1">WATER SUPPLY</h2>
        <div class="projectdetails">
          <div class="longlabels clabels select">
            <label >
              2.14 Whether Drinking Water is to be obtained from Municipal/Local
              Authority Pipe Line
            </label>
            <select>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div class="flex longlabels clabels">
            <label>
              (a)Total quantity of drinking water required for the project as per NBC: 
            </label>     
            <Input label=" Residencial" type="number" />
            <Input label=" Commercial" type="number" />
            <Input label=" Total" type="text" />
          </div>

          <div class="flex longlabels clabels">
            <label>
              (a)Total quantity of drinking water proposed to be provided for the project: 
            </label>     
            <Input  type="number" />
            <Input type="number" />
            <Input type="text" />
          </div>


          <div class="oneflex longlabels clabels">
            <label>
              (a)Total water proposed to be provided as % of (a): 
            </label> 
            <Input type="text" />
          </div>



          
          <div class="radioinput">
            <label class="openlabel"> (d) Water to be supplied from:</label>
            <div class="radioflex">
            <Input type="radio" placeholder="" name="tparea" />Borewell at Project Site
            <Input type="radio" placeholder="" name="tparea" />Tankers
            <Input type="radio" placeholder="" name="tparea" />Other
            </div>
          </div>
        </div>
      </section>


      <h2 class="heading1">SEWARAGE DISPOSAL</h2>
      <section className="s">
        <div class="projectdetails">
          <div class="clabels longlabels select">
          <label class="label1">
            2.15 Whether sewerage pipe line of Municipal/local authority is
            available near by the project site to which sewerage line of project
            can be connected?
          </label>
          <select name="sewaragedisposal" >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          </div>

          <div class="flex longlabels clabels">
            <label>
            (a) Quantity of sewerage which is expected to generate from the
            project as per NBC: 
            </label>     
            <Input label=" Residencial" type="number" />
            <Input label=" Commercial" type="number" />
            <Input label=" Total" type="text" />
          </div>

          <div class="radioinput gap">
            <label class="openlabel">
            (b)How sewerage of the project will be treated?:
            </label>
            <div class="radioflex gap">
            <Input type="radio" placeholder="" name="tparea" />Borewell at Project Site
            <Input type="radio" placeholder="" name="tparea" />Tankers
            <Input type="radio" placeholder="" name="tparea" />Other
            </div>
            
          </div>

          <div class=" flex select">
          <label>
          (c)Whether recycling of treated effluent is proposed
          </label>
          <select name="recyclingProposed">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          
          </div>
        </div>

        {/* Add more input fields as needed */}
      </section>

      <section>
        <h2 class="heading1">SOLID WASTE DISPOSAL</h2>
        <div class="projectdetails">
        <div class="gap">
          <label class="openlabel">
            2.16 Solid Waste Disposal from the project
          </label>
          <div class="flex">
          <input type="radio" placeholder="" name="tparea" />
          Local Authority
          <input type="radio" placeholder="" name="tparea" />
          Other
          </div>
        </div>
        </div>
      </section>
      <h2 class="heading1">SWIMMING POOL</h2>
      <section>
        <div class="projectdetails">
          <div class="flexing">
          <label>
            2.17 Swimming pool capacity (For Project cost &gt; 100 crores)
          </label>
          <div class="select">
          <select name="seweragePipeLine">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          </div>
          
          </div>
          <div class="labelsD">
            <Input label="Length (Mtrs)" placeholder="10" />
            <Input label="Breadth (Mtrs)" placeholder="10" />
            <Input label="Average Water Depth (Mtrs)" placeholder="10" />
            <Input label="Capacity (Litres)" placeholder="1000000.00" />
          </div>
        </div>

        {/* Add more input fields as needed */}
      </section>

      {/* Add more  sections as needed */}

      <div class="btndiv">
          <button class="grnbtn" type="submit">
           <Link href='/Addprofessionals'>Next</Link> 
          </button>
      </div>
    </div>
    {/* Add more input fields or other form elements as needed */}
  </form>
);

const Developmentdetails = () => {
  return (
    <div>
      <Header />
      <div class="pdflex">
        <Sidebar />
        <Form1 />
      </div>
    </div>
  );
};

export default Developmentdetails;
