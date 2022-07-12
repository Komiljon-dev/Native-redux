import { createStore, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './redux/rootReducer'
import {
   decrement,
   increment,
   asyncIncrement,
   changeTheme,
} from './redux/action'
import './styles.css'

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')
const store = createStore(rootReducer, composeWithDevTools(
   applyMiddleware(thunk),
))

themeBtn.addEventListener('click', () => {
   const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
   store.dispatch(changeTheme(newTheme))
})

addBtn.addEventListener('click', () => {
   store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
   store.dispatch(decrement())

})

asyncBtn.addEventListener('click', () => {
   store.dispatch(asyncIncrement())
})

store.subscribe(() => {
   const state = store.getState()
   counter.textContent = state.counterReducer
   document.body.className = state.themeReducer.value

   const arr = [addBtn, subBtn, themeBtn, asyncBtn]
   arr.forEach(btn => {
      btn.disabled = state.themeReducer.disabled
   });
   console.log(subBtn);
})

store.dispatch({ type: 'INIT_SUB' })


