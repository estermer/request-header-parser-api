var express = require('express');
var app = express();

app.get('/api/whoami', (req, res) => {
  console.log(req.ip);
  res.json({
    "ipaddress": req.ip,
    "language": req.rawHeaders[15],
    "software": req.rawHeaders[9]
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('//****LISTENING ON 3000****//');
});
