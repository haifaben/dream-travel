const initialValue = { travellers: [], isLoading: true };

export default function travellerReducer(state = initialValue, action) {
  switch (action.type) {
    case "GET_TRAVELLER_SUCCESS":
      return { travellers: action.payload, isLoading: false };
    case "GET_TRAVELLER_FAIL":
      return { travellers: [], isLoading: false };
    default:
      return state;
  }
}
