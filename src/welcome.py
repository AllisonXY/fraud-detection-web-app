from flask import Blueprint, render_template

# create a blueprint obj called welcome
welcome = Blueprint('welcome', __name__)

@welcome.route('/')
def page_welcome():
    return render_template("welcome.html")
