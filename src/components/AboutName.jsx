import {useParams} from 'react-router-dom'
import Card from './Card';

const AboutName = () => {
    const params = useParams();

    return (
        <Card title={params.name} />
    )
}

export default AboutName;