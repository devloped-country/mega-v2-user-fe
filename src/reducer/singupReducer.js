export const initialSignupState = {
  name: '',
  phone: '',
  email: '',
  check: '',
  auth: '',
  password: '',
  passwordConfirm: '',
};

export const signupReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, [action.payload]: action.value };
  }
};
