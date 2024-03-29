import { find, matchesProperty } from "lodash";

export function generateChartData(arr, h = 230) {
  const res = determineChartData(arr, h);

  return res;
}

function determineChartData(arr, h) {
  let arrSorted = [...arr].sort((a, b) => a - b);

  let yn = [];
  let constant;
  let translateX = 0;
  for (let i = 0; i < arrSorted.length - 1; i++) {
    let max = arrSorted[arrSorted.length - (i + 1)];
    let secMax = arrSorted[arrSorted.length - (i + 2)];
    constant = h / arrSorted[arrSorted.length - 1];
    if (i === 0) {
      yn.push(constant * (max - secMax));
    } else {
      yn.push(yn[yn.length - 1] + constant * (max - secMax));
    }
  }

  const heightArr = yn.map((item) => h - item);

  let sortedDataProperties = [];

  for (let i = 0; i < arrSorted.length; i++) {
    sortedDataProperties.push({
      rectHeight:
        i === arrSorted.length - 1 ? h : heightArr[heightArr.length - (i + 1)],
      textValue: arrSorted[i],
      translateX: "0",
      translateY: `${i === arrSorted.length - 1 ? 0 : yn[yn.length - (i + 1)]}`,
      textY:
        i === arrSorted.length - 1
          ? h - 20
          : heightArr[heightArr.length - (i + 1)] - 20,
      textX: "22.5",
      rectWidth: "45",
      fillColor: "rgb(173, 216, 230)",
    });
  }

  let unsortedNewData = [];

  for (let i = 0; i < arr.length; i++) {
    unsortedNewData.push(
      find(sortedDataProperties, matchesProperty("textValue", arr[i]))
    );
  }

  for (let i = 0; i < unsortedNewData.length; i++) {
    unsortedNewData[i] = {
      ...unsortedNewData[i],
      translateX: `${i === 0 ? 0 : (translateX += 50)}`,
      translateY: `${unsortedNewData[i].translateY}`,
    };
  }

  return unsortedNewData;
}

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (Number(arr[i - 1]) > Number(arr[i])) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;

        swapped = true;
      }
    }
  } while (swapped === true);

  return arr;
}
