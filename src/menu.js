import beef from "./beef.jpg";
import carbonara from "./carbonara.jpg";
import chicken from "./chicken.jpg";
import curry from "./curry.jpg";
import lasagne from "./lasagne.jpg";
import pizza from "./pizza.jpg";
import salad from "./salad.jpg";

let dishes = [];
function makeDish(name, price, url, description) {

    return { name: name, price: price, url: url, description: description, }
}

const addDishes = (() => {
    dishes.push(makeDish("Spaghetti Carbonara", 12.99, carbonara, "Classic Italian pasta dish with creamy sauce, bacon, and Parmesan cheese."));
    dishes.push(makeDish("Chicken Alfredo", 14.99, chicken, "Rich and creamy pasta dish with tender chicken and Parmesan cheese sauce."));
    dishes.push(makeDish("Margherita Pizza", 10.99, pizza, "Traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves."));
    dishes.push(makeDish("Beef Stir Fry", 13.49, beef, "Savory stir-fried beef with mixed vegetables in a flavorful sauce."));
    dishes.push(makeDish("Vegetable Lasagna", 11.99, lasagne, "Layers of pasta, assorted vegetables, and creamy cheese sauce baked to perfection."));
    dishes.push(makeDish("Grilled Salmon", 16.99, beef, "Fresh salmon fillet seasoned and grilled to perfection, served with a side of vegetables."));
    dishes.push(makeDish("Caesar Salad", 8.99, salad, "Crisp romaine lettuce tossed in Caesar dressing, topped with croutons and Parmesan cheese."));
    dishes.push(makeDish("Hamburger", 9.99, carbonara, "Juicy beef patty served on a sesame seed bun with lettuce, tomato, onion, and pickles."));
    dishes.push(makeDish("Mushroom Risotto", 12.49, lasagne, "Creamy Italian rice dish cooked with mushrooms, onions, garlic, and Parmesan cheese."));
    dishes.push(makeDish("Tofu Pad Thai", 11.49, salad, "Stir-fried rice noodles with tofu, bean sprouts, peanuts, and tamarind sauce."));
    dishes.push(makeDish("Beef Tacos", 10.99, carbonara, "Soft corn tortillas filled with seasoned ground beef, lettuce, cheese, and salsa."));
    dishes.push(makeDish("Chicken Quesadilla", 12.99, chicken, "Flour tortilla filled with grilled chicken, cheese, onions, and peppers, served with sour cream and salsa."));
    dishes.push(makeDish("Eggplant Parmesan", 11.99, salad, "Slices of eggplant breaded and fried, topped with marinara sauce and melted mozzarella cheese."));
    dishes.push(makeDish("Shrimp Scampi", 15.49, pizza, "Tender shrimp sautéed in garlic butter, white wine, and lemon juice, served over pasta."));
    dishes.push(makeDish("Beef Burger", 10.99, carbonara, "Classic beef burger topped with lettuce, tomato, onion, cheese, and your choice of condiments."));
    dishes.push(makeDish("Vegetable Curry", 11.49, curry, "Aromatic curry made with assorted vegetables, coconut milk, and a blend of spices."));
    dishes.push(makeDish("Chicken Tikka Masala", 13.99, chicken, "Tender pieces of chicken cooked in a creamy tomato-based sauce with Indian spices."));
    dishes.push(makeDish("BBQ Ribs", 16.99, beef, "Slow-cooked pork ribs glazed with tangy barbecue sauce, served with coleslaw and cornbread."));
    dishes.push(makeDish("Caprese Salad", 9.49, salad, "Fresh salad made with tomatoes, mozzarella cheese, basil leaves, olive oil, and balsamic glaze."));
    dishes.push(makeDish("Lemon Garlic Chicken", 14.49, curry, "Tender chicken breasts marinated in lemon, garlic, and herbs, grilled to perfection."));
})()

const dishesCnt = document.createElement("div");
dishesCnt.classList.add("dishes-container");

function makeCnt(dish) {

    const cont = document.createElement("div");
    cont.classList.add("dish-container");
    const name = document.createElement("p")
    name.classList.add("dish-name");
    name.innerText = dish.name;
    const price = document.createElement("p")
    price.classList.add("dish-price");
    price.innerText = dish.price;
    const img = document.createElement("img")
    img.classList.add("dish-img");
    img.src = dish.url;
    const description = document.createElement("p")
    description.classList.add("dish-description");
    description.innerText = dish.description;

    cont.appendChild(name);
    cont.appendChild(price);
    cont.appendChild(description);
    cont.appendChild(img);

    return cont;
}

function buildMenu() {
    const dishesCnt = document.createElement("div");
    dishesCnt.classList.add("dishes-container");

    dishes.forEach((dish) => {
        dishesCnt.appendChild(makeCnt(dish));
    })
    content.appendChild(dishesCnt);
    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.classList.add("menu-style");
    })
}

export { buildMenu };