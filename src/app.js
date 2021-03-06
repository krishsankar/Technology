import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from  './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { ExpenseDashboardPage } from './components/ExpenseList';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//Add expense - water bill
store.dispatch(addExpense({ description: 'Water bill', note: 'drink more water', amount: 4500}));
store.dispatch(addExpense({ description: 'Gas bill', note: 'it is precious', createdAt: 100}));
store.dispatch(addExpense({ description: 'Rent bill', note: 'drink more water', amount: 109500}));

const state = store.getState();
const visibileExpense = getVisibleExpenses(state.expenses,state.filters);
console.log(store.getState());

const jsx = (
    <Provider store={store}>
       <AppRouter />
    </Provider>
);

ReactDOM.render( jsx ,document.getElementById("app"));