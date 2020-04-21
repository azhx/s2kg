from flask import Flask, render_template
import os
import numpy as np

app = Flask(__name__, static_folder='static')

@app.route('/')
def main():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', 8080)), debug=True)
