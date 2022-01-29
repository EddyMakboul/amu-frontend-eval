export type Invoice = {
  id: number,
  amount: number,
  status: boolean,
  id_customer:number
}

export type Invoices = Invoice[]
