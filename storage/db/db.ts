// import * as config from '../config/' FIX THIS 
import { MongoClient } from 'mongodb';
import  Warp  from './models/WarpSchema'

class MongoDatabase
{
    client = new MongoClient("mongodb+srv://Ansh:UnchyPunchyLiberacci123#@cluster0.z394g.mongodb.net/test?retryWrites=true&w=majority");
    constructor()
    {
        console.log('Connecting to database ...')
        this.client.connect().then( () => console.log('Connected')).catch(err => console.log(err))
    }

    generateWarpKey()
    {
        return 1;
    }

    warpFileToStorage(fileToWarp:any, password:any)
    {
        const warpKey = this.generateWarpKey()
        const createdWarp = new Warp({
          warpedFile: fileToWarp,
          warpPasscode: password,
          warpKey: warpKey,
        }).save()

        console.log('Created a warp file')
    }

    unwarpFileFromStorage(warpKey:any, password:any)
    {
      // await file =  Warp.find().sort({ warpKey: warpKey, password: password}).then(items => return items)
    }

}

export var db = new MongoDatabase()


export default MongoDatabase