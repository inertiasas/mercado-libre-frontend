import Link from 'next/link'

function formatMoney(amount, decimalCount = 2, decimal = ",", thousands = ".") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  return(
	    <div class="row">
        <div class="col-md-1"></div>
        <div  class="col-md-10 prd-item-cntnr">
          <div class="row">
            <div class="col-md-10">
              <div class="img-prd-item-cntnr">
                 <Link href={`/items/${this.props.item.id}`}>
                  <img src={this.props.item.picture} alt="public/ML Image"/>
                 </Link>
              </div>
              <div class="info-prd-item-cntnr">
                <div class="price-prd-item-cntnr">
                  {this.props.item.price.currency} {formatMoney(this.props.item.price.amount, 0, ",", ".")} { this.props.item.free_shipping && <img src="ic_shipping.png" alt="ML Image"/>}
                </div> 
               <div class="name-prd-item-cntnr">
                 {this.props.item.title}
                </div>
              </div>
             </div>
            <div class="col-md-2">
              <div class="state-prd-item-cntnr">{this.props.item.state}</div>
            </div>
          </div> 
        </div>
        <div class="col-md-1"></div>
	    </div>
  	) 
  }

}

export default ProductItem