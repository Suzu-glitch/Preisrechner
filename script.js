let total = 0;
let lastPrice = 0;

function addItemToOrder(name, price) {
  total = total + price;
  console.log("Der Gesamtpreis liegt bei " + total + " €");
  updateTotal();
  addOrderListItem(name, price);
  lastPrice = price;
}
function updateTotal() {
  const totalValueEl = document.querySelector(".total-value");
  totalValueEl.innerHTML = total.toFixed(2).replace(".", ",") + " €";
}

function addOrderListItem(name, price) {
  const orderListEl = document.querySelector(".order-list");
  orderListEl.innerHTML +=
    "<div>" + name + ": " + price.toFixed(2).replace(".", ",") + " €</div>";
}

function checkoutInHouse() {
  alert(
    "Bestellung für Vor Ort abgeschlossen! Gesamtbetrag: " +
      total.toFixed(2).replace(".", ",") +
      " €",
  );
  resetOrder();
}

function checkoutDelivery() {
  if (total < 20) {
    const missing = 20 - total;
    alert(
      "Mindestbestellwert 20€ für Lieferung nicht erreicht! Es fehlen noch " +
        missing.toFixed(2).replace(".", ",") +
        " €",
    );
    return;
  }

  addItemToOrder("Lieferung", 2.5);

  alert(
    "Bestellung für Lieferung abgeschlossen! Gesamtbetrag inkl. 2,50 € Lieferkosten: " +
      total.toFixed(2).replace(".", ",") +
      " €",
  );
  resetOrder();
}

function undoLastItem() {
  if (lastPrice === 0) {
    return;
  }

  total = total - lastPrice;
  updateTotal();

  const orderListEl = document.querySelector(".order-list");
  orderListEl.lastElementChild.remove();

  lastPrice = 0;
}

function resetOrder() {
  total = 0;
  updateTotal();
  document.querySelector(".order-list").innerHTML = "";
  lastPrice = 0;
}
