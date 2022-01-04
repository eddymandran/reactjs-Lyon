import {useParams} from 'react-router-dom'


const AboutName = () => {
    const params = useParams();
    return (
        <h3>Hello {params.name}</h3>
    )
}

export default AboutName;