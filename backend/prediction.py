
import numpy as np
import pickle
import pandas as pd
from sklearn.preprocessing import OneHotEncoder

categorical_cols = ['Make','AccidentArea','Sex','MaritalStatus','Fault','PolicyType','VehicleCategory',
             'VehiclePrice','PastNumberOfClaims','AgeOfVehicle','AgeOfPolicyHolder',
             'PoliceReportFiled','WitnessPresent','AgentType','Year','BasePolicy']
# testing
user_data = [['Dec','Honda','Rural','Female','Divorced','Policy Holder',
             'Sedan - All Perils','Sedan','20000 to 29000','1',
             '300','none','2 Years','16 to 17',
             'No','Yes','Internal','1995','Collision']]
    

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

def preprocess(user_data):  
    with open('content/original_data.pickle', 'rb') as file:
        df = pickle.load(file)
    user_df = pd.DataFrame(user_data,columns=df.columns)
    concatenated_df = pd.concat([df, user_df], axis=0)
    encoded_df = categorical_to_numerical(concatenated_df)
    encoded_df.reset_index(drop=True, inplace=True)
    encoded_user_df = encoded_df.tail(1)
    return encoded_user_df


# transform raw input to df
def empty_df(json_str):

    df.drop('FraudFound_P', axis = 1, inplace = True)
    column_headers = list(df.columns)
    df_ip = pd.DataFrame(columns=column_headers, index=[0])
    return df_ip.fillna(0)

def predict(user_data, deductible = None):
    with open("content/xg_model.pickle", 'rb') as file:
        model = pickle.load(file)

    preprocessed_user_data = preprocess(user_data)
    return preprocessed_user_data
    # for ip in user:
    #     df[ip].iloc[0] = 1
    #     df['Deductible'].iloc[0] = deductible
    #     y_pred = model.predict(df)
    # return y_pred
    #if 1 then fraud, 0 not fraud
