from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask import make_response
from models import db, User, Game, Question, Answer, QuestionSet
from datetime import datetime
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__)
app.secret_key = os.getenv('CLIENT_SECRET')
CORS(app, origins=['http://localhost:3000'])
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)

db.init_app(app)


@app.post('/api/user')
def post_user():
    try:
        data = request.get_json()

        username = data.get('username')
        password = data.get('password')
        firstname = data.get('firstname')
        lastname = data.get('lastname')
        birthday = data.get('birthday')


        existing_profile = User.query.filter_by(username=username).first()

        if existing_profile:
            return {'error': 'Profile with this username already exists'}, 400
        
        new_user = User(
            username=username,
            password=bcrypt.generate_password_hash(password),
            firstname=firstname,
            lastname=lastname,
            birthday=birthday,
        )
        db.session.add(new_user)
        db.session.commit()

        return {'message': 'New user saved succesfully'}, 201
    
    except Exception as e:
        print(e)
        return {'error': 'Error saving user profile'}, 400




@app.post('/api/login')
def post_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid username or password'}), 401

    session['user_id'] = user.id
    print(user.id)
    print("login")
    return jsonify({'message': 'Login successful', 'id': user.id}), 200

@app.post('/api/logout')
def post_logout():
    session.pop("user_id", None)
    return jsonify({'message': 'Logout successful'}), 200


if __name__ == '__main__':
    app.run(port=5555, debug=True)