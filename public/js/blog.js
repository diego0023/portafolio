import { initializeApp } from  "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, doc ,getDocs } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";;

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener una referencia al contenedor de los posts del blog
const blogPosts = document.getElementById("blog-posts");


const colRef = collection(db, "posts");
const docsSnap = await getDocs(colRef);

docsSnap.forEach(doc => {
    const post = doc.data();
    const postHTML = `
    <div class="blog-post">
      <h2 class="blog-title">${post.title}</h2>
      <div class="blog-content">${post.content}</div>
    </div>
  `;
  blogPosts.innerHTML += postHTML;
});
