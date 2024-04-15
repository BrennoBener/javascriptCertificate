const checkCashRegister = (price, cash, cid) => {
    const check = {
      "ONE HUNDRED": 100.00,
      "TWENTY": 20.00,
      "TEN": 10.00,
      "FIVE": 5.00,
      "ONE": 1.00,
      "QUARTER": .25,
      "DIME": .10,
      "NICKEL": .05,
      "PENNY": 0.01
    }
    let allCid = 0;
    for (let i of cid) {
      allCid += i[1];
    }
    allCid = allCid.toFixed(2);
    let changeValue = cash - price;
    const changeArray = [];
    if (changeValue > allCid) {
      return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } 
      else if (changeValue.toFixed(2) === allCid) {
      return { status: "CLOSED", change: cid };
    } 
      else {
        cid = cid.reverse();
          for (let valor of cid) {
          let unit = [valor[0], 0];
          while (changeValue >= check[valor[0]] && valor[1] > 0) {
            unit[1] += check[valor[0]];
            valor[1] -= check[valor[0]];
            changeValue -= check[valor[0]];
            changeValue = changeValue.toFixed(2);
        }
        if (unit[1] > 0) {
          changeArray.push(unit);
        }
      }
    }
    if (changeValue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArray};
  }