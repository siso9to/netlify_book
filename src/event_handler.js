exports.handler = function (event, context, callback) {
  const body = JSON.parse(event.body)
  console.log(JSON.stringify(body, bull, 4))

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: body.challenge
  })
}