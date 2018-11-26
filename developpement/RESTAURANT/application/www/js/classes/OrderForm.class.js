'use strict';



var OrderForm = function()
{
	this.form          = $('#order-form');
    this.meal          = $('#meal');
    this.mealDetails   = $('#meal-details');
    this.orderSummary  = $('#order-summary');
    this.addMeal         = $('#order-form button');
    this.validateOrder = $('#validate-order');
		this.addItem = $('#addItem');
		this.basket = new BasketSession();
}


OrderForm.prototype.onChangeMeal = function()
{
	var mealId = this.meal.val();
    console.log(mealId);

    console.log(getRequestUrl());

	$.getJSON
    (
        getRequestUrl() + '/meal?id=' + mealId, // URL vers un contrôleur PHP
        this.onAjaxChangeMeal.bind(this)        // Méthode appelée au retour de la réponse HTTP
    );
}


OrderForm.prototype.onAjaxChangeMeal = function(response)
{
	console.log(response);
    console.log(getWwwUrl());

	var imageUrl = getWwwUrl() + '/images/meals/' + response.Photo;

    $('#meal-details').children('p').text(response.Description);
    $('#meal-details').find('strong').text(parseFloat(response.SalePrice).toFixed(2));
    $('#meal-details').children('img').attr('src', imageUrl);
    $('#order-form').find('input[name=salePrice]').val(response.SalePrice);
}

OrderForm.prototype.onClickAddItem = function(event) {
	event.preventDefault();

	var mealId = $('#meal').val();
	var name = $('#meal').find('option:selected').text();
	var price = parseFloat($('#meal-details strong').text());
	var  quantity = parseInt($('#quantity').val());

	this.basket.addItem(mealId, name, price, quantity);
}

OrderForm.prototype.recupIdTrash = function(event)
{
	event.preventDefault();
	console.log(event.currentTarget.dataset.mealid);

	var recupid = event.currentTarget.dataset.mealid;

	this.basket.removeItem(recupid);
}



OrderForm.prototype.run = function()
{


	this.onChangeMeal();
	this.meal.on('change', this.onChangeMeal.bind(this));

	this.addItem.on('click', this.onClickAddItem.bind(this));

	$(document).on('click', '.trash',
  this.recupIdTrash.bind(this));


}
