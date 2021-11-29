// import { ref } from '@vue/reactivity';
// import { projectFirestore } from '../firebase/config';

// const getCollection = () => {
//   const documents = ref(null);
//   const error = ref(null);

//   // let collectionRef =
//   projectFirestore
//     .collection('python')
//     .get()
//     .then(
//       (snapshot) => {
//         let results = [];
//         snapshot.docs.forEach((doc) => {
//           results.push({ ...doc.data(), id: doc.id });
//         });
//         console.log(results[0].whileLoop.title);
//         documents.value = results;
//         console.log(documents.value);

//         error.value = null;
//       },
//       (err) => {
//         console.log(err.message);
//         documents.value = null;
//         err.value = 'could not fetch data';
//       }
//     );

//   // collectionRef.onSnapshot(
//   //   (snap) => {
//   //     let results = [];
//   //     snap.docs.forEach((doc) => {
//   //       results.push({ ...doc.data(), id: doc.id });
//   //     });
//   //     documents.value = results;
//   //     error.value = null;
//   //   },
//   //   (err) => {
//   //     console.log(err.message);
//   //     documents.value = null;
//   //     err.value = 'could not fetch data';
//   //   }
//   // );

//   return { documents, error };
// };

// export default getCollection;
