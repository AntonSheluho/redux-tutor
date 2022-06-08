const defaultState = {
    customers: [],
};

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const REMOVE_CUSTOMER_CLICK = 'REMOVE_CUSTOMER_CLICK';
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
const addManyCustomersAction = (payload) => ({
    type: ADD_MANY_CUSTOMERS,
    payload,
});
const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });
const removeCustomerClickAction = (payload) => ({
    type: REMOVE_CUSTOMER_CLICK,
    payload,
});

export default function customerReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            return {
                ...state,
                customers: [...state.customers, ...action.payload],
            };
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.customer],
            };
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(
                    (el) => el.name !== action.customer
                ),
            };
        case REMOVE_CUSTOMER_CLICK:
            return {
                ...state,
                customers: state.customers.filter(
                    (el) => el.id !== action.customer
                ),
            };
        default:
            return state;
    }
}

export {
    addCustomerAction,
    addManyCustomersAction,
    removeCustomerAction,
    removeCustomerClickAction,
};
