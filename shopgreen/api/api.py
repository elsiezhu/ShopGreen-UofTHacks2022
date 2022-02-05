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
