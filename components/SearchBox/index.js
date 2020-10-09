import Router from 'next/router'

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      Router.push(`/items?search=${this.state.value}`);
    event.preventDefault();
  }

  render(){
  return(
  	<div>
		<div id="search-container" class="row">
		  <div class="col-md-1 search"></div>
		  <div class="col-md-1 search">
		  	<img id="img-ml" src="/Logo_ML.png" alt="ML Image"/>
		  </div>
		  <div class="col-md-9 search">
		  	<form class="search" onSubmit={this.handleSubmit}>
		  		<input id="in-srch" type="text" placeholder="Nunca dejes de buscar" name="search" value={this.state.value} onChange={this.handleChange}/>
		  		<button id="btn-srch" type="submit"><img id="img-srch" src="/ic_Search.png"/></button>
		  	</form>
		  </div>
		  <div class="col-md-1 search"></div>
		</div>
	</div>
  	) 
  }
}

export default SearchBox