from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# In-memory feedback storage
feedback_list = []

# POST: Submit feedback
@app.route('/feedback', methods=['POST'])
def receive_feedback():
    data = request.json
    if not data or not data.get('name') or not data.get('message'):
        return jsonify({"error": "Invalid input"}), 400

    feedback_list.append(data)
    return jsonify({"message": "Feedback received", "data": data}), 200

# GET: Return all feedback
@app.route('/feedback', methods=['GET'])
def get_feedback():
    return jsonify(feedback_list), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Updated to work in Docker
