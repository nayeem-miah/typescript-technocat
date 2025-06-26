{
    // getter and setter
    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance : number;

        // create constructor
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance
        };
        // set addDeposit(amount: number){
        //     return  this._balance = this._balance +amount;
        // }

        // setter balance
        set deposit(amount: number){
          this._balance = this._balance +amount;
        };
        // getter
        get balanceGetter(){
            return this._balance;
        };

        // addDeposit(amount: number){
        //     return  this._balance = this._balance +amount;
        // };
        // getBalance(){
        //     return this._balance;
        // };
    };



    // create instance
    const newUser = new BankAccount(23, "Nayeem", 450);
    //  const newBalance=newUser.getBalance();
    // const addDeposit = newUser.addDeposit(40);
    // console.log(newBalance, addDeposit);
    
    const addDeposit = newUser.deposit = 40;
    const getBalance = newUser.balanceGetter;
    console.log(getBalance);




    // 
}