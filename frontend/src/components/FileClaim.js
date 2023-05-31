import React from "react";
import axios from 'axios';
import {useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";


export default function FraudCheck() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

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

  const onSubmit = (data, event) => {
    data.PolicyType = `${data.VehicleCategory} - ${data.BasePolicy}`
    console.log(data)
    fetch("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
  }




  return (
    <div className="container">
      <h1 className="display-3 my-5">File a Claim</h1>
      <p className="lead text-muted w-75 mx-auto">Fill out the short form below for a quick claim validation! Our machine learning algorithm validates client claims within 60 seconds!</p>
      <form id="FraudForm" className='form mb-5' onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  );
}

