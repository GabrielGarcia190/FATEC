import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

const firebaseConfig = {
    apiKey: 'AIzaSyB9lTnDEOBK4LtzZbBsGrDEf_1MUA_Rb7s',
    authDomain: 'teste-8c64b.firebaseapp.com',
    projectId: 'teste-8c64b',
    storageBucket: 'teste-8c64b.appspot.com',
    messagingSenderId: '400654920710',
    appId: '1:400654920710:web:7ad066a2c5d2b020682787',
    measurementId: 'G-0EVF5J3CY7'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const formAddPessoa = document.querySelector('[data-js="add-pessoa-form"]')
const collectionPessoas = collection(db, 'Pessoas');

collection(db, 'Pessoas')

getDocs(collectionPessoas)
    .then(querySnapshot => {
        const PessoasLis = querySnapshot.docs.reduce((acc, doc) => {
            const { Nome, Sobrenome, DatadeNascimento } = doc.data()

            acc += `<li class="my-4">
                <h5>${Nome}</h5>

                <ul>
                    <li>Nome: ${Sobrenome}</li>
                    <li>Data de Nascimento: ${DatadeNascimento.toDate().getDate()} / ${DatadeNascimento.toDate().getMonth() + 1} / ${DatadeNascimento.toDate().getFullYear()}</li>
                </ul>
                </li>`;

            return acc;

        }, '');

        const listaPessoas = document.querySelector('[data-js="listaPessoas"]')
        listaPessoas.innerHTML = PessoasLis;
        //querySnapshot.forEach(doc => console.log(doc.data()))
    })
    .catch(console.log);

formAddPessoa.addEventListener('submit', e => {
    e.preventDefault();
    addDoc(collectionPessoas, {
        DatadeNascimento: serverTimestamp(),
        Nome: e.target.Nome.value,
        Sobrenome: e.target.Sobrenome.value,

    })
        .then(doc => console.log("Documento criado com ID:", doc.id))
        .catch(console.log);
})
