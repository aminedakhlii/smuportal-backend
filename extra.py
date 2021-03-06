from flask import Flask
app = Flask(__name__)


if __name__ == '__main__':
    app.run(debug=True , host="0.0.0.0" , port="5000")

@app.route('/' , methods=[GET])
def sortByKey(array , k):
    array.sort(key = lambda x: k , reverse=True)
    return array
