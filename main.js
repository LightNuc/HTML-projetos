// ======================================================
// DEMO INTERATIVA DE TECLAS (T-H-O-C-K) — só existe na home
// ======================================================

const layout = ['T','H','O','C','K'];
const keysEl = document.getElementById('keys');
const typedEl = document.getElementById('typedOut');
let typed = '';

layout.forEach(letter => {
  const key = document.createElement('div');
  key.className = 'key';
  key.textContent = letter;
  key.setAttribute('role','button');
  key.setAttribute('tabindex','0');
  key.setAttribute('aria-label', 'Tecla ' + letter);

  const press = () => {
    key.classList.add('pressed','rippled');
    typed += letter;
    if (typed.length > 5) typed = letter;
    typedEl.innerHTML = typed + '<span class="cursor"></span>';
    setTimeout(() => key.classList.remove('pressed'), 90);
    setTimeout(() => key.classList.remove('rippled'), 500);
  };

  key.addEventListener('click', press);
  key.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); press(); }
  });

  keysEl.appendChild(key);
});
