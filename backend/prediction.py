import json
import pickle
import pandas as pd
from sklearn.preprocessing import OneHotEncoder


col_names = ['Month', 'Make', 'AccidentArea', 'Sex', 'MaritalStatus', 'Fault',
       'PolicyType', 'VehicleCategory', 'VehiclePrice', 'FraudFound_P',
       'Deductible', 'PastNumberOfClaims', 'AgeOfVehicle', 'AgeOfPolicyHolder',
       'PoliceReportFiled', 'WitnessPresent', 'AgentType', 'Year','BasePolicy']

# categorical columns that need to be one hot encoding
categorical_cols =['Make','AccidentArea','Sex','MaritalStatus','Fault','PolicyType','VehicleCategory',
             'VehiclePrice','PastNumberOfClaims','AgeOfVehicle','AgeOfPolicyHolder',
             'PoliceReportFiled','WitnessPresent','AgentType','Year','BasePolicy']

# for consistency in web form fields and dataset column names
value_mappings = {
    "Widow": "Widowed",
    "more than 4": "More than 4",
    "over 65": "Over 65",
    "none": "None",
    "less than 20000": "Less than $20,000",
    "20000 to 29000": "$20,000 to $29,000",
    "30000 to 39000": "$30,000 to $39,000",
    "40000 to 59000": "$40,000 to $59,000",
    "60000 to 69000": "$60,000 to $69,000",
    "more than 69000": "More than $69,000",
    "new": "New",
    "2 years": "2 Years",
    "3 years": "3 Years",
    "4 years": "4 Years",
    "5 years": "5 Years",
    "6 years": "6 Years",
    "7 years": "7 Years",
    "more than 7": "More than 7 Years",
    "Mecedes": "Mercedes",
    "Nisson": "Nissan",
    "Accura": "Acura",
}

rev_key_mappings = {v: k for k, v in value_mappings.items()}

month_mappings = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec",
}

# helper methods
def extract_month(yearMonth):
    return yearMonth.split("-")[-1]

def convert_year(year):
    return int(year)

# renaming month and other column values for consistency
def rename_months(df, mappings=month_mappings):
    df["Month"] = df["Month"].map(mappings).fillna(df["Month"])
    return df

def rename_values(df, mappings=value_mappings):
    for column in df.columns: 
        df[column] = df[column].map(mappings).fillna(df[column])
    return df

# convert raw user input to df
def extract_user_df(json_string):
    json_string['FraudFound_P'] = 0
    data = {"0": json_string.values()}
    cols = json_string.keys()
    df = pd.DataFrame.from_dict(data, orient='index', columns=cols)
    # extracting year & month value from YearMonth
    # and rename month column 
    df['Year'] = 1994     # df['YearMonth'].apply(extract_year) 
    df['Month'] = df['YearMonth'].apply(extract_month)
    df['Deductible'] = df['Deductible'].apply(int)  
    df = rename_months(df)
    df.drop("YearMonth", axis=1, inplace=True)
    df = df.rename(columns={"VehicleMake": "Make"})
    # reorder columns by names  
    df = df[col_names]
    return df


# preprocessing data
def one_hot_encoder(df,col):
  transformed_df=pd.get_dummies(pd.Series(df[col]), dtype=int)
  df.drop(col, axis=1, inplace=True)
  return pd.concat([df, transformed_df], axis=1)

def categorical_to_numerical(df,cate_cols=categorical_cols):
    new_data=one_hot_encoder(df,'Month')
    for col in cate_cols:
        new_data=one_hot_encoder(new_data, col)
    return new_data

def preprocess(user_df):  
    with open('content/original_data.pickle', 'rb') as file:
        df = pickle.load(file)
    # convert year values to int
    df["Year"] = df["Year"].apply(convert_year)
    # rename values
    df = rename_values(df)
    user_data = rename_values(user_df)
    concatenated_df = pd.concat([df, user_df], axis=0)
    encoded_df = categorical_to_numerical(concatenated_df)
    encoded_df.reset_index(drop=True, inplace=True)
    encoded_user_df = encoded_df.tail(1)
    # rename columns w/ prev col names
    encoded_user_df = encoded_user_df.rename(columns=rev_key_mappings) 
    encoded_user_df.columns.values[[84, 85]] = ['No.1', 'Yes.1']
    return encoded_user_df


def predict(user_data):
    with open("content/xg_model.pickle", 'rb') as file:
        model = pickle.load(file)
    df = extract_user_df(user_data) 
    preprocessed_df = preprocess(df)
    preprocessed_df.drop(['FraudFound_P'], axis=1, inplace=True)  # drop label col 
    # return preprocessed_df
    prediction = model.predict(preprocessed_df)
    if prediction[0] == 0:
        return "False"
    else:
        return "True"
