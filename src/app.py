from flask import Flask, render_template, request, jsonify, Blueprint
from models import todo  # call model file
from flask_cors import CORS  # to avoid cors error in different frontend like react js or any other
import json

app = Flask(__name__)
api = Blueprint("api", __name__, url_prefix="/api")
news = todo.Todo()

@app.route("/")
def index():
    return render_template("index.html")

# todo routes
@api.route('/news', methods=['GET'])
def get_news():
    return jsonify(news.find({})), 200


@api.route('/news/<string:news_id>', methods=['GET'])
def get_task(news_id):
    return news.find_by_id(news_id), 200


@api.route('/news', methods=['POST'])
def add_news():
    title = request.json.get('title')
    writer = request.json.get('writer')
    text = request.json.get('text')
    response = news.create({'title': title, 'writer': writer, 'text': text})
    return response, 201


@api.route('/news/<string:news_id>', methods=['PUT'])
def update_news(news_id):
    title = request.json.get('title')
    writer = request.json.get('writer')
    text = request.json.get('text')
    response = news.update(news_id, {'title': title, 'writer': writer, 'text': text})
    return response, 201


@api.route('/news/<string:news_id>', methods=['DELETE'])
def delete_news(news_id):
    news.delete(news_id)
    return "Record Deleted"

app.register_blueprint(api)
# CORS(app)

if __name__ == '__main__':
    app.run(debug=True)
