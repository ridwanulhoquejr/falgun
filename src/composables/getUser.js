import { ref } from '@vue/reactivity';
import { projectAuth } from '../firebase/config';

const user = ref(projectAuth.currentUser); // existing user

projectAuth.onAuthStateChanged((_user) => {
  // _user is everytime state changed
  console.log('User state change. Current user is:', _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
