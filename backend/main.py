from flask import Flask, request
import mysql.connector
from prediction import predict

app = Flask(__name__) 

# Replace the following placeholders with your own MySQL credentials
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "admin",
    "database": "Fraud_detect"
}

# Create a connection to the database
connection = mysql.connector.connect(**db_config)
cursor = connection.cursor()

@app.route("/")
def main():
    return "hello" 


@app.route("/predict", methods=['POST', 'GET'])
def predict_page():
    formData = {"Hello":"Where is the form data?"}
    if request.method == 'POST':
        formData = request.get_json()
        is_fraud = predict(formData)
        print("----------------------------------------------")
        print(f"Hey, you are {('qualified' if not is_fraud else 'unqualified')} for the insurance claim.")
        print("----------------------------------------------")
        return {"fraud" : is_fraud}, 200    
    return formData, 200
    

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
