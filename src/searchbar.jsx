import React from "react";
import { Dropdown, Button, Input, Label } from "semantic-ui-react";

const nums = [
  {key: "3", text: "3", value: "3"},
  {key: "6", text: "6", value: "6"},
  {key: "9", text: "9", value: "9"},
  {key: "All", text: "All", value: "-1"}
]

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    window.searchbar = this
  }
  
  render() {
    let placeholder = null
    if (!this.props.selectednode ||
        Object.keys(this.props.selectednode).length == 0 ||
        !this.props.selectednode.hasOwnProperty('url')){
      placeholder = "doi, arxivId, or S2 Paper Id..."
    } else{
      let accessor = this.props.selectednode['url'].split('/')
      placeholder = accessor[accessor.length-1]
      //this.props.updateAccessor(placeholder)
      console.log(placeholder)
    }
    return (
    <div style = {{display: "inline-block"}}>
      <Input
        name = "accessor"
        label = {<Dropdown/>}
        onChange = {this.props.handleMessage}
        placeholder={placeholder}
        value = {this.props.searchbarVal}>
      <Label>
        <Dropdown 
          name = "breadth" 
          onChange = {this.props.handleChange}
          defaultValue = "3" 
          options={nums}/>
      </Label>
      <input style = {{width:"250px"}}></input>
      <Button onClick={this.props.addnode}>Search</Button>
      </Input>
    </div>  
  )};
}

export default Searchbar;
