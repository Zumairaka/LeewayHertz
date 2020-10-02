var express = require('express');
var router = express.Router();

// transfer user data
router.post('/', async function(req, res, next) {
  var data = req.body;
  console.log(data);

  // retrieve account
  await web3.eth.getAccounts().then(async (accounts) => {
    console.log(accounts);
      //sending data to the chain
    await contract.methods.setUser(data.trId, data.uname, data.age).send({from: accounts[0], gas: 6000000 })
            .on( 'transactionHash', (hash) => {
                res.send('Transfer is Successful');
            }).on( 'error', (error) => {
                console.log(error.message);
                res.send('Transfer Failed. Reason is: ' + error.message);
            });
  });
});


// get user data
router.post('/getData', async function(req, res, next) {
  var trId = req.body.trId;

  // retrieve account
  await web3.eth.getAccounts().then(async (accounts) => {
      //get user data from the chain
    await contract.methods.getUser(trId).call({from: accounts[0]}).then((userData) => {
        var user = {trId : trId, name: userData.name, age: userData.age};
        res.render('user', {user});
    });      
  });
});

module.exports = router;