//Moviminto de dinero (Crear transaccion)
//Obtener transacciones
//Obtener transacciones por usuario

import TransactionModel from "./models/TransactionModel";

class managerTransaction {
    constructor (  accountFromId,
        accountToId,
        type,
        amount,
        description) {
            this.accountFromId = accountFromId;
            this.accountToId = accountToId;
            this.type = type;
            this.amount = amount;
            this.description = description
        }

        async createTransaction(){
            try {
                const transaction = TransactionModel.create({
            accountFromId: this.accountFromId,
            accountToId: this.accountToId,
            this: this.type,
            amount: this.amount,
            description: this.description
                })
                return transaction;
            } catch (error) {
                throw new Error(`Error al crear la transaccion: ${error}`);
            }
        }

        async getTransaction(id){
            try {
                const transaction = await TransactionModel.findById(id);
                return transaction;
            } catch (error) {
                throw new Error(`Error al obtener la transaccion: ${error}`);
            }
        }

        async getTransactions(){
            try {
                const transactions = await TransactionModel.find();
                return transactions;
            } catch (error) {
                throw new Error(`Error al obtener las transacciones: ${error}`);
            }
        }

        async getAccountTransaction(id){
            try {
                const transactions = await TransactionModel.find({accountFromId:id});
                return transactions;
            } catch (error) {
                throw new Error(`Error al obtener la transaccion: ${error}`);
            }
        }
}
export default managerTransaction;