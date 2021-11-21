import { ref } from '@vue/reactivity';
import { projectAuth } from '../firebase/config';

// for fetching existing user
const user = ref(projectAuth.currentUser);

// auth guard
projectAuth.onAuthStateChanged((_user) => {
  // _user is everytime state changed
  console.log('User state change. Current user is:', _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
