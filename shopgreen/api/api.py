from flask import Flask
from flask_cors import CORS
import database

app = Flask(__name__)
CORS(app)


@app.route('/test')
def search():
    database.mycursor.execute('SELECT * FROM Businesses WHERE Category = "Pets"')
    response = database.mycursor.fetchall()
    return {'test': str(response)}


@app.route('/health-and-beauty')
def health_query():
    database.mycursor.execute('SELECT * FROM Businesses WHERE (Category = "Wellness (Health & Beauty)" '
                              'OR Category = "Wellness" OR Category = "Wellness ")')
    response = database.mycursor.fetchall()
    final = ''
    for x in response:
        temp = ''
        for y in x:
            temp += y + "\t"
        final += temp + "\n\n\n"

    return {'response': final}


@app.route('/travel-and-transportation')
def travel_query():
    database.mycursor.execute('SELECT * FROM Businesses WHERE (Category = "Travel " OR Category = "Travel" '
                              'OR Category = "Transportation" OR Category = "Travel (Transportation)")')
    response = database.mycursor.fetchall()
    return {'response': str(response)}


@app.route('/food')
def food_query():
    database.mycursor.execute('SELECT * FROM Businesses WHERE (Category = "Food")')
    response = database.mycursor.fetchall()
    return {'response': str(response)}


@app.route('/fashion-and-style')
def fashion_query():
    database.mycursor.execute('SELECT * FROM Businesses WHERE (Category = "Fashion" '
                              'OR Category = "Style (Fashion)")')
    response = database.mycursor.fetchall()
    return {'response': str(response)}


@app.route('/home-and-garden')
def home_query():
    database.mycursor.execute('SELECT * FROM Businesses WHERE (Category = "Home" '
                              'OR Category = "Garden" OR Category = "Home & Garden")')
    response = database.mycursor.fetchall()
    return {'response': str(response)}


@app.route('/fun')
def fun_query():
    database.mycursor.execute('SELECT * FROM Businesses WHERE (Category = "Fun" '
                              'OR Category = "Fun (Culture, Attractions and Events)")')
    response = database.mycursor.fetchall()
    return {'response': str(response)}


@app.route('/pets')
def pets_query():
    database.mycursor.execute('SELECT * FROM Businesses WHERE (Category = "Pets")')
    response = database.mycursor.fetchall()
    return {'response': str(response)}


@app.route('/kids')
def kids_query():
    database.mycursor.execute('SELECT * FROM Businesses WHERE (Category = "Kids")')
    response = database.mycursor.fetchall()
    return {'response': str(response)}

