// access modifiers
class BankAccount {
    public userId: number;
    public userName :string;
    // private userBalance: number;
    protected userBalance: number;
    constructor(userId: number, userName: string, userBalance: number){
        this.userId= userId,
        this.userName= userName
        this.userBalance= userBalance
    }
    addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }
}
// class StudentAccount extends BankAccount {
//     test(){
//         this.userBalance
//     }
// }
const myAccount = new BankAccount(11,'rohan', 333)
myAccount.addBalance(33)
myAccount.addBalance(33000)
console.log(myAccount)