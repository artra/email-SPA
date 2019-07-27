(function(){
  const formNode = document.querySelector('.email__form');
  const inputNode = document.querySelector('.email__input');
  const resultNode = document.querySelector('.result');
  const SECRET_KEY = 'INSERT YOUR SECRET KEY HERE';

  formNode.addEventListener('submit', function(e){
    const query = new URLSearchParams({
      access_key: SECRET_KEY,
      email: inputNode.value
    });

    fetch('http://apilayer.net/api/check?' + query.toString())
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      resultNode.textContent = JSON.stringify(result);
    });

    e.preventDefault();
  }, false);
})();
