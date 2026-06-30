// --- 1. CONTROLE DE MIRA (CROSSHAIR HUD) ---
const crosshair = document.getElementById('crosshair');

document.addEventListener('mousemove', (e) => {
    crosshair.style.left = `${e.clientX}px`;
    crosshair.style.top = `${e.clientY}px`;
});

// Resposta tática de clique (recoil)
document.addEventListener('mousedown', () => {
    crosshair.style.transform = 'translate(-50%, -50%) scale(0.7)';
    crosshair.style.borderColor = 'var(--alert-red)';
    crosshair.style.boxShadow = '0 0 15px var(--alert-red)';
});
document.addEventListener('mouseup', () => {
    crosshair.style.transform = 'translate(-50%, -50%) scale(1)';
    crosshair.style.borderColor = 'var(--neon-green)';
    crosshair.style.boxShadow = '0 0 8px var(--neon-green)';
});

// --- 2. MOTOR DE CRIPTOGRAFIA (SCRAMBLE TEXT) ---
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}';

function scrambleTextEffect(element, finalValue, duration = 1200) {
    let iteration = 0;
    const maxIterations = finalValue.length;
    const intervalTime = duration / maxIterations;

    clearInterval(element.scrambleInterval);

    element.scrambleInterval = setInterval(() => {
        element.innerText = finalValue
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return finalValue[index]; // Revela a letra correta
                }
                return chars[Math.floor(Math.random() * chars.length)]; // Letra aleatória
            })
            .join("");

        if (iteration >= maxIterations) {
            clearInterval(element.scrambleInterval);
        }
        iteration += 1 / 2.5; // Ajuste fino da velocidade de revelação
    }, intervalTime);
}

// Aplica o efeito em todas as tags com classe 'scramble-text'
document.querySelectorAll('.scramble-text').forEach(el => {
    const finalVal = el.getAttribute('data-value');
    
    // Anima ao carregar a página
    scrambleTextEffect(el, finalVal, 1500);
    
    // Refaz o efeito ao passar o mouse por cima
    el.addEventListener('mouseover', () => scrambleTextEffect(el, finalVal, 800));
});


// --- 3. TRANSMISSÃO DE INTELIGÊNCIA (TYPEWRITER EFFECT) ---
const outputScreen = document.getElementById('typewriter-output');
const briefingIntel = ">> INICIANDO DOWNLOAD DE DIRETRIZES... O cenário agro-global de 2026 exige convergência absoluta. O isolamento entre o manejo ancestral (familiar) e a engenharia cibernética (larga escala) é obsoleto. A missão central é fundir a biodiversidade da rotação de culturas com a escalabilidade dos drones e sensores IoT de precisão milimétrica. Engaje o banco de dados para mais detalhes.";

let charIndex = 0;

function typeWriterIntel() {
    if (charIndex < briefingIntel.length) {
        outputScreen.innerHTML += briefingIntel.charAt(charIndex);
        charIndex++;
        
        // Randomiza o tempo para simular digitação humana/processamento antigo
        let speed = Math.random() * (45 - 15) + 15; 
        setTimeout(typeWriterIntel, speed);
    }
}


// --- 4. TELEMETRIA ESTATÍSTICA (INTERSECTION OBSERVER) ---
// Observa quando os números aparecem na tela para começar a contar
const animateCountersAndBars = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const container = entry.target;

            // Animação dos Números
            const counterEl = container.querySelector('.counter');
            const targetNum = parseInt(counterEl.getAttribute('data-target'));
            let currentNum = 0;
            const duration = 2500; // 2.5 segundos
            const incrementTime = Math.abs(Math.floor(duration / targetNum));
            
            const timer = setInterval(() => {
                currentNum += 1;
                counterEl.textContent = currentNum;
                if (currentNum >= targetNum) {
                    clearInterval(timer);
                    counterEl.textContent = targetNum; // Garante o número exato no final
                }
            }, incrementTime);

            // Animação das Barras de Progresso
            const progressBar = container.querySelector('.progress-bar');
            if (progressBar) {
                const targetWidth = progressBar.style.getPropertyValue('--target');
                progressBar.style.width = targetWidth;
            }

            // Desativa a observação deste elemento após rodar 1 vez
            observer.unobserve(container);
        }
    });
};

const observerTelemetria = new IntersectionObserver(animateCountersAndBars, { threshold: 0.3 });
document.querySelectorAll('.sensor-card').forEach(card => observerTelemetria.observe(card));


// --- 5. INICIALIZAÇÃO DE SISTEMA ---
window.onload = () => {
    setTimeout(typeWriterIntel, 1000); // Aguarda 1s para iniciar o Typewriter
};


// --- 6. CONSOLE TÁTICO INTERATIVO (ÁRVORE DE DECISÃO) ---
function executarComando(diretriz) {
    const feedbackScreen = document.querySelector('#feedback-screen .terminal-content');
    
    // Feedback visual imediato: Processando
    feedbackScreen.innerHTML = `<span style="color: var(--warning-yellow);" class="blink">PROCESSANDO DIRETRIZ ${diretriz}... ESTABELECENDO UPLINK COM SATÉLITES...</span>`;
    
    // Delay simulando tempo de processamento de IA
    setTimeout(() => {
        let htmlResponse = "";

        if (diretriz === 'ALFA') {
            htmlResponse = `
                <div style="animation: glitch 0.3s 2;">
                    <h4 style="color: var(--alert-red); font-size: 1.2rem; margin-bottom: 10px;">[ REJEITADO ] PROTOCOLO DE DESMATAMENTO ALFA</h4>
                    <p style="color: #fff; margin-bottom: 10px;">
                        A expansão sobre a reserva nativa rompeu a barreira física que protegia os mananciais hídricos. 
                        <strong>Consequência imediata:</strong> Seca extrema na safra seguinte devido à alteração no ciclo de chuvas (Rios Voadores comprometidos).
                    </p>
                    <span style="color: var(--alert-red); font-weight: bold;">> STATUS: FALTA CRÍTICA ESTRUTURAL. COLAPSO ECONÔMICO IMINENTE.</span>
                </div>
            `;
        } else if (diretriz === 'BRAVO') {
            htmlResponse = `
                <div>
                    <h4 style="color: var(--neon-green); font-size: 1.2rem; margin-bottom: 10px;">[ APROVADO ] PROTOCOLO DE INTENSIFICAÇÃO SUSTENTÁVEL</h4>
                    <p style="color: #fff; margin-bottom: 10px;">
                        A aplicação de Plantio Direto (palhada sobre o solo) preservou a umidade. Os drones realizaram a aplicação de bioinsumos com taxa variável. A produção aumentou 35% sem a necessidade de avançar 1 metro em área de floresta.
                    </p>
                    <span style="color: var(--neon-green); font-weight: bold;">> STATUS: MISSÃO CUMPRIDA. EQUILÍBRIO AGROECOLÓGICO ALCANÇADO.</span>
                </div>
            `;
        } else if (diretriz === 'CHARLIE') {
            htmlResponse = `
                <div>
                    <h4 style="color: var(--warning-yellow); font-size: 1.2rem; margin-bottom: 10px;">[ ADVERTÊNCIA TÁTICA ] BOMBARDERIO QUÍMICO</h4>
                    <p style="color: #fff; margin-bottom: 10px;">
                        O uso excessivo de adubo NPK (Nitrogênio, Fósforo, Potássio) gerou um pico produtivo rápido, mas as chuvas fortes lixiviaram (lavaram) o excesso de produtos químicos para os rios locais (processo de eutrofização). O solo perdeu microbiota vital.
                    </p>
                    <span style="color: var(--warning-yellow); font-weight: bold;">> STATUS: VULNERABILIDADE ALTA. DEPENDÊNCIA FINANCEIRA DE INSUMOS IMPORTADOS.</span>
                </div>
            `;
        }

        // Insere a resposta processada no terminal
        feedbackScreen.innerHTML = htmlResponse;
        
        // Aplica o efeito de scramble nas tags h4 geradas dinamicamente
        const dynamicHeader = feedbackScreen.querySelector('h4');
        if(dynamicHeader) {
            scrambleTextEffect(dynamicHeader, dynamicHeader.innerText, 800);
        }

    }, 1500); // 1.5 segundos de delay militar
}
