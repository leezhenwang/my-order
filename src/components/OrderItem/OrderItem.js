import React, { Component } from 'react';
import './OrderItem.css'

class OrderItem extends Component {
  constructor(props){
    super(props)
    this.state={
      editing: false,
      stars: 0,
      comment: ''
    }
  }
  render() {
    const {shop,product,price,picture,isCommented} = this.props.data;
    return (
      <div>
        <div className="orderItem">
          <div className="orderItem_picContainer">
            <img className="orderItem_pix" src={picture}/>
          </div>
          <div className="orderItem_content">
            <div className="order_product">{product}</div>
            <div className="orderItem_shop">{shop}</div>
            <div className="orderItem_detail">
              <div className="orderItem_price">{price}</div>
              <div>
                {
                  isCommented ? (
                    <button className="orderItem_btn-gray">已评价</button>
                  ): (
                    <button className="orderItem_btn-red" 
                    onClick={this.handleOpenEditArea}>评价</button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    );
  }
  renderEditArea(){
    return (
      <div className="orderItem_commentContainer">
        <textarea 
        onChange={this.handleCommenChange} 
        value={this.state.comment}
        className="orderItem_comment"></textarea>
        <div class="comment_stars_container">
          评论星数：{this.renderStars()}
        </div>
        <button className="orderItem_btn-red">提交</button>
        <button className="orderItem_btn-gray">取消</button>
      </div>
    )
  }
  renderStars(){
    const {stars} = this.state;
    return (
      <div className="stars_container">
        {
          [1,2,3,4,5].map((item,index)=>{
            const light = stars > item ? 'orderItem_star-light': ''
            return (
              <span key={index} onClick={this.handleClickStars.bind(this,index)}>★</span>
            )
          })
        }
      </div>
    )
  }
  handdleOpenEditArrea = () =>{//保证this指向当前组件的实例
    this.setState({
      editing: false
    })
  }
  handleCommenChange = (e)=>{
    this.setState({
      comment: e.target.value
    })
  }
  handleClickStars = (stars)=>{
    this.setState({
      stars: stars
    })
  }
}

export default OrderItem;