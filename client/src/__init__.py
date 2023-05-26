from flask import Flask
from .home import home
from .predict import predict

def create_app():
    app = Flask(__name__, template_folder='../templates')
    app.register_blueprint(home, url_prefix='/') # set prefix for views under home blueprint
    app.register_blueprint(predict, url_prefix='/predict')
    return app
