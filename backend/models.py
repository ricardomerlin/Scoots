from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import ForeignKey, MetaData
from datetime import datetime


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users_table'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    firstname = db.Column(db.String(80), nullable=False)
    lastname = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    games = db.relationship('Game', back_populates='players')
    
    def __repr__(self):
        return f'<User {self.username}>'
    
class Game(db.Model, SerializerMixin):
    __tablename__ = 'games_table'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    creator_id = db.Column(db.Integer, ForeignKey('users_table.id'))

    players = db.relationship('User', back_populates='games')
    # questions = db.relationship('Question', back_populates='games')
    
    def __repr__(self):
        return f'<Game {self.name}>'
    
class Question(db.Model, SerializerMixin):
    __tablename__ = 'questions_table'

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(80), nullable=False)
    answer = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    answer_id = db.Column(db.String(400), ForeignKey('answers_table.id'), nullable=True)
    games = db.relationship('Game', back_populates='questions')

    def __repr__(self):
        return f'<Question {self.question}>'
    
class Answer(db.Model, SerializerMixin):
    __tablename__ = 'answers_table'

    id = db.Column(db.Integer, primary_key=True)
    answer = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    games = db.relationship('Game', back_populates='answers')

    def __repr__(self):
        return f'<Answer {self.answer}>'
    
class QuestionSets(db.Model, SerializerMixin):
    __tablename__ = 'question_sets_table'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    questions = db.relationship('Question', back_populates='question_sets')

    def __repr__(self):
        return f'<QuestionSet {self.name}>'