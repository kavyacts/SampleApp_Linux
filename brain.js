var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "useYourMerchantId",
  publicKey: "useYourPublicKey",
  privateKey: "useYourPrivateKey"
});

app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

app.post("/payment-methods", function (req, res) {
  var nonce = req.body.payment_method_nonce;
  // Use payment method nonce here
});

gateway.transaction.sale({
  amount: '10.00',
  paymentMethodNonce: nonceFromTheClient,
}, function (err, result) {
});