import React, { useEffect, useState } from "react";
import "../assets/scss/listItem.scss";
import { useDispatch, useSelector } from "../core/hook";
import { client } from "./configs/client";
const ListItems = () => {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.listCart);
  const [list, setList] = useState([]);
  const getData = async () => {
    dispatch({
      type: "loading/show",
    });
    const { data } = await client.get(`/products?limit=8&page=10`);
    if (data.code === 200) {
      dispatch({
        type: "loading/hide",
      });
      setList(data.data.listProduct);
      const { data: user } = await client.get(`/users/profile`);
      document.cookie = `userName=${user.data.emailId.name}`;
    } else {
      document.cookie = "";
      window.location.reload();
    }
  };

  const handleAddCart = (itemId) => {
    let newAdd = [...listCart];
    const isExisted = newAdd.findIndex((item) => item.id === itemId);
    const itemAdded = list.find((item) => item._id === itemId);
    console.log(itemAdded.quantity);
    if (itemAdded.quantity > 0) {
      if (isExisted >= 0) {
        if (newAdd[isExisted].quantity > 0) {
          newAdd[isExisted].quantity = newAdd[isExisted].quantity - 1;
          newAdd[isExisted].count = newAdd[isExisted].count + 1;
        } else {
          dispatch({
            type: "noAdd-more",
          });
          return;
        }
      } else {
        newAdd = [
          ...listCart,
          {
            id: itemAdded._id,
            name: itemAdded.name,
            price: itemAdded.price,
            quantity: itemAdded.quantity,
            count: 1,
          },
        ];
      }
      dispatch({
        type: "addCart",
        payload: newAdd,
      });
    } else {
      dispatch({
        type: "error-addCart",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    document.cookie = `cart=${listCart}`;
  }, [listCart]);
  return (
    <div className="product-list">
      {list.map((item) => (
        <div className="product-item" key={item._id}>
          <div className="img-box">
            <img src={item.image} alt={item.category} />
          </div>
          <h2 className="title">{item.name}</h2>
          <div className="price-box">
            <span className="price-item">${item.price}</span>
            <button
              onClick={() => {
                handleAddCart(item._id);
              }}
            >
              Add to cart!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
