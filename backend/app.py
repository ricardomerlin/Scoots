from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask import make_response
from models import db
from datetime import datetime
from base64 import b64encode

import os

app = Flask(__name__)
app.secret_key = os.getenv('CLIENT_SECRET')
CORS(app, origins=['http://localhost:5173'])
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)

db.init_app(app)


if __name__ == '__main__':
    app.run(port=5555, debug=True)