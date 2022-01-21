import axios from 'axios';
import { getUsers, getUser } from './DataService'
import dotenv from "dotenv"
dotenv.config()



export const resolvers = {
    Query: {
      getAllUsers: async (root: any, args: any, context: any) => {
            var allUsers: any[];
         return await axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole').then(async function (resoponse) {
           allUsers = resoponse.data 
           var res =await getUsers(allUsers, args)
           return res;
        }).catch(function( err)
        {
          allUsers=[]
        })
    },

      getUser: async (root: any, args: any, context: any) => {
            var allUsers: any[];
            var emaildId = args.email
         return await axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole').then(async function (resoponse) {
        
            allUsers = resoponse.data 
           var res =await getUser(allUsers, args)
           return res;
        }).catch(function( err)
        {
          allUsers=[]
        })

      }

    },
  };
