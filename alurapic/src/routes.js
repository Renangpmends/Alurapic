import Cadastro from './components/cadastro/Cadastro.vue'
import Home from './components/home/home.vue';


export const routes = [
    {path: '/cadastro', component: Cadastro, titulo: 'Cadastro'},
    {path: '', component: Home, titulo: 'Home'}
];