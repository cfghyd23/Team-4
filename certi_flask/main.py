from flask import Flask, render_template, request, send_file
from generate_cert import generate_certificate
app = Flask(__name__)


@app.route("/", methods=["POST"])
def index():
    if request.method == "POST":
        # get the json
        json = request.json
        name = json["name"]
        result = generate_certificate(name)
        if result:
            return send_file(f"certificates/{result}.pdf", as_attachment=True)


@app.route("/generate", methods=["POST"])
def generate():
    if request.method == "POST":
        # get the json
        json = request.json
        name = json["name"]
        result = generate_certificate(name)
        if result:
            return result


@app.route("/<certificate_id>", methods=["GET"])
def certificate(certificate_id):
    return send_file(f"certificates/{certificate_id}.pdf", as_attachment=True)


if __name__ == "__main__":
    app.run(debug=True)
