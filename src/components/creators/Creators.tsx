import { Api } from 'nocodb-sdk'
import CreatorsList from './CreatorsList'
//import { useEffect, useState } from 'react'

const getCreators = async (): Promise<any[]> => {
    const api = new Api({
        baseURL: process.env.NOCODB_URL,
        headers: {
          'xc-token': process.env.NOCODB_TOKEN
        }
    })

    try {
        const res = await api.dbTableRow.list('v1', 'union', 'artistes')
        return res.list
    } catch(e) {
        console.log('e', e)
    }
    
    return []
}

const Creators = async () => {
    const creators = await getCreators()
    
    return <CreatorsList data={creators} />
}

export default Creators