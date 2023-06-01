from flask import Flask, render_template, send_file, request
from prediction import predict
import pandas as pd 
import mysql.connector

app = Flask(__name__) 

# Replace the following placeholders with your own MySQL credentials
db_config = {
    "host": "localhost",
    "port": "3306",
    "user": "root", 
    "password": "admin",  # admin
    "database": "Fraud_detect"
}

# Create a connection to the database
connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()


@app.route("/")
def main():
    return "hello" 

user_data = [['Dec','Honda','Rural','Female','Divorced','Policy Holder',
             'Sedan - All Perils','Sedan','20000 to 29000','1',
             '300','none','2 Years','16 to 17',
             'No','Yes','Internal','1995','Collision']]

@app.route("/predict", methods=['POST', 'GET'])
def predict_page():
    # df = predict(user_data)
    # return df.to_json(orient='split')
   if request.method == 'POST':
        formData = request.get_json()
        print(formData)
        # Run Model and Return True Or Fals
        df=empty_df('content/cleaned_data.csv') #model dataframe
        deductible = int(formData["Deductible"]) 
        result = preprocess(formData.values())
        prediction = predict(model, df, result, deductible) #run prediction
        return prediction, 200  
   if request.method == 'GET':
    print("Working")
    return "Form received", 200
    

@app.route("/about")
def about_page():
    return "about" 

@app.route('/api/contact', methods=['POST', 'GET'])
def create_contact():
    name = 'ziqian'
    email = 'someemail@gmail.com'
    inquiry = "nothing we are awesome"
    insert_data = "INSERT INTO Contacts (username, email, inquiry) Values (%s, %s, %s)"
    try:
        cursor.execute(insert_data, (name, email, inquiry))
        connection.commit()
        return "Success", 200
    except Exception as e:
        return e
    

    
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
