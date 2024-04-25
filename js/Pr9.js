let objects = [];

function addObject() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let category = document.getElementById('category').value;

    if (!name || !price || isNaN(price) || price <= 0) {
        alert('Пожалуйста, введите корректные данные.');
        return;
    }

    let object = {
        name: name,
        price: parseFloat(price),
        category: category
    };

    objects.push(object);
    displayObjects();
}

function deleteObject(index) {
    objects.splice(index, 1);
    displayObjects();
}

function editObject(index) {
    let newName = prompt('Введите новое название:');
    let newPrice = prompt('Введите новую цену:');
    let newCategory = prompt('Введите новую категорию:');

    if (!newName || !newPrice || isNaN(newPrice) || newPrice <= 0) {
        alert('Пожалуйста, введите корректные данные.');
        return;
    }

    objects[index].name = newName;
    objects[index].price = parseFloat(newPrice);
    objects[index].category = newCategory;

    displayObjects();
}

function displayObjects() {
    let list = document.getElementById('entity-list');
    list.innerHTML = '';

    objects.forEach((object, index) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${object.name}</strong> - Цена: ${object.price} - Категория: ${object.category} 
                              <button onclick="editObject(${index})">Изменить</button>
                              <button onclick="deleteObject(${index})">Удалить</button>`;
        list.appendChild(listItem);
    });
}
