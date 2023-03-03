const data = {
    products: [
        {
            name: 'Saco de Pancada Trojan',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem justo. Praesent tempus eget elit sit amet interdum. Mauris porta urna quis malesuada eleifend.',
            price: 100,
            image: '/img/sacoCarrossel.png',
            slug: 'saco-de-pancada-trojan',
        },
        {
            name: 'Atadura Venum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem justo. Praesent tempus eget elit sit amet interdum. Mauris porta urna quis malesuada eleifend.',
            price: 200,
            image: '/img/ataduraCarrossel.png',
            slug: 'atadura-venum',
        },
        {
            name: 'luvas de boxe venum',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem justo. Praesent tempus eget elit sit amet interdum. Mauris porta urna quis malesuada eleifend.',
            price: 300,
            image: '/img/luvasCarrossel.png',
            slug: 'luvas-de-boxe-venum',
        },
        {
            name: 'Caneleira Fuzyion',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem justo. Praesent tempus eget elit sit amet interdum. Mauris porta urna quis malesuada eleifend.',
            price: 400,
            image: '/img/canelaCarrossel.png',
            slug: 'caneleira-fuzyion',
        },
        {
            name: 'Dobok Canelado',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem justo. Praesent tempus eget elit sit amet interdum. Mauris porta urna quis malesuada eleifend.',
            price: 500,
            image: '/img/dobok_canelado.webp',
            slug: 'dobok-canelado',
        },
        {
            name: 'Berimbau',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem justo. Praesent tempus eget elit sit amet interdum. Mauris porta urna quis malesuada eleifend.',
            price: 600,
            image: '/img/berimbau.webp',
            slug: 'berimbau',
        },
        {
            name: 'Wing Chun',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem justo. Praesent tempus eget elit sit amet interdum. Mauris porta urna quis malesuada eleifend.',
            price: 700,
            image: '/img/wing_chun_madeira.jpg',
            slug: 'Wing Chun',
        },
        {
            name: 'Shinai de Bambu',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem justo. Praesent tempus eget elit sit amet interdum. Mauris porta urna quis malesuada eleifend.',
            price: 800,
            image: '/img/shinai_de_bambu.jpg',
            slug: 'sinai-de-bambu',
        },
    ],
    users: [
        {
            name: 'Muhammad Ali',
            email: 'MAli@fighton.com.br',
            niver: '17/01',
            cargo: 'Diretor',
            salario: 1000,
            image: '/img/muhammad_ali.jpg',
            slug: 'muhammad-ali',
        },
        {
            name: 'Bruce Lee',
            email: 'BLee@fighton.com.br',
            niver: '22/11',
            cargo: 'Asessor',
            salario: 2000,
            image: '/img/bruce_lee.jpg',
            slug: 'bruce-lee',
        },
        {
            name: 'Helio Gracie',
            email: 'HGracie@fighton.com.br',
            niver: '01/10',
            cargo: 'Gerente',
            salario: 3000,
            image: '/img/helio_gracie.jpg',
            slug: 'helio-gracie',
        },
        {
            name: 'Sang Min Cho',
            email: 'SMCho@fighton.com.br',
            niver: '09/01',
            cargo: 'Gerente',
            salario: 4000,
            image: '/img/SangMinCho.jpg',
            slug: 'sang-min-cho',
        },
    ],
};

export default data;

/*

no arquivo que vai usar o data.ts, importar o data.ts
import data from '../utils/data';

{data.<(nome da tabela, que é no plural)>.map((  <(nome da tabela no singular)>  ) => 
    
    
    abraçando todo o conteúdo do map(grid,wrap,etc)

    no local aonde for substituir o conteúdo, colocar o {tabela.propriedade}
    
)}
*/