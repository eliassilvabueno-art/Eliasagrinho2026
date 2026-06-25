// --- SISTEMA DE RASTREAMENTO TÁTICO (CURSOR SNIPER) ---
const crosshair = document.getElementById('crosshair');

document.addEventListener('mousemove', (e) => {
    crosshair.style.left = `${e.clientX}px`;
    crosshair.style.top = `${e.clientY}px`;
});

// Feedback visual de gatilho/clique
document.addEventListener('mousedown', () => {
    crosshair.style.transform = 'translate(-50%, -50%) scale(0.6)';
    crosshair.style.borderColor = 'var(--alert-red)'; // Pisca vermelho ao atirar/clicar
});
document.addEventListener('mouseup', () => {
    crosshair.style.transform = 'translate(-50%, -50%) scale(1)';
    crosshair.style.borderColor = 'var(--neon-green)'; // Retorna ao verde estabilizado
});

// --- ANIMAÇÃO DE DESCRIPTOGRAFIA (SCRAMBLE TEXT) ---
// Transforma elementos com a classe .scramble-text em um efeito estilo "Matrix"
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>';

function scrambleTextEffect(element, finalValue, duration = 1000) {
    let iteration = 0;
    const maxIterations = finalValue.length;
    const intervalTime = duration / maxIterations;

    clearInterval(element.scrambleInterval);

    element.scrambleInterval = setInterval(() => {
        element.innerText = finalValue
            .split("")
            .map((letter, index) => {
                if(index < iteration) return finalValue[index];
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        if (iteration >= maxIterations) {
            clearInterval(element.scrambleInterval);
        }
        iteration += 1 / 2; // Velocidade da revelação das letras corretas
    }, intervalTime);
}

// Inicializa a descriptografia em elementos de interface e ao passar o mouse
document.querySelectorAll('.scramble-text').forEach(el => {
    const finalVal = el.getAttribute('data-value');
    // Anima no load da página
    scrambleTextEffect(el, finalVal, 1500);
    
    // Anima novamente ao fazer hover
    el.addEventListener('mouseover', () => scrambleTextEffect(el, finalVal, 800));
});


// --- TYPEWRITER CONSOLE LOG (BRIEFING) ---
const outputScreen = document.getElementById('typewriter-output');
const briefingIntel = "Análise detectou vulnerabilidades críticas no uso da terra. A diretriz exige a neutralização imediata da degradação biológica unindo táticas de agricultura de preservação familiar com a precisão cibernética do agronegócio de alta escala. Inicie a varredura para extrair os dados e proceder com a escolha de contenção.";

let charIndex = 0;

function typeWriterIntel() {
    if (charIndex < briefingIntel.length) {
        outputScreen.innerHTML += briefingIntel.charAt(charIndex);
        charIndex++;
        // Velocidade irregular simula transmissão de rádio/teleprinter
        let speed = Math.random() * (40 - 10) + 10; 
        setTimeout(typeWriterIntel, speed);
    }
}


// --- INTERSECTION OBSERVER (NÚMEROS CONTANDO E BARRAS CRESCENDO) ---
const animateCountersAndBars = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const container = entry.target;

            // 1. Número animado subindo até o alvo
            const counterEl = container.querySelector('.counter');
            const targetNum = parseInt(counterEl.getAttribute('data-target'));
            let startNum = 0;
            const duration = 2000;
            const incrementTime = Math.abs(Math.floor(duration / targetNum));
            
            const timer = setInterval(() => {
                startNum += 1;
                counterEl.textContent = startNum;
                if (startNum >= targetNum) clearInterval(timer);
            }, incrementTime);

            // 2. Animação da barra de progresso (Injeta o Width)
            const progressBar = container.querySelector('.progress-bar');
            const targetWidth = progressBar.style.getPropertyValue('--target');
            progressBar.style.width = targetWidth;

            // Evita rodar a animação novamente
            observer.unobserve(container);
        }
    });
};

const observerTelemetria = new IntersectionObserver(animateCountersAndBars, { threshold: 0.2 });
document.querySelectorAll('.sensor-card').forEach(card => observerTelemetria.observe(card));


// --- INICIALIZAÇÃO GERAL ---
window.onload = () => {
    setTimeout(typeWriterIntel, 1000); // Começa a digitar após 1 segundo
};


// --- SISTEMA DE ENGAJAMENTO (CONSOLE TÁTICO) ---
function executarComando(diretriz) {
    const feedbackScreen = document.getElementById('feedback-screen');
    
    // Efeito de glitch de digitação para a resposta
    feedbackScreen.innerHTML = `<span style="color: var(--warning-yellow);">PROCESSANDO DIRETRIZ ${diretriz}...</span>`;
    
    setTimeout(() => {
        let htmlResponse = "";

        if (diretriz === 'ALFA') {
            htmlResponse = `
                <div style="animation: glitch 0.2s 3;">
                    <h4 style="color: var(--alert-red); font-size: 1.2rem; margin-bottom: 10px;">[ ERRO FATAL ] PROTOCOLO ALFA REJEITADO</h4>
                    <p style="color: #fff; line-height: 1.5; font-size: 0.95rem;">
                        Avanço sobre áreas virgens gerou erosão incontrolável. Sensores indicam perda total da malha hídrica local.<br><br>
                        <span style="color: var(--warning-yellow);">> STATUS: FALHA CRÍTICA. MISSÃO ABORTADA.</span>
                    </p>
                </div>
            `;
        } else if (diretriz === 'BRAVO') {
            htmlResponse = `
                <div>
                    <h4 style="color: var(--neon-green); font-size: 1.2rem; margin-bottom: 10px;">[ ACESSO CONCEDIDO ] PROTOCOLO ILPF ATIVO</h4>
                    <p style="color: #fff; line-height: 1.5; font-size: 0.95rem;">
                        A integração de lavoura, pecuária e biomas recuperou o microbioma do solo. A sustentabilidade foi elevada em 85% e as margens de suprimentos estão estabilizadas.<br><br>
                        <span style="color: var(--neon-green);">> STATUS: MISSÃO CUMPRIDA. EQUILÍBRIO ALCANÇADO.</span>
                    </p>
                </div>
            `;
        } else if (diretriz === 'CHARLIE') {
            htmlResponse = `
                <div>
                    <h4 style="color: var(--warning-yellow); font-size: 1.2rem; margin-bottom: 10px;">[ AVISO TÁTICO ] IMPACTO COLATERAL DETECTADO</h4>
                    <p style="color: #fff; line-height: 1.5; font-size: 0.95rem;">
                        O ataque de choque químico acelerou a colheita, mas sensores indicam contaminação grave nos lençóis freáticos. A dependência do quadrante por aditivos subiu para 100%.<br><br>
                        <span style="color: var(--alert-red);">> STATUS: VULNERABILIDADE ESTRUTURAL IMINENTE.</span>
                    </p>
                </div>
            `;
        }

        feedbackScreen.innerHTML = htmlResponse;
    }, 800); // Delay simulando processamento do terminal
}
