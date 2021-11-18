import {planets} from './DetailsList';
import LoadingPage from './LoadingPage';
import PlanetCards from './PlanetCards';
import useFetch from './useFetch';

const PlanetSection = () => {
    const { cards, isPending } = useFetch(planets)


    return ( 
        <div>
            { isPending && <LoadingPage />}

            { cards && <PlanetCards data={planets}/>}
        </div>
     );
}
 
export default PlanetSection;