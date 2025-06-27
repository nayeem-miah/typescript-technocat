{
    //  encapsulation, access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        private amount: number;

        constructor(id: number, name: string, amount: number) {
            this.id = id;
            this.name = name;
            this.amount = amount
        }

        public addDeposit(balance: number) {
            this.amount = this.amount + balance;
            return this.amount
        }

        protected getBalance() {
            return this.amount
        }

        public showBalance() {
            return this.getBalance();
        }
    };

    class StudentAccount extends BankAccount {
        test() {
            return this.getBalance();
        }
    }

    const studentAccount = new BankAccount(23, "nayeem", 405);
    console.log(studentAccount.showBalance());


    const studentAccount1 = new StudentAccount(32, "nayeem2", 540);
    studentAccount1.addDeposit(230);
    console.log(studentAccount1.showBalance());










    // 
}