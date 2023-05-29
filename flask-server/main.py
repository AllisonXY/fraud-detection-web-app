from flask import Flask, render_template, send_file
import os
from os import path

project_dir = path.abspath(path.join(__file__ ,"../.."))
templates_dir = os.path.join(project_dir, "client","src","components","templates")

app = Flask(__name__, template_folder = templates_dir)

@app.route("/")
def main():
    homepage_path = os.path.join(templates_dir, "home.html")
    return send_file(homepage_path)
    # return render_template("home.html")


@app.route("/predict")
def predict():
    return render_template("predict.html")

if __name__ == '__main__':
    # run app at http://192.168.0.14:5000/
    app.run(host='0.0.0.0', port=5000, debug=True)
