function maxProfit(prices: number[]): number {
  let len = prices.length
  let profitArr: { hasStock: number, noStock: number }[] = new Array(prices.length).fill(0).map(item => ({
    hasStock: 0,
    noStock: 0
  }))

  profitArr[0].hasStock = -prices[0]
  profitArr[0].noStock = 0
  for (let i = 1; i < len; i++) {
    profitArr[i].hasStock = Math.max(profitArr[i - 1].noStock - prices[i], profitArr[i - 1].hasStock)
    profitArr[i].noStock = Math.max(profitArr[i - 1].noStock, profitArr[i - 1].hasStock + prices[i])
  }
  return profitArr[prices.length - 1].noStock
};