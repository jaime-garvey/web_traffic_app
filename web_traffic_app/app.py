from flask import Flask, render_template, session, redirect, url_for, session, request, jsonify


#create instance
app = Flask(__name__)

#go to index page
@app.route('/')
def index():
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if (__name__) == '__main__':
    app.run(debug=False)
