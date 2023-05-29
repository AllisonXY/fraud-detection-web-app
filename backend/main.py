from flask import Flask, render_template, send_file
import os
from os import path

app = Flask(__name__) 

@app.route("/")
def main():
    return "hello"


@app.route("/predict")
def predict():
    return render_template("predict.html")

if __name__ == '__main__':
    # run app at http://192.168.0.14:5000/
    app.run(host='0.0.0.0', port=5000, debug=True)
