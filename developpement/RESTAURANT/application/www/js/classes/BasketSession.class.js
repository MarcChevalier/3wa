'use strict';
var BasketSession = function()
{
  this.items = null;
  this.load();
};


BasketSession.prototype.addItem = function(mealId, name, price, quantity){


    for(var i =0; i < this.items.length; i++) {
      if (this.items[i].mealId == mealId) {
        this.items[i].quantity += quantity;
        saveDataToDomStorage('panier', this.items);
        this.load();
        return;
      }
    }

    this.items.push({
      mealId: mealId,
      name: name,
      price: price,
      quantity: quantity
    });

    saveDataToDomStorage('panier', this.items);
    this.load();
    console.log(this.items);
}
BasketSession.prototype.load = function()
{
	this.items = loadDataFromDomStorage('panier');

	if(this.items == null)
    {
        this.items = [];
    }

    var table = $('<table class="generic-table">');
	table.append('<tr><td class="number"><strong>Quantité</strong></td><td><strong>Produit</strong></td><td><strong>Prix Unitaire</strong></td><td><strong>Prix Total</strong></td></tr>');

	for (var i = 0; i < this.items.length; i++) {
    	var tr = $('<tr>');

        tr.append('<td class="number">'+this.items[i].quantity+'</td><td><strong>'+this.items[i].name+'</strong></td><td class="number">'+parseFloat(this.items[i].price).toFixed(2) +' €</td><td class="number">'+(parseFloat(this.items[i].price)*parseFloat(this.items[i].quantity)).toFixed(2)+' €</td><td><button class="button button-cancel small trash" data-mealId="'+this.items[i].mealId +'"><i class="fa fa-trash"></i></button></td>');


        table.append(tr);

    }

    $('#order-summary').html(table);


}

BasketSession.prototype.removeItem = function(recupid)
    {
  for(var j = 0; j < this.items.length; j++) {
    if (this.items[j].mealId == recupid) {
      this.items.splice(j,1);
      saveDataToDomStorage('panier',
      this.items);
      this.load();
    }

  }
}
