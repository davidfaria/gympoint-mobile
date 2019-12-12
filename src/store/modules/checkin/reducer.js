import produce from 'immer';

const INITIAL_STATE = {
  checkins: [],
  pagination: {
    page: 1,
    perPage: 5,
    total: 0,
    totalPage: 0,
  },
  loading: false,
};

export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@checkin/LIST_CHECKIN_SUCCESS': {
        const {checkins, shouldRefresh, pagination} = action.payload;

        const newList = shouldRefresh
          ? checkins
          : [...state.checkins, ...checkins];

        let index = pagination.total;
        const checkinsFormatted = newList.map(check => {
          const item = {
            ...check,
            label: `Check #${index}`,
          };
          index--;
          return item;
        });

        draft.checkins = checkinsFormatted;
        draft.pagination = pagination;
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

      case '@checkin/CHECKIN_CLEAR': {
        draft.checkins = [];
        draft.pagination = {
          page: 1,
          perPage: 5,
          total: 0,
          totalPage: 0,
        };
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
