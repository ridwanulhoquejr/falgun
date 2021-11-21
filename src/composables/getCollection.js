import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore.collection(collection);

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      err.value = 'could not fetch data';
    }
  );

  return { documents, error };
};

export default getCollection;
