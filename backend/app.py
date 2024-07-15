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

@app.get('/user/<int:id>')
def get_user_by_id(id):
    user = db.session.get(User, id)
    if not user:
        return {'Error': 'User not found'}
    user_dict = user.to_dict()
    return user_dict, 202

@app.post('/user')
def post_user():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        firstname = data.get('firstName')
        lastname = data.get('lastName')

        existing_profile = User.query.filter_by(username=username).first()
        print(existing_profile)
        if existing_profile:
            return {'error': 'Profile with this username already exists'}, 400
        print('not existing profile')
        new_user = User(
            username=username,
            password=bcrypt.generate_password_hash(password),
            firstname=firstname,
            lastname=lastname,
        )
        print('new user was created')
        db.session.add(new_user)
        print('user was added')
        db.session.commit()

        return {'message': 'New user saved succesfully'}, 201
    
    except Exception as e:
        print(e)
        return {'error': 'Error saving user profile'}, 400
    
@app.post('/question')
def post_question(question):
    try:
        print(question)
        return {'message': 'Saved question'}
    except Exception as e:
        print(e)
        return {'error': 'Error saving question'}, 201
    
@app.post('/questionset')
def post_questionset():
    try:
        print('got here')
        data = request.get_json()
        print(data)
        for i in data:
            post_question(i)
        return {'message': 'New user saved succesfully'}, 201

    
    except Exception as e:
        print(e)
        return {'error': 'Error saving new question set'}





@app.post('/login')
def post_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid username or password'}), 401

    session['user_id'] = user.id
    return jsonify({'message': 'Login successful', 'id': user.id}), 200

@app.post('/logout')
def post_logout():
    session.pop("user_id", None)
    return jsonify({'message': 'Logout successful'}), 200


if __name__ == '__main__':
    app.run(port=5555, debug=True)