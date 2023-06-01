import CreatorsList from './CreatorsList'
import { getCreators } from '../../lib/queries'

const Creators = async () => {
    const creators = await getCreators()
    
    return <CreatorsList data={creators} />
}

export default Creators