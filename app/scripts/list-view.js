var ListView = Backbone.View.extend({
	className: 'list-item',

	createTemplate: _.template($('#list-item-template').text()),

	events: {
		'click': 'setMainItem'
	},

	initialize: function(){
		$('.js-contact-list').prepend( this.el );
		
		this.render();

	},


	setMainItem: function(){
		new MainView({model: this.model})

		console.log(this.model.attributes)

	},

	render: function(){
		var renderedTemplate = this.createTemplate( this.model.attributes )

		this.$el.html( renderedTemplate );

	}

});






var ListView = Backbone.View.extend({
  
  tagName: 'a',

  className: 'list-view list-group-item clearfix',

  initialize: function() {
    this.setHref();
    this.render();
    $('.list-viewer').append( this.el );
  },

  renderTemplate: _.template($('#list-view-template').text()),

  render: function () {
    this.$el.html(this.renderTemplate(this.model));
  },

  setHref: function(){
    // console.log('line 20 list-view.js :    ', this.model.get('listing_id'));
    var id = this.model.get('listing_id');
    var link = '#/items/' + id;
    this.$el.attr({href: link});
  }

});