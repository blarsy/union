"use client"
import { useEffect, useState } from 'react'
import CreatorsList from './CreatorsList'
import { getCreators } from '../../lib/queries'

const Creators = () => {
    const [creators, setCreators] = useState([] as any[])
    useEffect(() => {
        const load = async() => {
            setCreators(await getCreators())
        }
        load()
    })
    
    return <CreatorsList data={creators} />
}

export default Creators