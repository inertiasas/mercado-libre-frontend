export default async (req, res) => {
  const {
    query: { q },
  } = req

  var qvar = q;
  console.log(typeof qvar)

  const resApi = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${qvar}`);
  const data = await resApi.json();
  //console.log(`prueba: ${JSON.stringify(data)}`)
  const resCurr = await fetch('https://api.mercadolibre.com/currencies');
  const currencies =  await resCurr.json();
  const results = data.results;
  const filters = data.filters;
  const data2 = {"author": {"name": "Luis Camilo" , "lastname": "Jimenez"}};
  const categories = {};
  data2["categories"] = [];
  data2["items"] = [];
  for (var i=0; i < results.length; i++){
  	data2["items"].push(
  		{
  			"id": results[i].id,
  			"title": results[i].title,
  			"price": {
  				"currency": currencies.filter(function(item){return item.id === results[i].currency_id;})[0].symbol,
  				"amount": results[i].price,
  				"decimals": currencies.filter(function(item){return item.id === results[i].currency_id;})[0].decimal_places
  			},
  			"picture": results[i].thumbnail,
  			"condition": results[i].condition,
  			"free_shipping": results[i].shipping.free_shipping,
        "state": results[i].seller_address.state.name,
  		}
  	);
    if(typeof categories[results[i].category_id] === "undefined"){
      categories[results[i].category_id] = 1;
    }else{
      categories[results[i].category_id] += 1; 
    }
  }
  var maxProp = null;
  var maxValue = -1;
  for (var prop in categories) {
    if (categories.hasOwnProperty(prop)) {
      var value = categories[prop];
      if (value > maxValue) {
        maxProp = prop;
        maxValue = value;
      }
    }
  }
  if(maxProp != null){
    const resCateg = await fetch(`https://api.mercadolibre.com/categories/${maxProp}`);
    const categoriesInfo = await resCateg.json();
    const categoriesRoot = categoriesInfo.path_from_root;
    for(var i=0; i < categoriesRoot.length; i++){
      data2["categories"].push(categoriesRoot[i].name);
    }
  }
  res.status(200).json(data2);
}