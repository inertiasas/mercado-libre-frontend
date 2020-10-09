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

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  return(
    <div>
	    <div class="row">
        <div class="col-md-1"></div>
          <div id="prd-detail-cntnr" class="col-md-10">
            <div id="prd-detail-cntnr-sub">
              <div id="img-prd-detail-cntnr">
                <img src={this.props.item.picture} alt="public/ML Image"/>
              </div>      
              <div id="desc-prd-detail-cntnr">
                <div id="title-desc-prd-detail-cntnr">
                  Descripción del producto
                </div>
                <div id="text-desc-prd-detail-cntnr">
                  {this.props.item.description}
                </div>
              </div>
            </div>
            <div id="info-prd-detail-cntnr">
              <div id="cond-prd-detail-cntnr">{this.props.item.condition}</div>
              <div id="title-prd-detail-cntnr">{this.props.item.title}</div>
              <div id="price-prd-detail-cntnr">
                {this.props.item.price.currency} {formatMoney(this.props.item.price.amount, 0, ",", ".")}<span class="decimal">00</span>
              </div>
              <div id="buy-btn-cntnr">
                <button id="buy-btn" type="submit">Comprar</button>
              </div>
            </div>
          </div>
        <div class="col-md-1"></div>
	    </div>
     </div>
  	) 
  }

}

export default ProductDetail