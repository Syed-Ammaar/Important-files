"use client";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

import Link from "next/link";
import "./Style.css";

import React from "react";
const Input1 = () => <input type="checkbox" class="input2"></input>;

const Input = ({ label }) => (
  <>
    <div class="Input">
      <label class="label">{label}</label>
      <label htmlFor="file-upload" className="custom-file-upload">
        <i className="fa-cloud-upload"></i> File Upload
      </label>
      <input id="file-upload" type="file" />
    </div>
  </>
);

const Input2 = ({ label, placeholder, type }) => (
  <div class="li">
    <label>{label}</label>
    <input type={type} placeholder={placeholder} />
  </div>
);

class FileUploadButton extends React.Component {
  render() {
    return (
      <form>
        <div class="docmain">
          <h2 class="heading1">DOCUMENTS</h2>

          <div class="box">
            <div class="boxhead">
              <h2 class="boxheading">TECHNICAL DOCUMENTS</h2>
            </div>

            <div class="boxele">
              <div class="labels longlabels oneflex">
                <Input label="4.1 Approved Building/Plotting Plan*" />
                <Input label="4.2 Approved Layout Plan*" />
                <Input label="4.3 Promoter’s affidavit & 2/3 allottee approval/consent as for section 14 (2) (2) of RERA Act.*" />
              </div>
              <div class="labels longlabels oneflex">
                <Input label="4.4 Approved Section Plan/Infrastructure Plan*" />
                <Input label="4.5 Area Development Plan of Project Area*" />
                <Input label="4.6 Draft Brochure*" />
              </div>
              <div class="labels longlabels oneflex twofile">
                <Input
                  label="4.7 Project Photo (JPG only)*"
                  placeholder="453389"
                />
                <Input
                  label="4.8 Non Agriculture (NA) Order and Fire Opinion From Authority"
                  placeholder="1298776"
                />
              </div>
            </div>
          </div>

          <div class="box">
            <div class="boxhead">
              <h2 class="boxheading">LEGAL DOCUMENTS</h2>
            </div>

            <div class="boxele">
              <div>
                <h5 class="Headers">
                  Land Documents/Ownership documents/Conveyance Deed*
                </h5>
                <h5>
                  (Registered Purchase/sale Deed with index copy, Registered
                  Gift Deed with index copy,Will,Registered Release Deed with
                  index copy)
                </h5>
              </div>
              <div class="onlyflex mar">
                <Input2 />
                <button class="grnbtn">Search</button>
              </div>
              <div class="flex">
                <div class="mar">
                  <Input2
                    label="4.9 Date of Issuance of documents"
                    type="date"
                  />
                </div>
                <div class="mar"> 
                  <Input2 label="4.10 Land Owner Name" placeholder="NG GROUP FINANCIAL SERVICE"/>
                </div>
                <div class="mar">
                  <Input2 type="tel" label="4.11 Contact Details" placeholder="9908663427"/>
                </div>
                <div class="docin mar">
                  <Input label="4.12 Document*"/>
                </div>
              </div>
            </div>
          </div>

          <div class="declist">
            {/* <p> */}
            <h3 className="Headers">4.42 DECLARATIONS</h3>
            <div className="para">
              <h5>
                We, as promoter, hereby confirm below aspects covered in our
                application. Application is eligible for Rejection in case below
                aspects are not adhered to:
              </h5>
            </div>
            <ul>
              <li>
                <Input1 />
                <h5>
                  Provision of Drainage and/or Availability of STP (mentioned in
                  Layout Plan) is available/planned in this project.
                </h5>
              </li>
              <li>
                <Input1 />
                <h5>
                  We as Promoter hold no rights on FSI on Terrace post BU as per
                  clause in Sale Deed.
                </h5>
              </li>
              <li>
                <Input1 />
                <h5>
                  The Carpet Area and Drainage Line is clearly mentioned as per
                  the Approved Plans/ In case, Carpet Area and Drainage Line is
                  not mentioned in Approved Plans, the affidavit for Carpet Area
                  and Drainage is attached along with Form B Declaration field.
                </h5>
              </li>
              <li>
                <Input1 />
                <h5>
                  The Uploaded Affidavits (Form B and B1,B2 (in case of Joint
                  Development Agreement - if applicable) is duly notarized)
                </h5>
              </li>
              <li>
                <Input1 />
                <h5>
                  The Fire Officer opinion is to be obtained for the building ,
                  if applicable as per the regulations of the prevailing GDCR .
                  For more details , click here
                </h5>
              </li>
              <li>
                <Input1 />
                <h5>Only the Approved plans are uploaded</h5>
              </li>
              <li>
                <Input1 />
                <h5>
                  I/We , adhere to all provisions described in Order – 50
                  DIRECTION FOR SUBMISSION OF PROPER DOCUMENTS AT THE TIME OF
                  PROJECT REGISTRATION APPLICATION., Know More
                </h5>
              </li>
            </ul>
            {/* </p> */}
          </div>

          {/* Add more  sections as needed */}

          <div class="btndiv">
            <button class="grnbtn" type="submit">
              <Link href="/Blockentry">Next</Link>
            </button>
          </div>
        </div>
        {/* Add more input fields or other form elements as needed */}
      </form>
    );
  }
}

const Uploaddocs = () => {
  return (
    <div>
      <Header />
      <div class="pdflex">
        <Sidebar />
        <FileUploadButton />
      </div>
    </div>
  );
};

export default Uploaddocs;
