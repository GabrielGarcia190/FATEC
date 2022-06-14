import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

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
const listaPessoas = document.querySelector('[data-js="listaPessoas"]')
const btnEditar = document.querySelector('[data-js="btnEditar"]')



collection(db, 'Pessoas')


btnEditar.addEventListener("click", function (event) {
    document.querySelector('[data-js="formulario"]').style.display = "block";
    document.querySelector('[data-js="lista"]').style.display = "none";
    document.querySelector('[data-js="menu"]').style.display = "none";
})


getDocs(collectionPessoas)
    .then(querySnapshot => {
        const PessoasLis = querySnapshot.docs.reduce((acc, doc) => {
            const { Nome, Sobrenome, DatadeNascimento } = doc.data()

            acc += `<li data-id="${doc.id}" class="my-4">
                <h5>${Nome}</h5>

                <ul>
                   <li>Sobrenome: ${Sobrenome}</li>
                   <li>Data do Cadastro: ${DatadeNascimento.toDate().getDate()} / ${DatadeNascimento.toDate().getMonth() + 1} / ${DatadeNascimento.toDate().getFullYear()}</li>
                </ul>
                    <button data-remove="${doc.id}" class="btn btn-danger">Excluir</button>
                </li>`;

            return acc;

        }, '');

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
        .then(doc => {
            console.log("Documento criado com ID:", doc.id)
            location.reload();
        })
        .catch(console.log("Pessoa não adionada"));
})

listaPessoas.addEventListener('click', e => {
    const removeButtonId = e.target.dataset.remove;




    if (removeButtonId) {

        deleteDoc(doc(db, "Pessoas", removeButtonId));
        const pessoa = document.querySelector(`[data-id="${removeButtonId}"]`);
        pessoa.remove();
    }


})