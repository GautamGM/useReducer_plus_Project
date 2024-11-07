// intial sate

export const USER_DATA = "user_data";

export const userContactReducer = (state, action) => {
  // Our Reducer function
  switch (action.type) {
    case USER_DATA:
      const { payload } = action;
      return [...state, payload];
    default:
      return state;
  }
};
