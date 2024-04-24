import Center from './center/center';
import './front.scss';
import RightSide from './rightSide/rightSide';

const Front = () => {
    return(
        <div className='frontSection'>
            <div className='centerArea'>
                <Center/>
            </div>
            <div className='rightArea'>
                <RightSide/>
            </div>
            
        </div>
    );
}

export default Front;