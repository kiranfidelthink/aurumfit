import { User } from "./types";


export async function getUsers(users: Array<any>, args: any): Promise<any> {
    var allUSers: Array<User> = []
    users.forEach(element => {
        let oneUser = {
            firstName: element.first,
            lastName: element.last,
            email: element.email,
            mobile: 1234 //Random API does not provide the mobile number field. Added a static one for all the users.
        }
        allUSers.push(oneUser)
    });

    if(args.limit>0)
    {
        allUSers = allUSers.sort(function(a,b) {
            if ( a.firstName < b.firstName ){
                return -1;
              }
              if ( a.firstName > b.firstName ){
                return 1;
              }
              return 0;
        });  

        return allUSers.slice(args.offset, (args.offset+args.limit)); 
    }
    return allUSers;
}

export async function getUser(users: Array<any>, args: any): Promise<any> {
    const allUSers: Array<User> = []
    var user: any;
    const userDefault: User = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: 0
    }
    var attr: any="";
    if(args.email){
        attr = "email"
    }
    if(args.first){
        attr = "first"
    }
    if(args.last){
        attr = "last"
    }

    users.forEach((item) => {
         if(item[attr] === args[attr])
         {
             user = item
         }
     })
  
    if (user)
    {
        userDefault.firstName = user.first,
        userDefault.lastName = user.last,
        userDefault.email = user.email,
        userDefault.mobile = 1234
        return userDefault
    }
    else
    {
        return userDefault
    }
        
}
//}