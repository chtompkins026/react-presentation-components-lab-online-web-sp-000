
const defaultLimit = 100; 
 
class SimpleComponent extends Component {
  super()
  render() {
    return (
      <input
        className="field field-light"
        onChange={this.props.onChange}
        maxLength={this.props.limit || defaultLimit}
      />
    );
  }
}
