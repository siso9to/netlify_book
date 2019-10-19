exports.handler = function (event, context, callback) {
  const response = {
    "text": "オススメの泣けるアニメ",
    "attachments": [
      {
        "text": "CLANNAD AFTER STORY"
      },
      {
        "text": "ヴァイオレット・エヴァーガーデン"
      }
    ]
  }

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(response)
  })
}