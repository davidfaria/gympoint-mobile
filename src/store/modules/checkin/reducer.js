import produce from 'immer';

const INITIAL_STATE = {
  checkins: [],
  loading: false,
};

export default function checkin(state = INITIAL_STATE, action) {
  console.tron.log('act', action);
  return produce(state, draft => {
    switch (action.type) {
      case '@checkin/LIST_CHECKIN_SUCCESS': {
        draft.checkins = action.payload.checkins;
        draft.loading = false;
        break;
      }
      case '@checkin/CHECKIN_SUCCESS': {
        draft.checkins = [...state.checkins, action.payload.checkin];
        draft.loading = false;
        break;
      }
      case '@checkin/CHECKIN_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
