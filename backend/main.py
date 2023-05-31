from flask import Flask, render_template, send_file, request
from prediction import predict
from flask import request
app = Flask(__name__) 

import mysql.connector

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

@app.route("/predict", methods=['POST'])
def predict_page():
   if request.method == 'POST':
        formData = request.get_json()
        print(formData)
        # Run Model and Return True Or False
        # predict()
        # return "predict" # TODO: send response to frontend
        return "Success", 200  
    

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
