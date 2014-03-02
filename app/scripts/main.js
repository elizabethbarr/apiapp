console.log('A Gilt app!');

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();


});








// console.log('\'Allo \'Allo!');

router = new MainRouter();

$.ajax({

  dataType: 'jsonp',

  url:'https://openapi.etsy.com/v2/listings/active.js?callback=etsyResults&fields=title,price,description,listing_id,url&includes=Images&api_key=kr9rjq7dc9c24jv6fccq2hus',

  data: '',

  success: function (responsePayload) {
    etsyItems = new EtsyItemsCollection(responsePayload.results);
    var itemCount = 0;
    // console.log('the -results- ', etsyItems);
    etsyItems.each( function(item) {
      // console.log('item count: ', itemCount++, 'item: ', item);
      new ListView({model: item});
    });
    Backbone.history.start();
  },

  error: function (msg) {
    // console.log('error', msg.statusText);
  }

});

// $.getJSON('https://openapi.etsy.com/v2/listings/active.js?callback=?&api_key=kr9rjq7dc9c24jv6fccq2hus',
//   function(results) {
    // console.log('getJSON results       ', results);
//   })














etsy-item.js

var EtsyItem = Backbone.Model.extend({


});

var EtsyItemsCollection = Backbone.Collection.extend({

  model: EtsyItem,

  url: 'http://tiny-pizza-server.herokuapp.com/collections/EtsyItemCollection'
});