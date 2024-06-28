import './CartStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeToCart, removeSingleItems, emptyCartIteam } from '../Redux/features/CartSlice'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart)

  const [totalPrice, settotalPrice] = useState(0)
  const [totalquantity, setTotalQuantity] = useState(0)

  const dispatch = useDispatch()

  // add to cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e))
  }

  // remove to singlecart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e))
    toast.success("Item removed from cart")
  }

  // remove single item
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleItems(e))
  }

  // Empty Cart Item
  const handleEmptyCart = (e) => {
    dispatch(emptyCartIteam(e))
    toast.success("Your cart is empty")
  }


  // Count total price
  const total = () => {
    let totalPrice = 0
    carts.map((element, index) => {
      totalPrice += element.price * element.qnty;
    })
    settotalPrice(totalPrice)
  }

  useEffect(() => {
    total()
  }, [total])


  // count total quantity
  const countquantity = () => {
    let totalquantity = 0
    carts.map((element, index) => {
      totalquantity += element.qnty;
    })
    setTotalQuantity(totalquantity)
  }

  useEffect(() => {
    countquantity()
  }, [countquantity])


  return (
    <>
      <div className='row justify-content-center m-0'>
        <div className='col-md-8 mt-5 mb-5 cardsdetails'>
          <div className='card'>
            <div className='card-header bg-dark p-3'>
              <div className='card-header-flex'>
                <h5 className='text-white m-0'>Cart Calculation {carts.length > 0 ? `(${carts.length})` : ""}</h5>
                {
                  carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm' onClick={handleEmptyCart} ><i className='fa fa-trash-alt mr-2' /><span>Empty Cart</span></button> : ""
                }
              </div>
            </div>
            <div className='card-body p-0'>
              {
                carts.length === 0 ? <table className='table card-table mb-0'>
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className='cart-empty'>
                          <i className='fa fa-shopping-cart'></i>
                          <p>Your Cart is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table> : <table className='table cart-table mb-0 table-responsive-sm'>
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className='text-right'><span id='amount' className='amount'>Total Amount</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      carts.map((data, index) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <button className='prdct-delete' onClick={() => { handleDecrement(data.id) }} ><i className='fa fa-trash-alt mr-2' /></button>
                              </td>
                              <td><div className='product-img'><img src={data.imgdata} /></div></td>
                              <td><div className='product-name'><p>{data.dish}</p></div></td>
                              <td>{data.price}</td>
                              <td>
                                <div className='prdct-qty-container'>
                                  <button className='prdct-qty-btn' type='button' onClick={data.qnty <= 1 ? () => handleDecrement(data.id) : () => handleSingleDecrement(data)}>
                                    <i className='fa fa-minus' />
                                  </button>
                                  <input type='text' className='qty-input-box' value={data.qnty} disabled />
                                  <button className='prdct-qty-btn' type='button' onClick={() => { handleIncrement(data) }}>
                                    <i className='fa fa-plus' />
                                  </button>
                                </div>
                              </td>
                              <td className='text-right'>{data.price * data.qnty}</td>
                            </tr>
                          </>
                        )
                      })
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>Item in Cart <span className='ml-2 mr-2'>:</span> <span className='text-danger'>{totalquantity}</span></th>
                      <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span> <span className='text-danger'>{totalPrice}</span></th>
                    </tr>
                  </tfoot>
                </table>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartDetails