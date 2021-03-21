'use strict';

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth:{
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

module.exports.handle = async (event, context, callback) => {
  if(event.httpMethod === "POST" && event.body){
    const body = JSON.parse(event.body)

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: body.email,
      replyTo: body.email, /*colocar email do cliente*/
      subject: body.subject,
      cc: body.cc,
      text: body.text,
    })
    .then(info => {
      return callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(
          {
            message: 'Request Successful!',
            input: info,
          },
        ),
      })
    })
    .catch(err => {
      return callback(null, {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(
          {
            message: 'Request not succeed!',
            input: err
          },
        ),
      })
    })
  }
  else{
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify(
        {
          message: 'use POST method',
        },
      ),
    })
  }
};
