//Registrar ususrio
//Iniciar sesion
//cerrar sesion
//obtener informacion de usurio
//crear transacciones
//pedir prestamos
//borrar Cuenta
//actualizar

import UserModel from ".../models/UserModel";
import ManagerAccount from "./accountClass";
import ManagerCard from "./cardClass.js";

class managerUser{
    constructor( email,
        phone,
        name,
        lastName,
        isInSession,
        isAdmin,
        password) {
            this.email = email;
            this.phone = phone;
            this.name = name;
            this.lastName = lastName;
            this.isInSession = isInSession;
            this.isAdmin = isAdmin;
            this.password = password;
        }

        async register(){
            try {
                const user = await UserModel.create({
                    email: this.email,
                    phone: this.phone,
                    name: this.name,
                    lastName: this.lastName,
                    isInSession: this.isInSession,
                    isAdmin: this.isAdmin,
                    password: this.password
                });
                const MA = new ManagerAccount(user._id,12345,"Ahorro",10000);
                const currentAccount = await MA.createAccount();
                const MC = new ManagerCard(user._id, currentAccount._id, "16 digitos al azar",
                "debito", "De la fecha actual sumar 3 años", "Generar codigo de 3 cifras", "active");
                await MC.createAccount();
                return user;

            } catch (error) { 
                throw new Error(`Error al registrar usuario: ${error}`);
            }
            
        }

        async Login(email,password){
            try {
                const user = await UserModel.findOne({email: email})
                if(user){
                    throw new Error(`Usuario no registrado!`)
                }
                if (user.password !== password){
                    throw new Error("Ups, contraseña incorrecta")
                }
                return "Succeeded"
            } catch (error) {
                throw new Error(`Error al iniciar sesion: ${error}`);
            }
        }

        async getUserInfo() {
            try {
                const user = await UserModel.findById(id);
                return user;

            } catch (error) {
                throw new Error(`Error al obtener informacion del usuario: ${error}`);

            }
        }

        async updateEmail(id, email){
            try {
                if (!email) {
                    throw new Error(`Correo invalido`);
                }
                await UserModel.findByIdAndUpdate(id,{
                    $set: {email: email}
                });
                return "ok";
            } catch (error) {
                throw new Error(`Error al actualizar correo: ${error}`);

            }
            
        }

        async updatePhone(id, phone){
            try {
                if (!phone) {
                    throw new Error(`Telefono invalido`);
                }
                await UserModel.findByIdAndUpdate(id,{
                    $set: {phone: phone}
                });
                return "ok";
            } catch (error) {
                throw new Error(`Error al actualizar telefono: ${error}`);

            }
            
        }

        async updatePassword(id, password){
            try {
                if (!password) {
                    throw new Error(`Contraseña invalida`);
                }
                await UserModel.findByIdAndUpdate(id,{
                    $set: {password: password}
                });
                return "ok";
            } catch (error) {
                throw new Error(`Error al actualizar contraseña: ${error}`);

            }
            
        }

        //Pendiente eliminar usuario
}

export default managerUser;