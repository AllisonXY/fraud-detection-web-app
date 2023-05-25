from src import create_app

app = create_app()

if __name__ == '__main__':
    # run app at http://192.168.0.14:5000/
    app.run(host='0.0.0.0', port=5000)
