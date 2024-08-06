//Solicitar
//Pagar
//Mostrar prestamo
//Mostrar Prestamos
//Validar usuario

import PaymentModel from "../models/PaymentModel";
import LoanModel from "../models/LoanModel";

class loanManager {
    contructor (userId,
        loanType,
        amount,
        interestRate,
        numberPayments,
        startDate,
        endDate,
        status
    ){
        this.userId = userId,
        this.loanType = loanType,
        this.amount = amount,
        this.interestRate = interestRate,
        this.numberPayments = numberPayments,
        this.startDate = startDate,
        this.endDate = endDate,
        this.status = status
    }

    async createLoan(){
        try {
            const loan = await LoanModel.create ({
                userId: this.userId,
                loanType: this.loanType,
                amount: this.amount,
                interestRate: this.interestRate,
                numberPayments: this.numberPayments,
                startDate: this.startDate,
                endDate: this.endDate,
                status: this.status
        });

        return loan;

        } catch (error) {
            throw new Error(`Error al crear prestamo: ${error}`);

        }
    }

    async payLoan(
        userId,
        loanId,
        amount,
        numerPayment
    ) {
        try {
            const payment = await PaymentModel.create({
                userId,
                loanId,
                amount,
                numerPayment
            })
        } catch (error) {
            throw new Error(`Error al intentar pagar: ${error}`);
        }
    }

    async getLoan() {
        try {
            const loans = await LoanModel.find();
            return loans;
        } catch (error) {
            throw new Error(`Error al obtener prestamos: ${error}`);
        }
    }

    async validateUser() {
        /*El usuario debe tener al menos 3 días en la plataforma
        Haber hecho 2 transacciones
        Y mantener un saldo superior a 5000*/
    }
}