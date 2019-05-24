import React, { Component } from 'react';
import './OrderItem.css'

class OrderItem extends Component {
  constructor(props){
    super(props)
    this.state={
      editing: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || '',
    }
  }
  render() {//其他函数与render同级
    let {shop,product,price,picture,ifCommented} = this.props.data;
    console.log(ifCommented)
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
                  ifCommented ? (
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
        <div className="comment_stars_container">
          评论星数：{this.renderStars()}
        </div>
        <button className="orderItem_btn-red" onClick={this.handleSubmitComment}>提交</button>
        <button className="orderItem_btn-gray" onClick={this.handleCancelComment}>取消</button>
      </div>
    )
  }
  renderStars(){
    const {stars} = this.state;
    return (
      <div className="stars_container">
        {
          [1,2,3,4,5].map((item,index)=>{
            const light = stars >= item ? 'orderItem_star-light': ''
            return (
              <span key={index} 
              className={'orderItem_star ' + light}
              onClick={()=>this.handleClickStars(item)}>★</span>
            )
          })
        }
      </div>
    )
  }
  handleOpenEditArea = () =>{//保证this指向当前组件的实例
    console.log('wjll')
    this.setState({
      editing: true
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
  handleCancelComment= ()=>{
    this.setState({
      editing: false,
      comment: this.props.data.comment || '',
      stars: this.props.data.stars || 0,
    })
  }
  handleSubmitComment = ()=>{
    const {id} = this.props.data;
    const {comment, stars} = this.state;
    this.setState({
      editing: false,
    })
    this.props.onSubmit(id,comment,stars)//调用父组件的函数
  }
}

export default OrderItem;