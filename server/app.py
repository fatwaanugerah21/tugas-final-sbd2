from cmath import log
from crypt import methods
from flask import Flask, render_template, request, jsonify, Blueprint
from models import news,category  # call model file
from flask_cors import CORS  # to avoid cors error in different frontend like react js or any other
import json

app = Flask(__name__)
news_api = Blueprint("news_api", __name__, url_prefix="/api/news")
categories_api = Blueprint("categories_api", __name__, url_prefix="/api/categories")

news_model = news.News()
category_model = category.Category()

@app.route("/")
def index():
    return render_template("index.html")

def get_news_filter(request):
    if not request.is_json:
        return {}

    return { "category": request.json.get("category") }

# todo routes
@news_api.route('', methods=['GET'])
def get_news(): 
    start = request.args.get("start")
    limit = request.args.get("limit")

    filter = get_news_filter(request)
    news = news_model.find(filter, int(start), int(limit))
    return jsonify(news), 200


@news_api.route('/<string:news_id>', methods=['GET'])
def get_task(news_id):
    return news_model.find_by_id(news_id), 200


@news_api.route('', methods=['POST'])
def add_news():
    title = request.json.get('title')
    writer = request.json.get('writer')
    text = request.json.get('text')
    category = request.json.get('category')
    response = news_model.create({'title': title, 'writer': writer, 'text': text, 'category': category})
    return response, 201


@news_api.route('/<string:news_id>', methods=['PUT'])
def update_news(news_id):
    title = request.json.get('title')
    writer = request.json.get('writer')
    text = request.json.get('text')
    category = request.json.get('category')
    response = news_model.update(news_id, {'title': title, 'writer': writer, 'text': text, 'category': category})
    return response, 201


@news_api.route('/<string:news_id>', methods=['DELETE'])
def delete_news(news_id):
    news_model.delete(news_id)
    return "Record Deleted"

@categories_api.route('', methods=['GET'])
def get_categories():
    categories = category_model.find({})
    return jsonify(categories), 200

@categories_api.route('', methods=['POST'])
def post_category():
    name = request.json.get('name')
    return category_model.create({'name': name})

app.register_blueprint(news_api)
app.register_blueprint(categories_api)
# CORS(app)

if __name__ == '__main__':
    app.run(debug=True)
