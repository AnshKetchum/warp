import router from './routes';
import { db } from '../../db/db'

class WarpStorage 
{
    constructor()
    {
        router.get('/test-route', (req:any, res:any) => res.json({ message: "hello"}))
        router.get('/:fileToUnwarp/:warpKey/:password', this.warpFromStorage)
        router.post('/:fileToWarp/:password', this.warpToStorage)

        console.log('creating routes')
    }

    warpToStorage(req:any, res:any)
    {
        let { fileToWarp, password } = req.params

        let warpKey = db.warpFileToStorage(fileToWarp, password)
        return res.json({
            response: "post",
            id: warpKey,
            keyReceived: warpKey,
        })
    }

    warpFromStorage(req:any, res:any)
    {
        let { warpKey, password } = req.params

        let fileFromWarp = db.unwarpFileFromStorage(warpKey, password);
        return res.json({
            response: "get",
            fileFromWarp: fileFromWarp,
        })
    }

}

export default WarpStorage 