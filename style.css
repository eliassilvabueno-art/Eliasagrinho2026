/* --- DIRETRIZES VISUAIS MILITARES (TEMA MATRIX/HUD) --- */
:root {
    --bg-dark: #030504;
    --panel-bg: #09100c;
    --neon-green: #00ff41;
    --neon-green-dim: #005f18;
    --alert-red: #ff3333;
    --warning-yellow: #ffcc00;
    --radar-blue: #00d0ff;
    --text-main: #c8e8d5;
    --font-terminal: 'Courier New', Courier, monospace;
}

* {
    margin: 0; padding: 0; box-sizing: border-box;
    cursor: none !important; /* Cursor personalizado ativo */
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: var(--font-terminal);
    overflow-x: hidden;
}

.padding-global { padding: 5rem 3rem; }
.highlight { color: var(--neon-green); font-weight: bold; }
.green-text { color: var(--neon-green); }
.danger-text { color: var(--alert-red); font-weight: bold; }

/* --- EFEITOS CRT E RADAR --- */
.crt-scanlines {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
    background-size: 100% 4px; pointer-events: none; z-index: 9999;
}
.vignette-overlay {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%);
    pointer-events: none; z-index: 9998;
}
.radar-sweep {
    position: fixed; top: -100%; left: 0; width: 100%; height: 50%;
    background: linear-gradient(180deg, rgba(0,255,65,0) 0%, rgba(0,255,65,0.05) 100%);
    border-bottom: 1px solid rgba(0,255,65,0.3); pointer-events: none; z-index: 9997;
    animation: sweep 8s infinite linear;
}
@keyframes sweep { 0% { top: -100%; } 100% { top: 200%; } }

/* --- CURSOR MIRA SNIPER --- */
.tactical-crosshair {
    position: fixed; width: 30px; height: 30px; border: 1px solid var(--neon-green);
    border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 10000;
    transition: transform 0.05s, width 0.1s, height 0.1s, border-color 0.2s;
}
.tactical-crosshair::before {
    content: ''; position: absolute; top: -10px; left: 50%; width: 1px; height: 50px; background: var(--neon-green); transform: translateX(-50%);
}
.tactical-crosshair::after {
    content: ''; position: absolute; left: -10px; top: 50%; width: 50px; height: 1px; background: var(--neon-green); transform: translateY(-50%);
}
.tactical-crosshair .dot {
    position: absolute; top: 50%; left: 50%; width: 4px; height: 4px; background: var(--alert-red);
    border-radius: 50%; transform: translate(-50%, -50%);
}

/* --- HEADER TELEMETRIA --- */
header {
    background: rgba(3, 5, 4, 0.9); border-bottom: 2px solid var(--neon-green-dim);
    padding: 1rem 2rem; position: sticky; top: 0; z-index: 9000; font-size: 0.9rem;
}
.top-nav { display: flex; justify-content: space-between; align-items: center; max-width: 1400px; margin: 0 auto; }
.sys-status { display: flex; align-items: center; gap: 10px; }
.status-led { width: 12px; height: 12px; background: var(--neon-green); border-radius: 50%; box-shadow: 0 0 10px var(--neon-green); }
.blink { animation: blink 1s infinite step-end; }
@keyframes blink { 50% { opacity: 0; } }
.logo h1 { font-size: 1.5rem; letter-spacing: 2px; text-shadow: 0 0 5px var(--neon-green); }

/* --- HERO BRIEFING COM EFEITOS GLITCH E TELA --- */
.briefing-zone {
    min-height: 90vh; display: flex; align-items: center; justify-content: center;
    background: radial-gradient(circle at center, #09100c 0%, #030504 100%); position: relative;
}
.briefing-container {
    width: 90%; max-width: 1000px; padding: 4rem; position: relative;
    background: rgba(0, 255, 65, 0.02); border: 1px solid var(--neon-green-dim);
}
.corner { position: absolute; width: 25px; height: 25px; border-color: var(--neon-green); border-style: solid; }
.top-l { top: -2px; left: -2px; border-width: 3px 0 0 3px; }
.top-r { top: -2px; right: -2px; border-width: 3px 3px 0 0; }
.bot-l { bottom: -2px; left: -2px; border-width: 0 0 3px 3px; }
.bot-r { bottom: -2px; right: -2px; border-width: 0 3px 3px 0; }

.threat-level { font-size: 1rem; margin-bottom: 2rem; letter-spacing: 1px; }

/* Glitch Brutal Animado via CSS */
.mega-glitch {
    font-size: 3.5rem; color: #fff; margin-bottom: 2rem; position: relative; text-transform: uppercase;
}
.mega-glitch::before, .mega-glitch::after {
    content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--bg-dark);
}
.mega-glitch::before { left: 3px; text-shadow: -2px 0 var(--alert-red); clip-path: polygon(0 20%, 100% 20%, 100% 30%, 0 30%); animation: glitch 2s infinite linear alternate-reverse; }
.mega-glitch::after { left: -3px; text-shadow: -2px 0 var(--radar-blue); clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); animation: glitch 3s infinite linear alternate-reverse; }
@keyframes glitch { 0% { clip-path: polygon(0 15%, 100% 15%, 100% 25%, 0 25%); transform: translate(-2px); } 20% { clip-path: polygon(0 65%, 100% 65%, 100% 75%, 0 75%); transform: translate(2px); } 40% { clip-path: polygon(0 5%, 100% 5%, 100% 10%, 0 10%); transform: translate(-2px); } 60% { clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%); transform: translate(2px); } 80% { clip-path: polygon(0 80%, 100% 80%, 100% 90%, 0 90%); transform: translate(-2px); } 100% { clip-path: polygon(0 30%, 100% 30%, 100% 40%, 0 40%); transform: translate(2px); } }

.typewriter-console { margin-bottom: 3rem; font-size: 1.1rem; color: #8fa898; line-height: 1.6; display: flex; flex-wrap: wrap; }
.prefix { color: var(--warning-yellow); margin-right: 10px; font-weight: bold; }
.cursor-block { display: inline-block; width: 10px; height: 1.1rem; background: var(--neon-green); margin-left: 5px; }

/* Botões Táticos */
.btn-tactical {
    background: transparent; color: var(--neon-green); border: 1px solid var(--neon-green-dim);
    padding: 1rem 2rem; font-family: var(--font-terminal); font-size: 1.1rem; font-weight: bold;
    text-transform: uppercase; transition: 0.2s; position: relative; overflow: hidden;
}
.btn-tactical:hover { background: rgba(0, 255, 65, 0.1); box-shadow: 0 0 15px rgba(0,255,65,0.4); text-shadow: 0 0 5px var(--neon-green); }
.btn-deco { color: var(--radar-blue); }

/* --- ZONA DE TELEMETRIA (CARDS COM NÚMEROS) --- */
.section-header h3 { font-size: 2rem; color: var(--neon-green); margin-bottom: 0.5rem; letter-spacing: 2px; }
.bracket { color: #555; }
.tech-line { width: 100%; height: 1px; background: linear-gradient(90deg, var(--neon-green-dim) 0%, transparent 100%); margin-bottom: 3rem; }

.grid-dashboard { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; max-width: 1400px; margin: 0 auto; }
.sensor-card { background: var(--panel-bg); border: 1px solid #1a2a20; padding: 2rem; position: relative; }
.sensor-card:hover { border-color: var(--neon-green-dim); }
.sensor-id { font-size: 0.8rem; color: #666; margin-bottom: 1rem; }
.data-readout { margin-bottom: 1rem; }
.counter { font-size: 4rem; font-weight: bold; color: #fff; text-shadow: 0 0 10px rgba(255,255,255,0.3); }
.unit { font-size: 1.5rem; color: var(--neon-green); }
.sensor-card h4 { font-size: 1.2rem; margin-bottom: 1rem; color: var(--neon-green); }
.sensor-card p { font-size: 0.95rem; line-height: 1.5; color: #8fa898; }

.progress-track { width: 100%; height: 6px; background: #000; margin-top: 2rem; border: 1px solid #111; }
.progress-bar { height: 100%; width: 0; transition: width 2s cubic-bezier(0.2, 1, 0.3, 1); }
.green-bar { background: var(--neon-green); box-shadow: 0 0 8px var(--neon-green); }
.yellow-bar { background: var(--warning-yellow); box-shadow: 0 0 8px var(--warning-yellow); }
.blue-bar { background: var(--radar-blue); box-shadow: 0 0 8px var(--radar-blue); }

/* --- ANÁLISE DE FLANCOS --- */
.flank-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 3rem; max-width: 1400px; margin: 0 auto; }
.flank-card { background: var(--panel-bg); border-top: 4px solid; padding: 2rem; }
.border-green { border-color: var(--neon-green); }
.border-yellow { border-color: var(--warning-yellow); }

.target-box { position: relative; width: 100%; height: 250px; overflow: hidden; border: 1px solid #222; margin-bottom: 1.5rem; }
.target-box img { width: 100%; height: 100%; object-fit: cover; filter: sepia(100%) hue-rotate(80deg) saturate(200%) brightness(0.6); transition: 0.3s; }
.flank-card:hover .target-box img { filter: sepia(0%) brightness(1); transform: scale(1.05); }

/* Retícula em cima das imagens */
.sniper-reticle { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px); background-size: 20px 20px; pointer-events: none; opacity: 0.5; }
.red-reticle { background: linear-gradient(rgba(255, 51, 51, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 51, 51, 0.1) 1px, transparent 1px); background-size: 20px 20px; }

.tag { padding: 0.2rem 0.5rem; font-size: 0.8rem; font-weight: bold; display: inline-block; margin-bottom: 1rem; }
.tag-green { background: rgba(0, 255, 65, 0.2); color: var(--neon-green); }
.tag-yellow { background: rgba(255, 204, 0, 0.2); color: var(--warning-yellow); }

.flank-info h3 { font-size: 1.5rem; margin-bottom: 1rem; color: #fff; }
.intel-text { color: #8fa898; margin-bottom: 1.5rem; line-height: 1.6; font-size: 0.95rem; }
.spec-list { list-style: none; color: var(--text-main); font-size: 0.9rem; }
.spec-list li { margin-bottom: 0.5rem; }

/* --- CONSOLE INTERATIVO DE ENGAJAMENTO --- */
.command-deck { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; background: var(--panel-bg); padding: 3rem; border: 1px solid #1a2a20; max-width: 1400px; margin: 0 auto; box-shadow: inset 0 0 50px rgba(0,0,0,0.8); }
.deck-left h3 { color: var(--alert-red); font-size: 1.5rem; margin-bottom: 1rem; }
.directive-text { font-size: 1rem; color: #8fa898; margin-bottom: 2rem; }

.btn-group { display: flex; flex-direction: column; gap: 1rem; }
.cmd-btn { background: #030504; color: var(--text-main); border: 1px solid #222; padding: 1.2rem; text-align: left; font-family: var(--font-terminal); font-size: 0.95rem; transition: 0.2s; position: relative; }
.cmd-btn:hover { background: #111; border-color: var(--radar-blue); transform: translateX(10px); color: #fff; }
.btn-id { color: var(--radar-blue); font-weight: bold; margin-right: 10px; }

.deck-right { background: #000; border: 1px solid var(--neon-green-dim); position: relative; display: flex; align-items: center; justify-content: center; padding: 2rem; overflow: hidden; }
.static-noise { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E'); opacity: 0.05; pointer-events: none; }
.waiting-prompt { color: #555; text-align: center; }

/* --- FOOTER --- */
footer { background: #000; padding: 1.5rem; border-top: 1px solid #222; font-size: 0.8rem; color: #666; }
.footer-grid { display: flex; justify-content: space-between; max-width: 1400px; margin: 0 auto; }

@media (max-width: 968px) {
    .command-deck, .flank-container { grid-template-columns: 1fr; }
    .mega-glitch { font-size: 2.2rem; }
}
