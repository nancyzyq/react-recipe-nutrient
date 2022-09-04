import React,{Component} from 'react';

class Recipe extends Component {
  constructor(props) {
		super(props)
    this.state = {
      id: ''
    }
	}
  componentDidMount () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    let id = params.id
    // console.log(id)
    this.setState({id: id})
    setTimeout(() => {
      console.log(this.state.id)
    }, 200)
    
  }
  render() {
    return (
      <div>
        <div>Recipe</div>
        <div>{this.state.id}</div>
      </div>
    )
  }
}

export default Recipe;