# class to initialize the app

from flask import Flask
from src.welcome import welcome
from .predict import predict

def create_app():
    app = Flask(__name__, template_folder='../templates') # templates folder should be same level as init class
    app.register_blueprint(welcome, url_prefix='/')
    app.register_blueprint(predict, url_prefix='/predict/')
    return app
