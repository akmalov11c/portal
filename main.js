const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// <========== PAGINATION ==========>

const cardData = [
  {
    id: 1,
    img: "./assets/pag-1.jpg",
    title: "«Шальные годы» Монпарнаса",
    desc: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»",
  },
  {
    id: 2,
    img: "./assets/pag-2.jpg",
    title: "Анатомия за 30 секунд",
    desc: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос",
  },
  {
    id: 3,
    img: "./assets/pag-3.jpg",
    title: "Русские балетные сезоны",
    desc: "В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
  },
  {
    id: 4,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 5,
    img: "./assets/pag-1.jpg",
    title: "«Шальные годы» Монпарнаса",
    desc: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»",
  },
  {
    id: 6,
    img: "./assets/pag-2.jpg",
    title: "Анатомия за 30 секунд",
    desc: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос",
  },
  {
    id: 7,
    img: "./assets/pag-3.jpg",
    title: "Русские балетные сезоны",
    desc: "В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
  },
  {
    id: 8,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 9,
    img: "./assets/pag-3.jpg",
    title: "Русские балетные сезоны",
    desc: "В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
  },
  {
    id: 10,
    img: "./assets/pag-2.jpg",
    title: "Анатомия за 30 секунд",
    desc: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос",
  },
  {
    id: 11,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 12,
    img: "./assets/pag-1.jpg",
    title: "«Шальные годы» Монпарнаса",
    desc: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»",
  },
  {
    id: 13,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 14,
    img: "./assets/pag-2.jpg",
    title: "Анатомия за 30 секунд",
    desc: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос",
  },
  {
    id: 15,
    img: "./assets/pag-3.jpg",
    title: "Русские балетные сезоны",
    desc: "В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
  },
  {
    id: 16,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 17,
    img: "./assets/pag-1.jpg",
    title: "«Шальные годы» Монпарнаса",
    desc: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»",
  },
  {
    id: 18,
    img: "./assets/pag-2.jpg",
    title: "Анатомия за 30 секунд",
    desc: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос",
  },
  {
    id: 19,
    img: "./assets/pag-3.jpg",
    title: "Русские балетные сезоны",
    desc: "В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
  },
  {
    id: 20,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 21,
    img: "./assets/pag-1.jpg",
    title: "«Шальные годы» Монпарнаса",
    desc: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»",
  },
  {
    id: 22,
    img: "./assets/pag-2.jpg",
    title: "Анатомия за 30 секунд",
    desc: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос",
  },
  {
    id: 23,
    img: "./assets/pag-3.jpg",
    title: "Русские балетные сезоны",
    desc: "В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
  },
  {
    id: 24,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 25,
    img: "./assets/pag-1.jpg",
    title: "«Шальные годы» Монпарнаса",
    desc: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»",
  },
  {
    id: 26,
    img: "./assets/pag-2.jpg",
    title: "Анатомия за 30 секунд",
    desc: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос",
  },
  {
    id: 27,
    img: "./assets/pag-3.jpg",
    title: "Русские балетные сезоны",
    desc: "В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
  },
  {
    id: 28,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 29,
    img: "./assets/pag-3.jpg",
    title: "Русские балетные сезоны",
    desc: "В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
  },
  {
    id: 30,
    img: "./assets/pag-4.jpg",
    title: "Сферические чудаки",
    desc: "Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
  },
  {
    id: 31,
    img: "./assets/pag-1.jpg",
    title: "«Шальные годы» Монпарнаса",
    desc: "В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»",
  },
];
const cardPerPage = 4;
const totalPages = Math.ceil(cardData.length / cardPerPage);
let currentPage = 1;

function main() {
  const paginationCards = document.getElementById("pagination-cards");
  paginationCards.innerHTML = "";

  const startIndex = (currentPage - 1) * cardPerPage;
  const endIndex = Math.min(startIndex + cardPerPage, cardData.length);
  const currentCards = cardData.slice(startIndex, endIndex);

  currentCards.forEach((card) => {
    const cardElement = `
        <div class="card">
          <div class="rev__card-img">
            <img src="${card.img}" alt="${card.title}">
            <div class="card__overlay">
                <div class="overlay__cards">
                  <div class="card__icon">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7.25734C12.3197 7.25734 12.5789 7.01462 12.5789 6.71522C12.5789 6.41581 12.3197 6.17309 12 6.17309C11.6803 6.17309 11.4211 6.41581 11.4211 6.71522C11.4211 7.01462 11.6803 7.25734 12 7.25734Z" stroke="white" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 12.6786C14.8777 12.6786 17.2105 10.4941 17.2105 7.79947C17.2105 5.1048 14.8777 2.92033 12 2.92033C9.12231 2.92033 6.78947 5.1048 6.78947 7.79947C6.78947 10.4941 9.12231 12.6786 12 12.6786Z" stroke="white" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 7.79947C1 7.79947 4.92857 0.751831 12 0.751831C19.0714 0.751831 23 7.79947 23 7.79947C23 7.79947 19.0714 14.8471 12 14.8471C4.92857 14.8471 1 7.79947 1 7.79947Z" stroke="white" stroke-opacity="0.4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>37</span>
                </div>            
                <div class="card__icon">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12.8335C13.4183 12.8335 17 10.1289 17 6.79266C17 3.4564 13.4183 0.751831 9 0.751831C4.58172 0.751831 1 3.4564 1 6.79266C1 9.04426 2.63138 11.0081 5.05029 12.0471C5.10723 13.4442 4.56657 14.7917 3.28571 14.7917C4.27569 14.9719 6.68061 14.8087 8.70284 12.8294C8.80145 12.8321 8.90051 12.8335 9 12.8335Z" stroke="white" stroke-opacity="0.4"/>
                  </svg>
                  <span>2</span>
                </div>  
                </div> 
                <div class="save__icon">
                  <svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1H13V16L7 11.1351L1 16V1Z"
                          stroke="#FF7931"
                          stroke-width="1.5"
                        />
                      </svg>
                </div>         
            </div>
          </div>
          <h3 class="rev__card-title">${card.title}</h3>
          <p>${card.desc}</p>
        </div>
    `;

    paginationCards.innerHTML += cardElement;
  });
}

function pagination() {
  const paginationUl = document.getElementById("pagination");
  paginationUl.innerHTML = "";

  let pages = [];

  for (let i = 1; i <= Math.min(5, totalPages); i++) {
    if (i === currentPage) {
      pages.push(`<li class="active">${i}</li>`);
    } else {
      pages.push(`<li onclick="gotoPage(${i})">${i}</li>`);
    }
  }

  if (totalPages > 6 && currentPage <= totalPages - 4) {
    pages.push("<li>...</li>");
  }

  if (totalPages > 5) {
    if (currentPage === totalPages) {
      pages.push(`<li class="active">${totalPages}</li>`);
    } else {
      pages.push(`<li onclick="gotoPage(${totalPages})">${totalPages}</li>`);
    }
  }

  paginationUl.innerHTML = pages.join("");
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    main();
    pagination();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    main();
    pagination();
  } else if (currentPage == totalPages) {
    currentPage = 1;
    main();
    pagination();
  }
}

function gotoPage(page) {
  currentPage = page;
  main();
  pagination();
}

main();
pagination();
