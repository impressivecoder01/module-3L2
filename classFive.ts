// access modifiers
class BankAccount {
    public userId: number;
    public userName :string;
    private userBalance: number;
    constructor(userId: number, userName: string, userBalance: number){
        this.userId= userId,
        this.userName= userName
        this.userBalance= userBalance
    }
    addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }
}
const myAccount = new BankAccount(11,'rohan', 3333333333333)
myAccount.addBalance(33)
console.log(myAccount)