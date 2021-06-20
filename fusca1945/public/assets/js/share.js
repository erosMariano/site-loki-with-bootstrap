const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'Fusca Retrô',
      url: 'http://127.0.0.1:5500/index.html'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});

function abrirPesquisa(){
  document.querySelector(".input-formulario").style.opacity="1"
  document.querySelector(".input-formulario").style.width="100%"
} 



