export function listHelpOrderRequest(id) {
  return {
    type: '@helpOrder/LIST_HELP_ORDER_REQUEST',
    id,
  };
}

export function listHelpOrderSucess(helpOrders) {
  return {
    type: '@helpOrder/LIST_HELP_ORDER_SUCCESS',
    payload: {helpOrders},
  };
}

export function helpOrderRequest(id) {
  return {
    type: '@helpOrder/HELP_ORDER_REQUEST',
    id,
  };
}

export function helpOrderSucess(helpOrder) {
  return {
    type: '@helpOrder/HELP_ORDER_SUCCESS',
    payload: {helpOrder},
  };
}

export function helpOrderFailure() {
  return {
    type: '@helpOrder/HELP_ORDER_FAILURE',
  };
}
