const score_analysis = (total, three, twoRatio, freeRatio) => {
  if (Number.isInteger(total)
    && Number.isInteger(three) === true
    && twoRatio + freeRatio === 1) {
    let threePoint = three * 3
    let excludeThree = total - threePoint

    // 소수점 자리가 0.5 이상일 때, 반올림 실행 결정
    let twoPoint = excludeThree * twoRatio
    if (twoPoint >= Math.floor(twoPoint) + 0.5) {
      let twoChance = Math.floor(twoPoint) / 2
      // 여기서 문제가 발생하지만 결정 변경 x
      console.log(`KDT팀이 이 날 성공한 2점 슛은 총 ${Math.ceil(twoChance)}회 입니다`)
    } else {
      let twoChance = Math.floor(twoPoint) / 2
      console.log(`KDT팀이 이 날 성공한 2점 슛은 총 ${Math.floor(twoChance)}회 입니다`)
    }
    console.log(twoPoint)

    let freePoint = excludeThree * freeRatio
    if (freePoint >= Math.floor(freePoint + 0.5)) {
      let freeChance = freePoint / 2
      console.log(`그리고 상대팀으로부터 자유투를 ${Math.ceil(freeChance)}번 획득해, 총 ${Math.floor(freePoint)}개의 자유투를 성공하였습니다.`)
      console.log(`이 날 KDT팀의 자유투 성공률은 ${Math.ceil(freePoint / freeChance * 100)}% 입니다.`)
    } else {
      let freeChance = freePoint / 2
      console.log(`그리고 상대팀으로부터 자유투를 ${Math.ceil(freeChance)}번 획득해, 총 ${Math.floor(freePoint)}개의 자유투를 성공하였습니다.`)
      console.log(`이 날 KDT팀의 자유투 성공률은 ${Math.ceil(freeChance / freeChance * 100)}% 입니다.`) // 100%가 나올 수밖에 없음
    }
    console.log(freePoint)
  }
}

score_analysis(84, 16, 0.7, 0.3)