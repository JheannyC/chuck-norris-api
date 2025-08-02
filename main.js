const chuckNorris = require('./chuckNorris.js');
const readline = require('readline');

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('===== API de Piadas do Chuck Norris =====');
    console.log('Escolha uma opção:');
    console.log('1 - Obter uma piada aleatória');
    console.log('2 - Obter uma piada por categoria');
    console.log('3 - Listar todas as categorias');
    console.log('0 - Sair');

    const askQuestion = () => {
        rl.question('\nDigite sua opção: ', async (option) => {
            switch (option) {
                case '1':
                    const joke = await chuckNorris.getRandomJoke();
                    console.log(joke);
                    askAgain();
                    break;
                case '2':
                    const categories = await chuckNorris.getAllCategories();
                    console.log('\nCategorias disponíveis:\n' + categories);
                    
                    rl.question('\nDigite a categoria desejada: ', async (category) => {
                        const jokeByCategory = await chuckNorris.getRandomJokeByCategory(category);
                        console.log(jokeByCategory);
                        askAgain();
                    });
                    break;
                case '3':
                    const allCategories = await chuckNorris.getAllCategories();
                    console.log('\nCategorias disponíveis:\n' + allCategories);
                    askAgain();
                    break;
                case '0':
                    console.log('Até mais!');
                    rl.close();
                    break;
                default:
                    console.log('Opção inválida. Tente novamente.');
                    askAgain();
                    break;
            }
        });
    };

    const askAgain = () => {
        rl.question('\nDeseja continuar? (s/n): ', (answer) => {
            if (answer.toLowerCase() === 's') {
                console.log('\n===== Chuck Norris Jokes =====');
                console.log('Escolha uma opção:');
                console.log('1 - Obter uma piada aleatória');
                console.log('2 - Obter uma piada por categoria');
                console.log('3 - Listar todas as categorias');
                console.log('0 - Sair');
                askQuestion();
            } else {
                console.log('Até mais!');
                rl.close();
            }
        });
    };

    askQuestion();
}

main();