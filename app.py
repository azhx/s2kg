import os
import numpy as np
from buildtree import get_data
from flask import Flask, request, render_template, jsonify

app = Flask(__name__, static_folder='static')

def buildgraph(accessor):
    graph = get_data(accessor)
    return (jsonify(graph))

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/buildgraph', methods=['GET'])
def getgraph():
    accessor = request.args.get('accessor')
    print(accessor)
    return buildgraph(accessor)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', 8080)), debug=True)
