export interface Product {
  id: string;
  timeToProcess: number;
}

export function timeToProcess(products: Product[], workstations = 0): number {
  products = [...products]

  if(workstations === 0) return products.reduce((total, product) => total + product.timeToProcess, 0);

  if(workstations > products.length) {
    return Math.max(...products.map(product => product.timeToProcess));
  }

  let currentItem = null
  let availableWorkStations = Array(workstations).fill(0);

  while(currentItem = products.shift()) {

    const nextWorkstationIndex = availableWorkStations.indexOf(Math.min(...availableWorkStations))

    availableWorkStations[nextWorkstationIndex] += currentItem.timeToProcess    
  }

  return Math.max(...availableWorkStations);
}