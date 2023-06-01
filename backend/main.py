from flask import Flask, render_template, send_file, request
from prediction import predict
import pandas as pd 
import mysql.connector


app = Flask(__name__) 

# Replace the following placeholders with your own MySQL credentials
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "1",
    "database": "Fraud_detect"
}

# Create a connection to the database
connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()


@app.route("/")
def main():
    return "hello" 


# user_data = [['Dec','Honda','Rural','Female','Divorced','Policy Holder',
#              'Sedan - All Perils','Sedan','20000 to 29000','1',
#              '300','none','2 Years','16 to 17',
#              'No','Yes','Internal','1995','Collision']]

@app.route("/predict", methods=['POST', 'GET'])
def predict_page():
    prediction = predict()  #TODO: pending reponse json
    return prediction

    # formData = {"hello":"where is form data?"}
    # if request.method == 'POST':
    #     formData = request.get_json()
    #     print(formData)
    #     prediction = predict(formData)
    #     # Run Model and Return True Or Fals
    #     # df=empty_df('content/cleaned_data.csv') #model dataframe
    #     # deductible = int(formData["Deductible"]) 
    #     # result = preprocess(formData.values())
    #     # prediction = predict(model, df, result, deductible) #run prediction

    #     return prediction.to_json(orient='split'), 200    
    # return formData,200
    


@app.route('/api/contact', methods=['POST', 'GET'])
def create_contact():
    contactData = request.get_json()
    print(contactData)
    name = contactData['name']
    email = contactData['email']
    phone = contactData['phone']
    inquiry = contactData['text']
    insert_data = "INSERT INTO Contacts (username, email, phone, inquiry) Values (%s, %s, %s, %s)"
    try:
        cursor.execute(insert_data, (name, email, phone, inquiry))
        connection.commit()
        return "Success", 200
    except Exception as e:
        return str(e)
    

    
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
