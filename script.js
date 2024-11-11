let currentPage = 1;
const totalPages = 18;

// Function to turn the page (show the first page)
function turnPage() {
  showPage(currentPage);
}

// Function to show a specific page
function showPage(pageNumber) {
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page-${i}`).style.display = i === pageNumber ? 'flex' : 'none';
  }
}

// Function for "Previous" button
function prevPage() {
  currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
  showPage(currentPage);

}

// Function for "Next" button
function nextPage() {
  currentPage = currentPage < totalPages ? currentPage + 1 : 1;
  showPage(currentPage);
  createConfetti()
}

// Initially show the first page
showPage(currentPage);


//   // Ajusta o tamanho do canvas para cobrir a tela toda
//   const canvas = document.getElementById('canvas');
//   const ctx = canvas.getContext('2d');
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   let hearts = [];

// // Função para desenhar um coração baseado em um polígono
// function drawHeart(x, y, size, color, opacity) {
//     ctx.fillStyle = `rgba(${color}, ${opacity})`; // Define a cor com opacidade
//     ctx.beginPath();

//     // Pontos do coração baseado no clip-path: polygon(...)
//     const points = [
//       { x: 94, y: 40 }, { x: 86, y: 53 }, { x: 70, y: 68 },
//       { x: 58, y: 79 }, { x: 50, y: 89 }, { x: 42, y: 80 },
//       { x: 32, y: 70 }, { x: 18, y: 58 }, { x: 8, y: 45 },
//       { x: 5, y: 33 }, { x: 6, y: 20 }, { x: 15, y: 10 },
//       { x: 30, y: 6 }, { x: 43, y: 13 }, { x: 50, y: 25 },
//       { x: 56, y: 13 }, { x: 68, y: 7 }, { x: 83, y: 9 },
//       { x: 92, y: 17 }, { x: 95, y: 27 }
//   ];
  

//     // Transforma as coordenadas de porcentagem para coordenadas baseadas em (x, y) e no tamanho
//     const scale = size / 100;

//     points.forEach((point, index) => {
//         const xPos = x + (point.x - 50) * scale;
//         const yPos = y + (point.y - 50) * scale;

//         if (index === 0) {
//             ctx.moveTo(xPos, yPos);
//         } else {
//             ctx.lineTo(xPos, yPos);
//         }
//     });

//     ctx.closePath(); // Fecha a forma
//     ctx.fill(); // Preenche o coração
// }

// // Função para gerar confetti em forma de corações
// function createConfetti() {
//     const particleCount = 100;
//     const colors = ['255, 174, 198', '255, 194, 213', '255, 214, 227', '255, 235, 241']; // Cores RGB para os corações

//     for (let i = 0; i < particleCount; i++) {
//         hearts.push({
//             x: Math.random() * canvas.width, // Posição X aleatória
//             y: Math.random() * canvas.height, // Posição Y aleatória
//             size: Math.random() * 35 + 10, // Tamanho aleatório dos corações
//             color: colors[Math.floor(Math.random() * colors.length)], // Cor aleatória
//             opacity: 1, // Opacidade inicial
//             speed: Math.random() * 2 + 1, // Velocidade de subida
//             scaleReduction: 1 // Redução do tamanho progressivamente
//         });
//     }

//     animateHearts(); // Inicia a animação
// }

// // Função para animar os corações flutuantes
// function animateHearts() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

//     hearts = hearts.filter(heart => heart.opacity > 0); // Remove corações que desapareceram

//     hearts.forEach(heart => {
//         drawHeart(heart.x, heart.y, heart.size, heart.color, heart.opacity);
//         heart.y -= heart.speed; // Faz o coração subir

//         // Inicia o desaparecimento gradualmente quando o coração se aproxima do topo
//         if (heart.y < canvas.height * 0.2) {
//             heart.opacity -= 0.02; // Reduz a opacidade mais rapidamente perto do topo
//         }

//         heart.size *= heart.scaleReduction; // Reduz o tamanho gradualmente
//     });

//     if (hearts.length > 0) {
//         requestAnimationFrame(animateHearts); // Continua a animação enquanto houver corações
//     }
// }



// Ajusta o tamanho do canvas para cobrir a tela toda
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

// Função para desenhar um coração baseado em um polígono
function drawHeart(x, y, size, color, opacity) {
    ctx.fillStyle = `rgba(${color}, ${opacity})`; // Define a cor com opacidade
    ctx.beginPath();

    // Pontos do coração baseado no clip-path: polygon(...), ajustados para um formato de coração
    const points = [
        { x: 94, y: 40 }, { x: 86, y: 53 }, { x: 70, y: 68 },
        { x: 58, y: 79 }, { x: 50, y: 89 }, { x: 42, y: 80 },
        { x: 32, y: 70 }, { x: 18, y: 58 }, { x: 8, y: 45 },
        { x: 5, y: 33 }, { x: 6, y: 20 }, { x: 15, y: 10 },
        { x: 30, y: 6 }, { x: 43, y: 13 }, { x: 50, y: 25 },
        { x: 56, y: 13 }, { x: 68, y: 7 }, { x: 83, y: 9 },
        { x: 92, y: 17 }, { x: 95, y: 27 }
    ];

    // Transformar as coordenadas de porcentagem para coordenadas baseadas em (x, y) e no tamanho
    const scale = size / 100;

    points.forEach((point, index) => {
        const xPos = x + (point.x - 50) * scale;
        const yPos = y + (point.y - 50) * scale;

        if (index === 0) {
            ctx.moveTo(xPos, yPos);
        } else {
            ctx.lineTo(xPos, yPos);
        }
    });

    ctx.closePath(); // Fecha o caminho
    ctx.fill(); // Preenche o coração
}

// Função para desenhar as mensagens no canvas
function drawMessage(x, y, message, fontSize, color, opacity) {
    ctx.fillStyle = `rgba(${color}, ${opacity})`; // Define a cor com opacidade
    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(message, x, y); // Desenha a mensagem
}

// Função para gerar as "mensagens flutuantes" com corações
function createConfetti() {
    const particleCount = 100;
    const colors = ['155, 101, 255', '126, 79, 249', '245, 143, 186', '234, 92, 137', '131, 110, 224']; // Cores RGB para as mensagens e corações

    // Lista de novas mensagens
    const messages = [
        "Minha pretinha, meu mundo", "Só você, minha amorzinho", "Minha fofuxa, meu coração", "Você é meu amorzinho", "Te amo muito, minha linda", "Minha vida é você", "Amor, meu porto seguro", "Minha paixão, minha vida", "Minha safada favorita", "Você é minha, só minha!", "Minha ciumenta linda", "Meu tudo é você", "Surtada e minha", "Sou seu, minha dona", "Minha pretinha amada", "Você é meu amorzinho doce", "Minha fofuxa para sempre", "Amorzinho, te amo demais", "Não vivo sem você, minha vida", "Amor eterno, minha paixão", "Safada mais linda", "Minha, pra sempre minha!", "Minha ciumenta amada", "Tudo em mim é seu", "Amo sua dose de loucura, surtada", "Minha dona, minha vida", "Você é tudo, minha pretinha", "Meu amorzinho, meu amor", "Você é minha fofuxa favorita", "Minha vida é você, amor", "Minha paixão única", "Minha safada irresistível", "Só você me completa, minha!", "Amo seu jeitinho ciumento", "Meu tudo, minha razão", "Surtada e perfeita", "Minha dona, meu amor", "Amor eterno, minha pretinha", "Minha fofuxa, minha paz", "Você é meu doce amorzinho", "Meu mundo é você, vida", "Você é minha paixão", "Minha safada, minha loucura", "Você é minha razão, ciumenta", "Sou seu tudo, meu amor", "Sua loucura me encanta, surtada", "Minha dona para sempre", "Minha pretinha, minha razão de viver", "Amorzinho, te quero sempre", "Meu tudo, você é minha dona"
    ];

    // Inicializa as mensagens
    hearts = [];

    for (let i = 0; i < particleCount; i++) {
        const message = messages[Math.floor(Math.random() * messages.length)]; // Escolhe uma mensagem aleatória
        hearts.push({
            x: Math.random() * canvas.width, // Posição X aleatória
            y: Math.random() * canvas.height, // Posição Y aleatória
            message: message, // A mensagem a ser exibida
            fontSize: Math.random() * 15 + 5, // Tamanho da fonte aleatório (tamanho reduzido)
            color: colors[Math.floor(Math.random() * colors.length)], // Cor aleatória
            opacity: 1, // Opacidade inicial
            speed: Math.random() * 2 + 1, // Velocidade de subida
            scaleReduction: 1, // Redução do tamanho progressivamente
            heartSize: Math.random() * 25 + 10, // Tamanho do coração aleatório
        });
    }

    animateMessages(); // Inicia a animação
}

// Função para animar as mensagens flutuantes com corações
function animateMessages() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    hearts = hearts.filter(heart => heart.opacity > 0); // Remove mensagens que desapareceram

    hearts.forEach(heart => {
        drawHeart(heart.x, heart.y, heart.heartSize, heart.color, heart.opacity); // Desenha o coração
        drawMessage(heart.x, heart.y - heart.heartSize, heart.message, heart.fontSize, heart.color, heart.opacity); // Desenha a mensagem

        heart.y -= heart.speed; // Faz a mensagem subir

        // Inicia o desaparecimento gradualmente quando a mensagem se aproxima do topo
        if (heart.y < canvas.height * 0.2) {
            heart.opacity -= 0.02; // Reduz a opacidade mais rapidamente perto do topo
        }

        heart.fontSize *= heart.scaleReduction; // Reduz o tamanho da fonte gradualmente
        heart.heartSize *= heart.scaleReduction; // Reduz o tamanho do coração gradualmente
    });

    if (hearts.length > 0) {
        requestAnimationFrame(animateMessages); // Continua a animação enquanto houver mensagens
    }
}

// Chame createConfetti para iniciar a animação
document.getElementById('startButton').addEventListener('click', createConfetti); // Garante que a animação só começa quando o botão for clicado


