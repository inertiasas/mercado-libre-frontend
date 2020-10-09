export default async (req, res) => {
  const {
    query: { itemId },
  } = req
  
  const resApi = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
  const data = await resApi.json();
  const resDesc = await fetch(`https://api.mercadolibre.com/items/${itemId}/description`);
  const dataDesc =  await resDesc.json();
  const resCurr = await fetch('https://api.mercadolibre.com/currencies');
  const currencies =  await resCurr.json();
  const data2 = {"author": {"name": "Luis Camilo" , "lastname": "Jimenez"}};
  data2["item"] = {};
  data2.item["id"] = data.id;
  data2.item["title"] = data.title;
  data2.item["price"] = {
  	"currency": currencies.filter(function(item){return item.id === data.currency_id;})[0].symbol,
  	"amount": data.price,
  	"decimals": currencies.filter(function(item){return item.id === data.currency_id;})[0].decimal_places
  };
  data2.item["picture"] = data.pictures[0].url;
  data2.item["condition"] = data.condition;
  data2.item["free_shipping"] = data.shipping.free_shipping;
  data2.item["sold_quantity"] = data.sold_quantity;
  data2.item["description"] = dataDesc.plain_text;
  data2["categories"] = []
  const resCateg = await fetch(`https://api.mercadolibre.com/categories/${data.category_id}`);
  const categoriesInfo = await resCateg.json();
  const categoriesRoot = categoriesInfo.path_from_root;
  for(var i=0; i < categoriesRoot.length; i++){
    data2["categories"].push(categoriesRoot[i].name);
  }
  res.status(200).json(data2);
}