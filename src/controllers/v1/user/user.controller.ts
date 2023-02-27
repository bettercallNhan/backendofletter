// import { User } from './../../../schema/user.schema';
// import { UserService } from 'src/services/user/user.service';
// import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

// @Controller('user')
// export class UserController {
//     constructor(private userService : UserService){}

//     @Get('all')
//     getAll(){
//         return this.userService.getAll();

//     }
//     @Get()
//     getId(@Query('id') id: string){
//         return this.userService.findById(id);
//     }
//     @Delete()
//     deleteId(@Query('id') id: string){
//         return this.userService.deleteById(id);
//     }
//     @Post('create')
//     createUser(@Body() user : User){
//         return this.userService.createUser(user);
//     }
//     @Put('update')
//     updateUser (@Body() user : User,@Body('_id') id : string){
//         return this.userService.updateUser(id,user);
//     }


// }
