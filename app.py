import os
import numpy as np
from buildtree import get_data
from flask import Flask, request, render_template, jsonify

app = Flask(__name__, static_folder='static')

def buildgraph(accessor, breadth):
    try:
        graph = get_data(accessor, breadth)
        return (jsonify(graph)), graph
    except:
        graph = None
        return jsonify({'error': 'Paper not found'}), graph   

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/buildgraph', methods=['GET'])
def getgraph():
    accessor = request.args.get('accessor')
    breadth = int(request.args.get('breadth'))
    print(accessor, breadth)
    jsongraph, graph = buildgraph(accessor, breadth)
    print(graph)
    return jsongraph


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', 8080)), debug=True)
# host='0.0.0.0', port=int(os.getenv('PORT', 8080)), debug=True
