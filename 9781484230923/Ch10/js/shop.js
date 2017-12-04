/**
 * Builds PaymentRequest for credit cards, but does not show any UI yet.
 *
 * @return {PaymentRequest} The PaymentRequest oject.
 */
function initPaymentRequest() {
  var networks = ['amex', 'diners', 'discover', 'jcb', 'mastercard', 'unionpay',
      'visa', 'mir'];
  var types = ['debit', 'credit', 'prepaid'];
  var supportedInstruments = [{
    supportedMethods: networks,
  }, {
    supportedMethods: ['basic-card'],
    data: {supportedNetworks: networks, supportedTypes: types},
  }];

  var tcost = $(".subtotal-number").text().replace("$", "").trim();
  var vat = tcost - (tcost / 1.0575).toFixed(2);
  var scost = (tcost - vat).toFixed(2);


  var details = {
    total: {label: 'Total Cost:', amount: {currency: 'USD', value: tcost}},
    displayItems: [
      {
        label: 'Selected books:',
        amount: {currency: 'USD', value: scost},
      },
      {
        label: 'including VAT at 5.75%',
        amount: {currency: 'USD', value: vat}
      }      
    ],
  };

  return new PaymentRequest(supportedInstruments, details);
}

/**
 * Invokes PaymentRequest for credit cards.
 *
 * @param {PaymentRequest} request The PaymentRequest object.
 */
function onBuyClicked(request) {
  request.show().then(function(instrumentResponse) {
    sendPaymentToServer(instrumentResponse);
  })
  .catch(function(err) {
  	$("#buyButton").hide();
    $("#status").text(err);
  });
}

/**
 * Simulates processing the payment data on the server.
 *
 * @param {PaymentResponse} instrumentResponse The payment information to
 * process.
 */
function sendPaymentToServer(instrumentResponse) {
  // There's no server-side component of these samples. No transactions are
  // processed and no money exchanged hands. Instantaneous transactions are not
  // realistic. Add a 2 second delay to make it seem more real.
  window.setTimeout(function() {
    instrumentResponse.complete('success')
        .then(function() {
          $("#buyButton").hide();
          $("#result").text("Payment has been received - thankyou!")
        })
        .catch(function(err) {
          ChromeSamples.setStatus(err);
        });
  }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {

  var ProductList = new Ractive({
    el: '.products-list',
    template: '#product_item',
    data: {products: hardcodedProducts}
  });

  var Cart = new Ractive({
    el: '.cart-list',
    template: '#cart_item',
    data: {
      products: hardcodedCartProducts,
      subtotal: 0,
      payment: 'Proceed to payment'
    }
  });

  var Categories = new Ractive({
    el: '.categories-list',
    template: '#categories_item',
    data: {categories: hardcodedCategories}
  });

  ProductList.on({
    add: function (event) {

      this.set(event.resolve() + '.in_cart', true);

      Cart.push('products', event.get());
    },

    discard: function (event) {
      this.set(event.resolve() + '.in_cart', false);

      Cart.get('products').forEach(function (product, index) {
        if (event.get('id') === product.id) {
          Cart.splice('products', index, 1);
        }
      });

    }
  });

  Cart.on({
    plus: function (event, index) {
      var quantity = this.get(event.resolve() + '.quantity');
      
      if (quantity === 9999) return;
      this.set(event.resolve() + '.quantity', ++quantity);
    },
    minus: function (event, index) {
      var quantity = this.get(event.resolve() + '.quantity');
      
      if (quantity === 1) return;
      this.set(event.resolve() + '.quantity', --quantity);
    },
    remove: function (event, index) {

      Cart.get('products').forEach(function (product, index) {
        if (index === product.id) {
          this.set('products.' + index + '.in_cart', false);
        }
      });

      this.splice('products', index, 1);
    }
  });

  Cart.observe('products', function () {

    var subtotal = 0;

    this.get('products').forEach(function (product, index) {
      subtotal += product.price * product.quantity;
    });

    this.set('subtotal', (subtotal.toFixed(2)+''));
  });

  Categories.on({
    toggle: function (event) {
      if (event.get('active')) {
        return;
      }

      this.set('categories.*.active', false);
      this.set(event.resolve() + '.active', true);

      ProductList.get('products').forEach(function (product, index) {
        ProductList.set('products.' + index + '.hidden', event.get('id') !== 1 && event.get('id') !== product.category);
      });

    }
  });

  // add event handler to initiate payment
  document.getElementById("buyButton").addEventListener("click", function() {
		if (window.PaymentRequest) {
	  	let request = initPaymentRequest();
		  onBuyClicked(request);
		  request = initPaymentRequest();
		}
  })
});


/**
	POJOS
**/
var hardcodedProducts = [
	{
		id: 1,
		name: 'Product #1',
		image: './img/book1',
		category: 5,
		price: '19.99',
		in_cart: true,
		hidden: false,
    quantity: 1
	},
	{
		id: 4,
		name: 'Product #4',
		image: './img/book2',
		category: 5,
		price: '19.99',
		in_cart: false,
		hidden: false,
    quantity: 1
	},
	{
		id: 6,
		name: 'Product #6',
		image: './img/book3',
		category: 4,
		price: '34.99',
		in_cart: false,
		hidden: false,
    quantity: 1
	},
	{
		id: 8,
		name: 'Product #8',
		image: './img/book4',
		category: 3,
		price: '19.99',
		in_cart: false,
		hidden: false,
    quantity: 1
	},
	{
		id: 10,
		name: 'Product #10',
		image: './img/book5',
		category: 3,
		price: '24.99',
		in_cart: false,
		hidden: false,
    quantity: 1
	},
	{
		id: 7,
		name: 'Product #7',
		image: './img/book6',
		category: 2,
		price: '29.99',
		in_cart: false,
		hidden: false,
    quantity: 1
	},
	{
		id: 9,
		name: 'Product #9',
		image: './img/book7',
		category: 3,
		price: '24.99',
		in_cart: false,
		hidden: false,
    quantity: 1
	},
	{
		id: 2,
		name: 'Product #2',
		image: './img/book8',
		category: 3,
		price: '24.99',
		in_cart: false,
		hidden: false,
    quantity: 1
	}
];

var hardcodedCartProducts = [
	{
		id: 1,
		name: 'Product #1',
		image: './img/book1',
		price: '19.99',
    quantity: 1
	}
];

var hardcodedCategories = [
	{
		id: 1,
		name: "All",
		active: true
	},
	{
		id: 2,
		name: "e-Commerce",
		active: false
	},
	{
		id: 3,
		name: "Beginning",
		active: false
	},
	{
		id: 4,
		name: "Pro",
		active: false
	},	
	{
		id: 5,
		name: "Node.js",
		active: false
	}
];