import AccountModel from "../models/AccountModel";
class managerAcount {
 constructor (userID, accountNumber, accountType, balance){
    this.userID = userID;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = balance;
 }  

 async getAccounts(){
    try {
        const accounts = await AccountModel.find();
        return accounts;
    } catch (error) {
        throw new Error(`Error al obtener cuentas: ${error}`);
    }
 }

async getAccount(id){
    try {
        const account = await AccountModel.findById(id);
        return account;
    } catch (error) {
        throw new Error(`Error al obtener cuentas: ${error}`);

    }
}

async addBalance(id, amount){
    try {
        this.balance += amount;
        await AccountModel.findByIdAndUpdate(id,{
            $set:{
                balance: this.balance
            }
        })
    } catch (error) {
        throw new Error(`Error al agregar monto: ${error}`);

    }
}

async restBalance(id, amount){
    try {
        this.balance -= amount;
        await AccountModel.findByIdAndUpdate(id,{
            $set:{
                balance: this.balance
            }
        });
        return "ok";
    } catch (error) {
        throw new Error(`Error al retirar monto: ${error}`);

    }
}

async createAccount(){
    try {
        await AccountModel.create({
            userID: this.userID,
            accountNumber: this.accountNumber,
            accountType: this.accountType,
            balance: this.balance
        });
        return "ok";
    } catch (error) {
        throw new Error(`Error al crear cuenta: ${error}`);
    }
}
}

export default managerAcount;