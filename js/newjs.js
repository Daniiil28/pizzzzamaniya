const pizzaTemp = (name,description,image) =>`
                <div class="div-img-text-h3-icons">
                <a href="">
                    <img class="pizza_img" src="${image}" alt="">
                </a>
                <h3 class="name_pizza"> ${name}
                    <a href="">
                    <img class="icons-pizza" src="./image/icons/icon_nutritional_open.png" alt="">
                    </a>
                </h3>
                <p>${description}</p>
                </div>
                <div style="border-bottom: solid 1px var(--link-color);"></div>
                <div class="div-size-price-button">
                    <div class="size">
                        <p>30 см</p>
                        <select class="classic-pizza">
                            <option value="">Фирменная</option>
                            <option value="dog">Классичсекая</option>
                        </select>
                        <br>
                        <select class="list-product-pizza">
                            <option value="">Добавки</option>
                            <option value="dog">Мясо</option>
                            <option value="cat">Сыр</option>
                            <option value="hamster">Грибы</option>
                            <option value="parrot">Помидор</option>
                            <option value="spider">Пивко</option>
                            <option value="goldfish">Рыбка</option>
                        </select>
                    </div>
                    <div class="price-button">
                        <h3>500 ₽</h3> 
                        <button class="button-busket">
                            В корзину
                        </button>
                    </div>
                </div>
  `;



fetch('https://api.jsonbin.io/v3/b/62d8368d2c868775a53037db').then(async (response) => {
    const data = await response.json();
    const pizza = data.record;
    console.log(pizza)
    pizza.forEach((item) => {
        const div = document.createElement('div');
        div.className = "block_left";
        div.innerHTML = pizzaTemp(item.name,item.description,item.image);
        document.querySelector(".products").append(div);
    })
});