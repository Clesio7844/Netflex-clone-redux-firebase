import React, { useState, useEffect } from 'react';
import db from '../firebase';
import './PlanScreen.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';

function PlanScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then(querySnapshot => {
        const products = {};
        querySnapshot.forEach(async productDoc => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection('prices').get();
          priceSnap.docs.forEach(price => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data()
            };
          });
        });

        setProducts(products);
      });
  }, []);

  console.log(products);

  const loadCheckout = async priceId => {
    // const docRef = await db
    //   .collection('customers')
    //   .doc(user.uid)
    //   .collection('checkout_sessions')
    //   .add({
    //     price: priceId,
    //     success_url: window.location.origin,
    //     cancel_url: window.location.origin
    //   });
    // docRef.onSnapshot(async snap => {
    //   const { error, sessionId } = snap.data();
    //   if (error) {
    //     // Show an error to your custome and
    //     // inspect your clound function logs in the firebase console
    //     alert(`An error occured: ${error.message}`);
    //   }
    //   if (sessionId) {
    //     // We have a session, let's redirect to Checout
    //     //Init Strip
    //     const stripe = await loadStripe(
    //       'pk_test_51IIbJtIMNusgaS1IUiAM1ISWQLOQsS7WyxDdBuVrFyAEKhyMPp3A0sCZKpK3GDLJsmFixeotIPYahSg18ktEM8i200UCEje6Wy'
    //     );
    //     stripe.redirectToCheckout({ sessionId });
    //   }
    // });
  };

  return (
    <div className='planscreen'>
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className='plansScreen__plan'>
            <div className='plansScreen__info'>
              <h5> {productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button onClick={loadCheckout(() => productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
