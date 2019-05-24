import React, { Component } from 'react';
import OrderItem from '../OrderItem/OrderItem'//引入orderItem组件

const data = [{
  id: 1,
  shop: '饮料店',
  picture: 'https://images.ctfassets.net/cdy0h01lwm15/3xIaIlIR8QegMEGiuwKyO4/cd78969fc8176d28d66308bcd06af995/reactjs.jpg',
  product:'百香果（冷饮）1扎',
  price: 19.9,
  infCommented: false,
},{
  id: 2,
  shop: '鞋店',
  picture: 'https://images.ctfassets.net/cdy0h01lwm15/3xIaIlIR8QegMEGiuwKyO4/cd78969fc8176d28d66308bcd06af995/reactjs.jpg',
  product:'安踏鞋',
  price: 199,
  infCommented: false,
},{
  id: 3,
  shop: '饭店',
  picture: 'https://images.ctfassets.net/cdy0h01lwm15/3xIaIlIR8QegMEGiuwKyO4/cd78969fc8176d28d66308bcd06af995/reactjs.jpg',
  product:'黑天鹅大饭店',
  price: 1999,
  infCommented: false,
},{
  id: 4,
  shop: '水果店',
  picture: 'https://images.ctfassets.net/cdy0h01lwm15/3xIaIlIR8QegMEGiuwKyO4/cd78969fc8176d28d66308bcd06af995/reactjs.jpg',
  product:'菠萝蜜',
  price: 79.9,
  infCommented: false,
}]
class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: []
    }
  }
  componentDidMount(){
    this.setState({
      data: data
    })
  }
  render() {
    return (
      <div>
        {
          data.map(item =>{
            return <OrderItem data={item} key={item.id}/>
          })
        }
        
      </div>
    );
  }
}

export default OrderList;