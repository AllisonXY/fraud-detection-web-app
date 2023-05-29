import React from "react";
import axios from 'axios';
import {useState, useEffect } from 'react';

export default function FraudCheck() {

  const sexList = ['Male', 'Female'];
  const maritalStatusList = ["Single", "Married", "Divorced", "Widowed"];
  const AgentTypeList = ['Internal', 'External']
  const BasePolicyList = ['Collision', 'Liability', 'All Perils']
  const DeductibleList = [300, 400, 500, 700];
  const PastNumberOfClaimsList = ['None', '1', '2 to 4', 'More than 4'];
  const AgeOfPolicyHolderList = ['16 to 17', '18 to 20', '21 to 25', '26 to 30', '31 to 35', '36 to 40', '41 to 50', '51 to 65', 'Over 65'];
  const FaultList = ['Policy Holder', 'Third Party']
  const AccidentAreaList = ['Urban', 'Rural']
  const VehicleCategoryList = ['Sedan', 'Sport', 'Utility']
  const VehicleMakeList = ['Accura', 'BMW', 'Chevrolet', 'Dodge', 'Ferrari', 'Ford', 'Honda', 'Jaguar', 'Lexus', 'Mazda', 'Mecedes', 'Mercury', 'Nisson', 'Pontiac', 'Porche', 'Saab', 'Saturn', 'Toyota', 'VW'];
  const VehiclePriceList = ['Less than $20,000', '$20,000 to $29,000', '$30,000 to $39,000', '$40,000 to $59,000', '$60,000 to $69,000', 'More than $69,000']
  const AgeOfVehicleList = ['New', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', 'More than 7 Years']

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="container">
      <h1 class="display-3 my-4">File a Claim</h1>
      <p class="lead text-muted w-75 mx-auto">Fill out the short form below for a quick claim validation! Our machine learning algorithm validates client claims within 60 seconds!</p>

      <form id="FraudForm" className='form mb-5' onSubmit={handleSubmit}>
        <fieldset className="PolicyHolder border rounded bg-light">
          <p className="h3 text-center mt-2 mb-5">Policy Holder Details</p>

          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="AgeOfPolicyHolder">Age</label>
              <select className="form-control" id="AgeOfPolicyHolder" name="AgeOfPolicyHolder" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {AgeOfPolicyHolderList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>
            
            <div className="form-group col-md-4">
              <label htmlFor="Sex">Sex</label>
              <select className="form-control" id="Sex" name="Sex" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {sexList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="MaritalStatus">Marital Status</label>
              <select className="form-control" id="MaritalStatus" name="MaritalStatus" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {maritalStatusList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>
          </div>
          
        </fieldset>

        <fieldset className="Policy border rounded bg-light">
          <p className="h3 text-center mt-2 mb-5">Policy Details</p>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="AgentType">Agent Type</label>
              <select className="form-control" id="AgentType" name="AgentType" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {AgentTypeList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>

            {/* This Field is a Summation of Vehicle Category and Base Policy */}
            <input type="hidden" value={`${formData.VehicleCategory} - ${formData.BasePolicy}`} />

            <div className="form-group col-md-6">
              <label htmlFor="BasePolicy">Base Policy</label>
              <select className="form-control" id="BasePolicy" name="BasePolicy" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {BasePolicyList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="Deductible">Deductible</label>
              <select className="form-control" id="Deductible" name="Deductible" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {DeductibleList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="PastNumberOfClaims">Past Number Of Claims</label>
              <select className="form-control" id="PastNumberOfClaims" name="PastNumberOfClaims" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {PastNumberOfClaimsList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>
          </div>

        </fieldset>

        <fieldset className="Accident border rounded bg-light">
          <p className="h3 text-center mt-2 mb-5">Accident Details</p>

          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="YearMonth">Date</label>
              <input className="form-control" type="month" id="YearMonth" name="YearMonth" onChange={(e) => handleChange(e)} required/>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="AccidentArea">Accident Area</label>
              <select className="form-control" id="AccidentArea" name="AccidentArea" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {AccidentAreaList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="Fault">Fault</label>
              <select className="form-control" id="Fault" name="Fault" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {FaultList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="WitnessPresent">Witness Present</label>
              <div id="WitnessPresent" onChange={(e) => handleChange(e)}>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="WitnessPresent" id="WitnessPresentYes" value="Yes" required/>
                  <label className="form-check-label" htmlFor="WitnessPresentYes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="WitnessPresent" id="WitnessPresentNo" value="No" required/>
                  <label className="form-check-label" htmlFor="WitnessPresentNo">No</label>
                </div>
              </div>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="PoliceReportFiled">Police Report Filed</label>
              <div id="PoliceReportFiled" onChange={(e) => handleChange(e)}>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="PoliceReportFiled" id="PoliceReportFiledYes" value="Yes" required/>
                  <label className="form-check-label" htmlFor="PoliceReportFiledYes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="PoliceReportFiled" id="PoliceReportFiledNo" value="No" required/>
                  <label className="form-check-label" htmlFor="PoliceReportFiledNo">No</label>
                </div>
              </div>
            </div>
          </div>
      
        </fieldset>

        <fieldset className="Vehicle border rounded bg-light">
          <p className="h3 text-center mt-2 mb-5">Vehicle Details</p>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="VehicleCategory">Vehicle Category</label>
              <select className="form-control" id="VehicleCategory" name="VehicleCategory" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {VehicleCategoryList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="VehicleMake">Vehicle Make</label>
              <select className="form-control" id="VehicleMake" name="VehicleMake" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {VehicleMakeList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="AgeOfVehicle">Age Of Vehicle</label>
              <select className="form-control" id="AgeOfVehicle" name="AgeOfVehicle" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {AgeOfVehicleList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="VehiclePrice">Vehicle Price</label>
              <select className="form-control" id="VehiclePrice" name="VehiclePrice" onChange={(e) => handleChange(e)} defaultValue="none" required>
                {VehiclePriceList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
            </div>
          </div>

        </fieldset>

        <button type="submit" className="button btn btn-secondary mb-3" id="submitBtn" name="submit">Submit</button>
      </form>
    </div>
  );
}



