import {React, useEffect, useState} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from 'react-redux'
import Notification from './components/Notification'
import {sendDataToDb} from './store/cart-slice'
import {uiActions} from './store/ui-slice'
function App() {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.itemList)
  const isNotificationEnabled = useSelector(state => state.notifcationUi.notification)
  useEffect(() => {
    if(isFirstRender){
      setIsFirstRender(false)
      return
    }
    dispatch(uiActions.updateUi({
      open : true, 
      message : 'Sending request to database',
      type : "warning"
    }))
    sendDataToDb(cart, dispatch)
  }, [cart])
  return (
    <div className="App">
    {isNotificationEnabled.open &&<Notification type={isNotificationEnabled.type} message={isNotificationEnabled.message}/> }
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
