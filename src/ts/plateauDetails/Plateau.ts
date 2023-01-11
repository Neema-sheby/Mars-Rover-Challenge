export class Plateau {
  public constructor(
    public numRow: number,
    public numCol: number,
    public gridGap: number
  ) {
    this.numRow = numRow;
    this.numCol = numCol;
    this.gridGap = gridGap;
  }

  public getLength(): number {
    return this.numRow * this.gridGap;
  }
  public getWidth(): number {
    return this.numCol * this.gridGap;
  }
}
