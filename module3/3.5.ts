{
    //  access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        // private _balance: number;  // don't access children class
        protected _balance : number;  // using value children value

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name; 
            this._balance = balance;
        };

       public addDeposit(account : number) {
            this._balance = this._balance + account;
            return(this._balance);
        };


        public getBalance() {
            return(this._balance);
        };
    };

    class StudentAccount extends BankAccount{
        test(){
           console.log(this._balance);
        }
    }
    const poorManAccount = new BankAccount(12, "nayeem", 430);
    poorManAccount.name = "Nayeem Miah";
    // poorManAccount.balance = 0;  //Property 'balance' is private and only accessible within class 'BankAccount
   const myBalanceGet= poorManAccount.getBalance();
    const myBalanceAdd = poorManAccount.addDeposit(23); // add balance
    const balanceStr = (`old balance ${myBalanceGet}, my new balance ${myBalanceAdd}`);
    console.log( balanceStr.toUpperCase());




    // 
}