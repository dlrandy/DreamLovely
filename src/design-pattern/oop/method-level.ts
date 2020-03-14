interface IItem {
  price: number;
  quantity: number;
}
interface IOrder {
  lineItems:IItem[];
  country: string;

}
function getOrderTotal(order:IOrder):number{
  let total = 0;
  order.lineItems.forEach(it => {
    total += it.price * it.quantity;
    if (order.country === 'zh') {
      total += total * 0.07;
    } else {
      total += total * 0.079;
    }
  });

  return total;
}

// =======================

function getTaxRate(country:string):number {
  if (country === 'zh') {
    return 0.07;
  } else {
    return 0.079;
  }
}

function getOrderTotalBetter(order:IOrder):number{
  let total = 0;
  order.lineItems.forEach(it => {
    total += it.price * it.quantity;
    total += total * getTaxRate(order.country);
  });

  return total;
}












