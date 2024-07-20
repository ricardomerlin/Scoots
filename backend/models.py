from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users_table'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    firstname = db.Column(db.String(80), nullable=False)
    lastname = db.Column(db.String(80), nullable=False)
    member_since = db.Column(db.DateTime, default=datetime.utcnow)

    games = db.relationship('Game', back_populates='creator')
    question_sets = db.relationship('QuestionSet', back_populates='creator')

    serialize_rules = ('-games.creator', '-question_sets.creator')

    def __repr__(self):
        return f'<User {self.username}>'

class Game(db.Model, SerializerMixin):
    __tablename__ = 'games_table'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    creator_id = db.Column(db.Integer, db.ForeignKey('users_table.id'))
    question_set_id = db.Column(db.Integer, db.ForeignKey('question_sets_table.id'))

    creator = db.relationship('User', back_populates='games')
    question_set = db.relationship('QuestionSet', back_populates='games')
    questions = db.relationship('Question', back_populates='game')

    serialize_rules = ('-creator.games', '-question_set.games', '-questions.game')

    def __repr__(self):
        return f'<Game {self.title}>'

class Question(db.Model, SerializerMixin):
    __tablename__ = 'questions_table'

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(80), nullable=False)
    answer = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    question_set_id = db.Column(db.Integer, db.ForeignKey('question_sets_table.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('games_table.id'))  # Add this line

    question_set = db.relationship('QuestionSet', back_populates='questions')
    game = db.relationship('Game', back_populates='questions')  # Modify this line
    answers = db.relationship('Answer', back_populates='question')

    serialize_rules = ('-game.questions', '-question_set.questions', '-answers.question')

    def __repr__(self):
        return f'<Question {self.question}>'

class Answer(db.Model, SerializerMixin):
    __tablename__ = 'answers_table'

    id = db.Column(db.Integer, primary_key=True)
    answer = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    question_id = db.Column(db.Integer, db.ForeignKey('questions_table.id'))

    question = db.relationship('Question', back_populates='answers')

    serialize_rules = ('-question.answers',)

    def __repr__(self):
        return f'<Answer {self.answer}>'

class QuestionSet(db.Model, SerializerMixin):
    __tablename__ = 'question_sets_table'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    created_by = db.Column(db.Integer, db.ForeignKey('users_table.id'))

    creator = db.relationship('User', back_populates='question_sets')
    games = db.relationship('Game', back_populates='question_set')
    questions = db.relationship('Question', back_populates='question_set')

    serialize_rules = ('-creator.question_sets', '-games.question_set', '-questions.question_set')

    def __repr__(self):
        return f'<QuestionSet {self.name}>'
