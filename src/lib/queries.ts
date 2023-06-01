import { Api } from 'nocodb-sdk'

export const getCreators = async (): Promise<any[]> => {
    const api = new Api({
        baseURL: process.env.NEXT_PUBLIC_NOCODB_URL,
        headers: {
          'xc-token': process.env.NEXT_PUBLIC_NOCODB_TOKEN
        },timeout: 15000
    })
    
    try {
        const res = await api.dbTableRow.list('v1', 'union', 'artistes')
        console.log(`found ${res.list.length} artists`)
        return res.list
    } catch(e) {
        console.log('e', e)
    }
    
    return []
}