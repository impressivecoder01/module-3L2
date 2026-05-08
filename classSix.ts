// getter and setter
class BankAccount2 {
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
const rohanBankAccount = new BankAccount2(22,'33', 3)
// rohanBankAccount.addBalance(30)
// console.log(rohanBankAccount.getBalance());
rohanBankAccount.addBalance = 1000
rohanBankAccount.addBalance = 1000
// console.log(rohanBankAccount);
console.log(rohanBankAccount.getBalance);