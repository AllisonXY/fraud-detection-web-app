# class to make prediction given user input
from flask import Blueprint, render_template

predict = Blueprint('predict', __name__)

def load_model():
    pass

def preprocess():
    pass

@predict.route('/')
def prediction():
    return render_template("predict.html")

