export function listCheckinRequest(id) {
  return {
    type: '@checkin/LIST_CHECKIN_REQUEST',
    id,
  };
}

export function listCheckinSucess(checkins) {
  return {
    type: '@checkin/LIST_CHECKIN_SUCCESS',
    payload: {checkins},
  };
}

export function checkinRequest(id) {
  return {
    type: '@checkin/CHECKIN_REQUEST',
    id,
  };
}

export function checkinSucess(checkin) {
  return {
    type: '@checkin/CHECKIN_SUCCESS',
    payload: {checkin},
  };
}

export function checkinFailure() {
  return {
    type: '@checkin/CHECKIN_FAILURE',
  };
}
