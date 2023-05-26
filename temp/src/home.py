from flask import Blueprint, render_template

# create a blueprint obj called home
home = Blueprint('welcome', __name__)

@home.route('/')
def home_page():
    return render_template("home.html")
