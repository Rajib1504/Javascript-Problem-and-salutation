const ticketCost = 120;
const securityC = 500;
const stuffLunchC = 50;
function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }
  const totalEarnig = ticketCost * ticketSale;
  const totalLunchCost = 50 * 8;
  const totalExpence = securityC + totalLunchCost;
  const profit = totalEarnig - totalExpence;
  return profit;
}
const tickets = calculateMoney(29);
console.log(tickets);
