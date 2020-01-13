'use strict';

var https = require('https');

exports.main_handler = (event, context, callback) => {
  console.log('%j', event);
  // console.log('%j', event.body);
  const body = JSON.parse(event.body);
  // console.log('%j', body.pusher.name);
  var content = body.pusher.name + " just finished：\n";
  body.commits.forEach(element => {
    content += "><font color=\"comment\">"+element.timestamp+"</font> ["+element.message+"]("+element.url+") \n";
  });
  console.log('%j', content);

  //FIXME use your own key here.
  const webhook_key='9f000f73-0000-0000-0000-087d3000001c';
  const options = {
    hostname: 'qyapi.weixin.qq.com',
    port: 443,
    path: '/cgi-bin/webhook/send?key='+webhook_key,
    method: 'POST'
  };
  var req = https.request(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
      res.on('end', function (chunk) {
          console.log('Response ENDED');
      });
  });
  req.setHeader('Content-Type', 'application/json');

  
  req.on('error', function(e) {
      console.error('problem post to qyapi.weixin: ' + e.message);
  });
  
  req.write(JSON.stringify({
    msgtype: "markdown",
    markdown: {
        content: content
    }
  }));
  req.end();

  callback(null, 'OK');
};
