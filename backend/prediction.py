
# class to make prediction given user input
from joblib import dump, load 
import numpy as np
from PIL import Image
import pickle
import pandas as pd

def load_model(path):
    loaded_model = pickle.load(open(path, "rb"))
    #dump(clf, 'fraudcheck.joblib')  saves object
    #clf = load('fraudcheck.joblib') loads object
    return loaded_model

_model = load_model("content/xg_model.pickle") 
def preprocess(form_data): 

    #format user input to predict
    #deductible = form_data["Deductible"]
    #ML team
    
    return form_data

def empty_df(path):
  df = pd.read_csv(path)
  df.drop('FraudFound_P', axis = 1, inplace = True)
  # df.drop('Unnamed: 0', axis = 1, inplace = True)
  column_headers = list(df.columns)
  df_ip = pd.DataFrame(columns=column_headers, index=[0])
  return df_ip.fillna(0)

def predict(model, df, user, deductible):
    for ip in user:
        df[ip].iloc[0] = 1
        df['Deductible'].iloc[0] = deductible
        y_pred = model.predict(df)
    return y_pred
    #if 1 then fraud, 0 not fraud

# load sklearn model
#filename = "knn.pickle"
df=empty_df('content/final_data.csv')

#loaded_model = pickle.load(open(filename, "rb"))
#y_predicted = loaded_model.predict(df)
#predict(_model,df,usr_ip,300)
