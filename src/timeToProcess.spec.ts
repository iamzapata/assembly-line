import { timeToProcess, Product } from "./timeToProcess";

describe("timeToProcess", () => {

  it("returns sum of all times to process if no workstations number supplied", () => {
    const products: Product[] = [
      { id: "1", timeToProcess: 10 },
      { id: "2", timeToProcess: 20 },
      { id: "3", timeToProcess: 30 },
    ];
    expect(timeToProcess(products)).toEqual(60);
  });

  it("returns the max of all items if the workstation number is greater than the number of items", () => {
    const products: Product[] = [
      { id: "1", timeToProcess: 10 },
      { id: "2", timeToProcess: 20 },
      { id: "3", timeToProcess: 30 },
      { id: "4", timeToProcess: 40 }
    ];

    expect(timeToProcess(products, 50)).toEqual(40);
  })

  it('returns total time to process if the workstation number is less than the number of items', () => {
    let products: Product[] = [
      { id: "1", timeToProcess: 1 },
      { id: "2", timeToProcess: 3 },
      { id: "3", timeToProcess: 5 },
      { id: "4", timeToProcess: 10 }
    ];

    expect(timeToProcess(products, 2)).toEqual(13);
    expect(timeToProcess(products, 3)).toEqual(11);
    
    products = [
      {id: "1", timeToProcess: 2},
      {id: "2", timeToProcess: 7},
      {id: "3", timeToProcess: 15},
      {id: "4", timeToProcess: 2},
    ]

    expect(timeToProcess(products)).toEqual(26)
    expect(timeToProcess(products, 2)).toEqual(17)
    expect(timeToProcess(products, 50)).toEqual(15)

    products = [
      {id: "1", timeToProcess: 1},
      {id: "2", timeToProcess: 2},
      {id: "3", timeToProcess: 3},
      {id: "4", timeToProcess: 4},
      {id: "4", timeToProcess: 5},
    ]

    expect(timeToProcess(products, 50)).toEqual(5)
  });

})