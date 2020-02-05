window.addEventListener('DOMContentLoaded', function(){
    // All your JS code goes here
    const $contentSection = document.querySelector(".content");
    const $asideSection = document.querySelector('.aside');

    for(let i = 0; i < 10; i++){
        // step 1: create an element
        const $article = document.createElement("article");
        $article.textContent = `Article #${i}`;
        $contentSection.append($article);
    }

    $asideSection.addEventListener('click', function(){
      if($asideSection.classList.contains('bg-purple')){
        $asideSection.classList.remove('bg-purple')
        $asideSection.classList.add('bg-yellow')
      } else {
        $asideSection.classList.remove('bg-yellow')
        $asideSection.classList.add('bg-purple')
      }
    });


  });