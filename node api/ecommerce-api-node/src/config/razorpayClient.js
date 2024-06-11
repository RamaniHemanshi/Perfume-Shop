const Razorpay = require('razorpay');

apiKey="rzp_test_LFoDdBhUzmjFGN"
apiSecret="tjbsXynYrJ2MVBd89WTYEMvL"

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports=razorpay;