from flask import Flask 

app = Flask("_myapp_")

@app.route('/', methods=['GET'])

def mensagem():
    return 'oi meu nome é python'

app.run()