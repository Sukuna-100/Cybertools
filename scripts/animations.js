// Additional Animations
document.addEventListener('DOMContentLoaded', function() {
    // Hexagon background animation
    const hexagonGrid = document.createElement('div');
    hexagonGrid.className = 'hexagon-grid';
    document.querySelector('.matrix-animation').appendChild(hexagonGrid);
    
    function createHexagon() {
        const hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        hexagon.style.left = Math.random() * 100 + 'vw';
        hexagon.style.top = Math.random() * 100 + 'vh';
        hexagon.style.animationDuration = (Math.random() * 20 + 10) + 's';
        hexagon.style.animationDelay = (Math.random() * 5) + 's';
        hexagonGrid.appendChild(hexagon);
        
        setTimeout(() => {
            hexagon.remove();
        }, parseFloat(hexagon.style.animationDuration) * 1000);
    }
    
    // Create initial hexagons
    for (let i = 0; i < 20; i++) {
        createHexagon();
    }
    
    // Continuous creation
    setInterval(createHexagon, 2000);
    
    // Binary rain animation
    const binaryRain = document.createElement('div');
    binaryRain.className = 'binary-rain';
    document.querySelector('.matrix-animation').appendChild(binaryRain);
    
    function createBinaryDigit() {
        const digit = document.createElement('div');
        digit.className = 'binary-digit';
        digit.textContent = Math.random() > 0.5 ? '1' : '0';
        digit.style.left = Math.random() * 100 + 'vw';
        digit.style.animationDuration = (Math.random() * 5 + 3) + 's';
        digit.style.animationDelay = (Math.random() * 2) + 's';
        digit.style.opacity = Math.random() * 0.5 + 0.1;
        binaryRain.appendChild(digit);
        
        setTimeout(() => {
            digit.remove();
        }, parseFloat(digit.style.animationDuration) * 1000);
    }
    
    // Create initial digits
    for (let i = 0; i < 50; i++) {
        createBinaryDigit();
    }
    
    // Continuous creation
    setInterval(createBinaryDigit, 100);
    
    // Circuit board animation
    const circuitBoard = document.createElement('div');
    circuitBoard.className = 'circuit-board';
    document.querySelector('.matrix-animation').appendChild(circuitBoard);
    
    function createCircuit() {
        // Horizontal lines
        for (let i = 0; i < 10; i++) {
            const line = document.createElement('div');
            line.className = 'circuit-line';
            line.style.width = Math.random() * 200 + 100 + 'px';
            line.style.height = '2px';
            line.style.left = Math.random() * 100 + 'vw';
            line.style.top = Math.random() * 100 + 'vh';
            line.style.animationDelay = (Math.random() * 3) + 's';
            circuitBoard.appendChild(line);
            
            setTimeout(() => {
                line.remove();
            }, 3000);
        }
        
        // Vertical lines
        for (let i = 0; i < 10; i++) {
            const line = document.createElement('div');
            line.className = 'circuit-line';
            line.style.width = '2px';
            line.style.height = Math.random() * 200 + 100 + 'px';
            line.style.left = Math.random() * 100 + 'vw';
            line.style.top = Math.random() * 100 + 'vh';
            line.style.animationDelay = (Math.random() * 3) + 's';
            circuitBoard.appendChild(line);
            
            setTimeout(() => {
                line.remove();
            }, 3000);
        }
        
        // Nodes
        for (let i = 0; i < 5; i++) {
            const node = document.createElement('div');
            node.className = 'circuit-node';
            node.style.left = Math.random() * 100 + 'vw';
            node.style.top = Math.random() * 100 + 'vh';
            node.style.animationDelay = (Math.random() * 2) + 's';
            circuitBoard.appendChild(node);
            
            setTimeout(() => {
                node.remove();
            }, 2000);
        }
    }
    
    // Create initial circuit elements
    createCircuit();
    
    // Continuous creation
    setInterval(createCircuit, 1000);
    
    // AI eye animation
    const aiEyes = document.querySelectorAll('.ai-eye');
    
    function moveEyes() {
        const angle = Math.random() * Math.PI * 2;
        const distance = 3;
        
        aiEyes.forEach(eye => {
            eye.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
        });
        
        setTimeout(moveEyes, 2000 + Math.random() * 3000);
    }
    
    // Start eye movement
    setTimeout(moveEyes, 2000);
    
    // Glitch effect on header
    const glitch = document.querySelector('.glitch');
    
    function triggerGlitch() {
        glitch.classList.add('glitch-active');
        setTimeout(() => {
            glitch.classList.remove('glitch-active');
        }, 200);
        
        setTimeout(triggerGlitch, 5000 + Math.random() * 10000);
    }
    
    // Start glitch effect
    setTimeout(triggerGlitch, 5000);
});