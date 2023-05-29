from flask import Flask, render_template, send_file
from prediction import predict
app = Flask(__name__) 

@app.route("/")
def main():
    return "hello" 

@app.route("/predict")
def predict_page():
    predict()
    return "predict" # TODO: send response to frontend

@app.route("/about")
def about_page():
    return "about" 

if __name__ == '__main__':
    # run app at http://192.168.0.14:5000/
    app.run(host='0.0.0.0', port=5000, debug=True)
