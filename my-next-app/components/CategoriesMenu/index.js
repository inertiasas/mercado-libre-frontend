class CategoriesMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
  return(
    <div class="row">
      <div class="col-md-1"></div>
	    <div id="ctgr-container" class="col-md-10">
	      {this.props.categories.map((category) => (
	        <div class="ctgr-item">{category}</div>
	      ))}
	    </div>
      <div class="col-md-1"></div>
    </div>
  	) 
  }

}

export default CategoriesMenu