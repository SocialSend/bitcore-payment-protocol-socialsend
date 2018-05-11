'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on socialsendcore-payment-protocol Module: {0}'
};

module.exports = require('socialsendcore-lib').errors.extend(spec);
