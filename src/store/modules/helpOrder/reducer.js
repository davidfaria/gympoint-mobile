import produce from 'immer';

const INITIAL_STATE = {
  helpOrders: [],
  loading: false,
};

export default function helpOrder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helpOrder/LIST_HELP_ORDER_SUCCESS': {
        draft.helpOrders = action.payload.helpOrders;
        draft.loading = false;
        break;
      }
      case '@helpOrder/HELP_ORDER_SUCCESS': {
        draft.helpOrders = [...state.helpOrders, action.payload.helpOrder];
        draft.loading = false;
        break;
      }
      case '@helpOrder/HELP_ORDER_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
