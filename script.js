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
  const totalValue = document.querySelector(".total-value");
  totalValue.innerHTML = total.toFixed(2).replace(".", ",") + " €";
}

function addOrderListItem(name, price) {
  const orderList = document.querySelector(".order-list");
  orderList.innerHTML +=
    "<div>" + name + ": " + price.toFixed(2).replace(".", ",") + " €</div>";
}
function checkoutInHouse() {
  alert(
    "Bestellung für Vor Ort abgeschlossen! Gesamtbetrag: " +
      total.toFixed(2).replace(".", ",") +
      " €",
  );
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

  total = total + 2.5;
  updateTotal();
  alert(
    "Bestellung für Lieferung abgeschlossen! Gesamtbetrag inkl. 2,50 € Lieferkosten: " +
      total.toFixed(2).replace(".", ",") +
      " €",
  );
}
document.getElementById("inhouse").addEventListener("click", checkoutInHouse);
document.getElementById("delivery").addEventListener("click", checkoutDelivery);
function undoLastItem() {
  if (lastPrice === 0) {
    return;
  }

  total = total - lastPrice;
  updateTotal();

  const orderList = document.querySelector(".order-list");
  orderList.lastElementChild.remove();

  lastPrice = 0;
}

function resetOrder() {
  total = 0;
  updateTotal();
  document.querySelector(".order-list").innerHTML = "";
  lastPrice = 0;
}
document.getElementById("undo").addEventListener("click", undoLastItem);
document.getElementById("reset").addEventListener("click", resetOrder);
