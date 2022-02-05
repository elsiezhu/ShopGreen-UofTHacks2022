from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/test')
def test():
    return {'test': 5 + 3 // 2}
