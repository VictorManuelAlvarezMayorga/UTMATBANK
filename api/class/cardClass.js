//crear tarjeta
//obtener una tarjeta
//obtener tarjetas

import CardModel from "../models/CardModel";

class managerCard {
    constructor(userId,
        accountId,
        cardNumber,
        cardType,
        expirationDate,
        securityCode,
        sTatus
    ) {
        this.userId = userId;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.sTatus = sTatus;
    }

    async createCard() {
        try {
            await CardModel.create({
                userId: this.userId,
                accountId: this.accountI,
                cardNumber: this.cardNumbe,
                cardType: this.cardTyp,
                expirationDate: this.expirationDate,
                securityCode: this.securityCode,
                sTatus: this.sTatus
            });
            return "ok"
        } catch (error) {
            throw new Error(`Error al crear tarjeta: ${error}`);
        }
    }

    async Cards(){
        try {
            const cards = await CardModel.find();
            return cards;
        } catch (error) {
            throw new Error(`Error al obtener tarjetas: ${error}`);
        }
     }
    
    async getCard(id){
        try {
            const card = await CardModel.findById(id);
            return card;
        } catch (error) {
            throw new Error(`Error al obtener tarjetas: ${error}`);
    
        }
    }

}
export default managerCard;
