from flask import Flask, render_template, send_file, request
from prediction import predict
app = Flask(__name__) 

@app.route("/")
def main():
    return "hello" 

@app.route("/predict", methods=['POST'])
def predict_page():
   if request.method == 'POST':
        formData = request.get_data()
        print(formData)
        # Run Model and Return True Or False
        # predict()
        # return "predict" # TODO: send response to frontend
        return "Success", 200  
    

@app.route("/about")
def about_page():
    return "about" 

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
