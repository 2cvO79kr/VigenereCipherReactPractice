import React, { useEffect, useReducer } from 'react'
import './App.css';
import Input from './components/Input/Input';
import mapReducer, { setValue, setMapData } from './redux/mapReducer';
import { mapCreator } from './components/other/mapCreator'
import Output from './components/Input/Output';

const App = () => {

  const engList = 'abcdefghijklmnopqrstuvwxyz'
  
  const key = 'lemon'

  let defaultState = {
    map: [],
    inputValue: '',
    keyValue: key.toUpperCase(),
    outputValue: ''
  }

  const [state, dispatch] = useReducer(mapReducer, defaultState)

  useEffect(() => {
    let mapEng = mapCreator(engList.toUpperCase())
    dispatch(setMapData(mapEng))
  }, [engList])


  const changeValue = (event) => {
    let text = event.currentTarget.value.toUpperCase()
    dispatch(setValue(text))
  }

  return (
    <div>
      <h2>Vigenere Cipher (eng)</h2>
      <Input state={state}
        changeValue={changeValue} />
      <Output state={state}/>
    </div>
  )
}

export default App;
