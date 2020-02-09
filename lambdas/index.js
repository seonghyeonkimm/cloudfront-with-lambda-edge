const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: 'ap-northeast-2' });

exports.handler = async (event, context, callback) => {
  const { uri } = event.Records[0].cf.request
  const title = uri.includes('/hello') ? 'Hello Page' : 'Index Page';

  const html = await new Promise((resolve, reject) => {
    s3.getObject({
      Bucket: 'cloudfront-lambdaedge',
      Key: 'index.html',
    }, (err, data) => {
      if (err) {
        callback(err, null);
        reject(err);
        return;
      }
      resolve(data.Body.toString());
    })
  })
  const updateHTML = html
    .replace(/(<title>)(.*)(<\/title>)/, `$1${title}$3`)

  return callback(null, {
    status: '200',
    statusDescription: 'OK',
    headers: {
      'content-type': [{
          key: 'Content-Type',
          value: 'text/html'
      }],
      'content-encoding': [{
          key: 'Content-Encoding',
          value: 'UTF-8'
      }],
    },
    body: updateHTML,
  });
};
