// import { User, UserDocument } from '../../schema/user.schema';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

// @Injectable()
// export class UserService {

//     constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
//     async getAll():Promise<User[]>{
//         try {
//             let users = await this.userModel.find().exec();
//             return users;
//         } catch(error){
//             return null;
//         }
        
//     }
//     async findById(id:string):Promise<User  | null>{
//         try {
//             let users = await this.userModel.findById(id).exec();
//             return users;
//         } catch(error){
//             return null;
//         }
//     }
//     async deleteById(id:string):Promise<User  | null>{
//         try {
//             let users = await this.userModel.findByIdAndDelete(id).exec();
//             return users;
//         } catch(error){
//             return null;
//         }
//     }
//     async createUser(user: User): Promise<User>{
//         try{
//             const newUser = new this.userModel(user);
//             return await newUser.save();
//         }catch(error){
//             return null;
//         }
//     }
//     async updateUser(id:string,user:User){
//         try{
//             return this.userModel.updateOne({_id:id},user).exec();            
//         }catch(error){
//             return null;
//         }
//     }

// }
