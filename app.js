
(function(){
  const body = document.body;
  const saved = localStorage.getItem('mujinLang') || 'en';
  body.classList.add(saved === 'zh' ? 'lang-zh' : 'lang-en');
  const btn = document.getElementById('langBtn');
  function updateButton(){
    if(!btn) return;
    btn.textContent = body.classList.contains('lang-en') ? '中文' : 'EN';
  }
  updateButton();
  if(btn){
    btn.addEventListener('click',()=>{
      const isEn = body.classList.contains('lang-en');
      body.classList.toggle('lang-en', !isEn);
      body.classList.toggle('lang-zh', isEn);
      localStorage.setItem('mujinLang', isEn ? 'zh' : 'en');
      updateButton();
    });
  }
})();
