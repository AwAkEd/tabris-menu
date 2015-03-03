var data = {
  "title": "Menú",
  "menuItems": [{
    "name": "Pizza Hawaiana",
    "description": "Pizza con base de tomate, queso, jamón y piña.",
    "price": "5.30€"
  }, {
    "name": "Pizza Margarita",
    "description": "Pizza con tomates, queso mozzarella, aceite de oliva y albahaca.",
    "price": "4.99€"
  }, {
    "name": "Pizza Salami",
    "description": "Pizza con base de tomate, salami, cebolla y queso Emmental.",
    "price": "5.30€"
  }, {
    "name": "Pizza Setas",
    "description": "Pizza con Setas, queso mozzarella y salsa de tomate.",
    "price": "6.00€"
  }, {
    "name": "Pizza Atún",
    "description": "Pizza con atún, champiñones, cebolla, ajo y aceitunas negras.",
    "price": "5.60€"
  }, {
    "name": "Pizza Espinacas",
    "description": "Pizza con espinacas, ajo y tomates.",
    "price": "7.50€"
  }]
};

console.log(data.title);
console.log(data.menuItems);

var MARGIN = 10;

var page = tabris.create("Page", {
  title: data.title,
  background: "white",
  topLevel: true
});

tabris.create("CollectionView", {
   items: data.menuItems,
   itemHeight: 100,
   layoutData: {left: 0, top: 0, right: 0, bottom: 0},
   initializeCell: function(cell) {
      var price = tabris.create("TextView", {
         layoutData: {centerY: 0, right: MARGIN, width: 100},
         alignment: "right",
         font: "18px",
         foreground: "#a4c639"
      }).appendTo(cell);
      var name = tabris.create("TextView", {
         layoutData: {left: MARGIN, top: MARGIN, right: [price, 0]},
         font: "bold 18px"
      }).appendTo(cell);
      var description = tabris.create("TextView", {
         layoutData: {left: MARGIN, top: [name, MARGIN / 2], right: [price, 0]}
      }).appendTo(cell);
      tabris.create("Composite", {
         layoutData: {left: 0, bottom: 0, right: 0, height: 1},
         background: "#e3e3e3"
      }).appendTo(cell);
    
      cell.on("itemchange", function(item) {
         name.set("text", item.name);
         description.set("text", item.description);
         price.set("text", item.price);
      });
   }
}).appendTo(page);

page.open();