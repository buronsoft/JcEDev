const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/app/dist/jc-eapp'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/app/dist/jc-eapp/index.html'));});
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });