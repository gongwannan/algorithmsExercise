function savePrincess(road: number[][]): number {
  const minimumBloodArr: { blood: number, minimum: number }[][] = new Array(road.length).fill(new Array(road[0].length).fill({ blood: 0, minimum: 0 }));
  minimumBloodArr[0][0] = {
    minimum: road[0][0] < 0 ? -road[0][0] : 0,
    blood: road[0][0] < 0 ? 0 : road[0][0]
  }
  // 填充第一行
  for (let i = 1; i < road[0].length; i++) {
    minimumBloodArr[0][i] = getNextPoint(minimumBloodArr[0][i - 1], road[0][i])
  }
  // 填充第一列
  for (let i = 1; i < road.length; i++) {
    minimumBloodArr[i][0] = getNextPoint(minimumBloodArr[i - 1][0], road[i][0])
  }
  function getNextPoint(lastPoint: { blood: number, minimum: number }, nextPoint: number): { minimum: number, blood: number } {
    let result = {
      minimum: 0,
      blood: 0
    }
    const nextBlood = lastPoint.blood + nextPoint
    result.minimum = nextBlood < 0 ? lastPoint.minimum + -nextBlood : lastPoint.minimum
    result.blood = nextBlood < 0 ? 0 : nextBlood
    return result
  }
  // 填充表格
  for (let i = 1; i < road.length; i++) {
    for (let j = 1; j < road[0].length; j++) {
      let road1 = getNextPoint(minimumBloodArr[i - 1][j], road[i][j])
      let road2 = getNextPoint(minimumBloodArr[i][j - 1], road[i][j])
      minimumBloodArr[i][j] = road1.minimum < road2.minimum ? road1 : road2
    }
  }
  return minimumBloodArr[road.length - 1][road[0].length - 1].minimum
}
console.log(
  savePrincess([[-1, 2, 1, -3], [-1, -3, 2, -5], [1, 2, -3, 1]])
)