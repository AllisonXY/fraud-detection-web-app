from flask import Flask

app = Flask(__name__)

@app.route("/")
def main():
    return "here is the main page"


@app.route("/predict")
def predict():
    return {'transactions': ['t1', 't2', 't3']}

if __name__ == '__main__':
    # run app at http://192.168.0.14:5000/
    app.run(host='0.0.0.0', port=5000, debug=True)
