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
CORS(app, origins=['http://localhost:5173'])
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)

db.init_app(app)

@app.get('/')
def home():
    return 'Hello World!'

@app.get('/api/check_session')
def check_session():
    user = db.session.get(User, session.get('user_id'))
    print(f'check session {session.get("user_id")}')
    if user:
        return user.to_dict(rules=['-password']), 200
    else:
        return {"message": "No user logged in"}, 401

@app.get('/api/user/<int:id>')
def get_user_by_id(id):
    user = db.session.get(User, id)
    if not user:
        return {'Error': 'User not found'}
    user_dict = user.to_dict()
    return user_dict, 202

@app.post('/api/user')
def post_user():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        firstname = data.get('firstName')
        lastname = data.get('lastName')

        existing_profile = User.query.filter_by(username=username).first()
        if existing_profile:
            return {'error': 'Profile with this username already exists'}, 400
        new_user = User(
            username=username,
            password=bcrypt.generate_password_hash(password),
            firstname=firstname,
            lastname=lastname,
        )
        db.session.add(new_user)
        db.session.commit()

        return {'message': 'New user saved succesfully'}, 201
    
    except Exception as e:
        print(e)
        return {'error': 'Error saving user profile'}, 400
    
@app.post('/api/question')
def post_question():
    try:
        data = request.get_json()
        question = data.get('question')
        answer = 'testing'
        question_set_id = data.get('questionSetID')

        new_question = Question(
            question=question,
            answer=answer,
            question_set_id=question_set_id,
            game_id=1
        )

        db.session.add(new_question)
        db.session.commit()
        print(question)
        print(question_set_id)
        
        return {'message': 'Saved question'}
    except Exception as e:
        print(e)
        return {'error': 'Error saving question'}, 400
    
@app.post('/api/questionset')
def post_questionset():
    try:
        data = request.get_json()
        name = data.get('title')
        created_by=data.get('userID')

        existing_title = QuestionSet.query.filter_by(name=name).first()
        print(existing_title)
        if existing_title:
            return {'error': 'Title already exists'}, 400
        new_questionset = QuestionSet(
            name=name,
            created_at=datetime.utcnow(),
            created_by=created_by,
        )
        print('about to add')
        print(new_questionset)
        db.session.add(new_questionset)
        print('about to commit')
        db.session.commit()
        return jsonify(id=new_questionset.id), 201
    except Exception as e:
        print(e)
        return {'error': 'Error saving question set'}, 400
    
@app.post('/api/answer')
def post_answer():
    try:
        data = request.get_json()
        answer_text = data.get('answer')
        question_id = data.get('questionID')

        new_answer = Answer(
            answer=answer_text,
            question_id=question_id
        )

        print(new_answer)

        db.session.add(new_answer)
        db.session.commit()
        
        return {'message': 'Answer saved successfully', 'id': new_answer.id}, 201
    except Exception as e:
        print(e)
        return {'error': 'Error saving answer'}, 400


@app.post('/api/login')
def post_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid username or password'}), 401

    session['user_id'] = user.id
    return jsonify({'message': 'Login successful', 'id': user.id}), 200

@app.post('/api/logout')
def post_logout():
    session.pop("user_id", None)
    return jsonify({'message': 'Logout successful'}), 200


if __name__ == '__main__':
    app.run(port=5555, debug=True)