import React from "react";
import { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { Modal, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

export default function FraudCheck() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbx7U_dYvRtE1KO21ya1DbRem1_mqFZU8iYfZKvwh6m4KfQjfghM4XOn3EzisNoZPr5-/exec"
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

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

  const onSubmit = (data) => {
    data.PolicyType = `${data.VehicleCategory} - ${data.BasePolicy}`
    console.log(data)
    // e.preventDefault()
        setLoading(true)

        fetch(scriptURL, {
        method: 'POST', 
        body: new FormData(formRef.current),

        }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))


    fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => setIsApproved(data));
    window.scrollTo(0, 0);
    handleShow();
  }

const onClick = (event) => {
  const data = {
    "AgeOfPolicyHolder": "21 to 25",
    "Sex": "Female",
    "MaritalStatus": "Married",
    "AgentType": "External",
    "BasePolicy": "Collision",
    "Deductible": "400",
    "PastNumberOfClaims": "1",
    "YearMonth": "2023-04",
    "AccidentArea": "Urban",
    "Fault": "Policy Holder",
    "WitnessPresent": "No",
    "PoliceReportFiled": "No",
    "VehicleCategory": "Sport",
    "VehicleMake": "Saturn",
    "AgeOfVehicle": "2 Years",
    "VehiclePrice": "$20,000 to $29,000",
    "PolicyType": "Sport - Collision"
  }
  fetch("/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => setIsApproved(false));

  handleShow();
}

  return (
    <div className="container">
      <h1 className="display-3 my-5">File a Claim</h1>
      <button onClick={onClick}></button>
      <p className="lead text-muted w-75 mx-auto">Fill out the short form below for a quick claim validation! Our machine learning algorithm validates client claims within 60 seconds!</p>
      <form ref={formRef} name='submit-to-google-sheet' id="FraudForm" className='form mb-5' onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="PolicyHolder border rounded bg-light">
          <p className="h3 text-center mt-2 mb-5">Policy Holder Details</p>

          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="AgeOfPolicyHolder">Age</label>
              <select className="form-control" id="AgeOfPolicyHolder" name="AgeOfPolicyHolder" defaultValue="none" {...register('AgeOfPolicyHolder', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {AgeOfPolicyHolderList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.AgeOfPolicyHolder?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>
            
            <div className="form-group col-md-4">
              <label htmlFor="Sex">Sex</label>
              <select className="form-control" id="Sex" name="Sex" defaultValue="none" {...register('Sex', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {sexList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.Sex?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="MaritalStatus">Marital Status</label>
              <select className="form-control" id="MaritalStatus" name="MaritalStatus" defaultValue="none" {...register('MaritalStatus', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {maritalStatusList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.MaritalStatus?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>
          </div>
          
        </fieldset>

        <fieldset className="Policy border rounded bg-light">
          <p className="h3 text-center mt-2 mb-5">Policy Details</p>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="AgentType">Agent Type</label>
              <select className="form-control" id="AgentType" name="AgentType" defaultValue="none" {...register('AgentType', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {AgentTypeList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.AgentType?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="BasePolicy">Base Policy</label>
              <select className="form-control" id="BasePolicy" name="BasePolicy" defaultValue="none" {...register('BasePolicy', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {BasePolicyList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.BasePolicy?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="Deductible">Deductible</label>
              <select className="form-control" id="Deductible" name="Deductible" defaultValue="none" {...register('Deductible', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {DeductibleList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.Deductible?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="PastNumberOfClaims">Past Number Of Claims</label>
              <select className="form-control" id="PastNumberOfClaims" name="PastNumberOfClaims" defaultValue="none" {...register('PastNumberOfClaims', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {PastNumberOfClaimsList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.PastNumberOfClaims?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>
          </div>

        </fieldset>

        <fieldset className="Accident border rounded bg-light">
          <p className="h3 text-center mt-2 mb-5">Accident Details</p>

          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="YearMonth">Date</label>
              <input className="form-control" type="month" id="YearMonth" name="YearMonth" {...register('YearMonth', {required: true})}/>
              {errors?.YearMonth?.type === "required" && <p className="alert alert-primary small">Required</p>}
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="AccidentArea">Accident Area</label>
              <select className="form-control" id="AccidentArea" name="AccidentArea" defaultValue="none" {...register('AccidentArea', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {AccidentAreaList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.AccidentArea?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="Fault">Fault</label>
              <select className="form-control" id="Fault" name="Fault" defaultValue="none" {...register('Fault', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {FaultList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.Fault?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="WitnessPresent">Witness Present</label>
              <div id="WitnessPresent">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="WitnessPresent" id="WitnessPresentYes" value="Yes" {...register('WitnessPresent', {required: true})}/>
                  <label className="form-check-label" htmlFor="WitnessPresentYes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="WitnessPresent" id="WitnessPresentNo" value="No" {...register('WitnessPresent', {required: true})}/>
                  <label className="form-check-label" htmlFor="WitnessPresentNo">No</label>
                </div>
                {errors?.WitnessPresent?.type === "required" && <p className="alert alert-primary small">Required</p>}
              </div>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="PoliceReportFiled">Police Report Filed</label>
              <div id="PoliceReportFiled">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="PoliceReportFiled" id="PoliceReportFiledYes" value="Yes" {...register('PoliceReportFiled', {required: true})}/>
                  <label className="form-check-label" htmlFor="PoliceReportFiledYes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="PoliceReportFiled" id="PoliceReportFiledNo" value="No" {...register('PoliceReportFiled', {required: true})}/>
                  <label className="form-check-label" htmlFor="PoliceReportFiledNo">No</label>
                </div>
              </div>
              {errors?.PoliceReportFiled?.type === "required" && <p className="alert alert-primary small">Required</p>}
            </div>
          </div>
      
        </fieldset>

        <fieldset className="Vehicle border rounded bg-light">
          <p className="h3 text-center mt-2 mb-5">Vehicle Details</p>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="VehicleCategory">Vehicle Category</label>
              <select className="form-control" id="VehicleCategory" name="VehicleCategory" defaultValue="none" {...register('VehicleCategory', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {VehicleCategoryList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.VehicleCategory?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="VehicleMake">Vehicle Make</label>
              <select className="form-control" id="VehicleMake" name="VehicleMake" defaultValue="none" {...register('VehicleMake', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {VehicleMakeList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.VehicleMake?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="AgeOfVehicle">Age Of Vehicle</label>
              <select className="form-control" id="AgeOfVehicle" name="AgeOfVehicle" defaultValue="none" {...register('AgeOfVehicle', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {AgeOfVehicleList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.AgeOfVehicle?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="VehiclePrice">Vehicle Price</label>
              <select className="form-control" id="VehiclePrice" name="VehiclePrice" defaultValue="none" {...register('VehiclePrice', {validate: {notNone: fieldValue => { if (fieldValue === 'none') return ('Please Select An Option')} }})}>
                {VehiclePriceList.map(item => (<option key={item} value={item}>{item}</option>))}
                <option value="none" disabled hidden></option> 
              </select>
              {errors?.VehiclePrice?.type === "notNone" && <p className="alert alert-primary small">Required</p>}
            </div>
          </div>
        </fieldset>

        <button type="submit" className="button btn btn-secondary mb-3" id="submitBtn" name="submit">Submit</button>
      </form>

      <Modal style={isOpen ? {opacity:1} : {opacity:0}} show={isOpen} onHide={handleClose} className="text-center">
        <Modal.Header>
          {isApproved && 
          <Modal.Title>
            <IconContext.Provider value={{ color: "green", size: '5rem', className: "global-class-name" }}>
              <div><IoMdCheckmarkCircleOutline className="mx-3"/>Your Claim was Approved!</div>
            </IconContext.Provider>
          </Modal.Title>
          }
          {!isApproved && 
          <Modal.Title>
            <IconContext.Provider value={{ color: "red", size: '5rem', className: "global-class-name" }}>
              <div><RxCrossCircled className="mx-3"/>Your Claim Does Not Qualify For Pre-Approval</div>
            </IconContext.Provider>
          </Modal.Title>
          }
        </Modal.Header>
        {isApproved && 
          <Modal.Body>Please allow 3-5 business days for processing</Modal.Body>
        }
        {!isApproved && 
          <Modal.Body>Your claim will be escalated to the Fraud Department</Modal.Body>
        }
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div> 
  );
}


