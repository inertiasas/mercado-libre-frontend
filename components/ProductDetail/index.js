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
        <div class="col-md-7">
          <img src={this.props.item.picture} alt="public/ML Image"/>
        </div>
        <div class="col-md-3">
          <div>{this.props.item.condition}</div>
          <div>{this.props.item.title}</div>
          <div>
            {this.props.item.price.currency} {formatMoney(this.props.item.price.amount, this.props.item.price.decimals, ",", ".")}
          </div>
          <div>
            <button type="submit">Comprar</button>
          </div>
        </div>
        <div class="col-md-1"></div>
	    </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-7">
          <div>Descripción del Producto</div>
          <div>{this.props.item.description}</div>
        </div>
        <div class="col-md-4"></div>
      </div>
      </div>
  	) 
  }

}

export default ProductDetail