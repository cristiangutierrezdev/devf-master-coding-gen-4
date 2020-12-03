function expandir() {
  const activeElement = document.querySelector('.active') || null;
  const content = 'lo que sea'

  if(activeElement !== null){
    activeElement.style.height = 0;
    activeElement.classList.remove('active')
  }
  /// ... Expande
  content.style.height = '200px';
  content.classList.add('active')
}