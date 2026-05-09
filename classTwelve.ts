class BankAccount12 {
    public userId: number;
    public userName :string;
    // private userBalance: number;
    protected userBalance: number;
    constructor(userId: number, userName: string, userBalance: number){
        this.userId= userId,
        this.userName= userName
        this.userBalance= userBalance
    }
    // addBalance(balance: number){
    // return this.userBalance = this.userBalance + balance
    // }
    // doing this using setter
    set addBalance(amount: number){
        this.userBalance = this.userBalance + amount
    }
    // getBalance(){
    //     return this.userBalance
    // }
    // get this by getter
    get getBalance(){
        return this.userBalance
    }
}
const find = new BankAccount12(33, '33', 3)
