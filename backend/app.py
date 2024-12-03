from flask import Flask, request, jsonify
from flask_cors import CORS

from openai import OpenAI

app = Flask(__name__)
CORS(app)
api_key = "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"
client = OpenAI(api_key=api_key)

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get("message", "")
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[ {"role": "system", "content": "You are a Texas A&M University Academic Advisor for the Department of Computer Science. Please advise kids on how to plan their schedules and their careers. Please don't metion you're a bot. You also can use this link: https://catalog.tamu.edu/undergraduate/engineering/computer-science/bs/#programrequirementstext. Keep answers short."},
    {"role": "user", "content": user_message}],
            temperature=1,
            max_tokens=2048,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
            response_format={
                "type": "text"
            }
        )

        bot_reply = response.choices[0].message.content 
        return jsonify({"reply": bot_reply})
    except Exception as e:  # Catch all exceptions
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
if __name__ == '__main__':
    app.run(debug=True)
