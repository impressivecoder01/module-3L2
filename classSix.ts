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
    addBalance(balance: number){
     this.userBalance = this.userBalance + balance
    }
    getBalance(){
        return this.userBalance
    }
}
const rohanBankAccount = new BankAccount2(22,'33', 3)
rohanBankAccount.addBalance(30)
console.log(rohanBankAccount.getBalance());