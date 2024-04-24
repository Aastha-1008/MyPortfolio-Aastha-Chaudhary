import './details.scss';

const Details = () => {
    return(
        <div className='detailsSection'>
            <h3>Education</h3>
            <div className='education'>
                <div className='degreeName'>
                    <div className='name'>
                        <h4>B.Tech in Computer Science</h4>
                    </div>
                    <div className='year'>
                        <h5>2019-2023</h5>
                    </div>
                </div>
                <div className='clgName'>
                    <p>KIET Group of Institutions</p>
                </div>
                <div className='percentage'>
                    <p>Percentage : <span>88%</span></p>
                </div>
            </div>
            <div className='education'>
                <div className='degreeName'>
                    <div className='name'>
                        <h4>Intermediate</h4>
                    </div>
                    <div className='year'>
                        <h5>2018-2019</h5>
                    </div>
                </div>
                <div className='clgName'>
                    <p>CBSE Board, Ghaziabad</p>
                </div>
                <div className='percentage'>
                    <p>Percentage : <span>87%</span></p>
                </div>
            </div>
            
            <div className='education'>
                <div className='degreeName'>
                    <div className='name'>
                        <h4>High School</h4>
                    </div>
                    <div className='year'>
                        <h5>2016 - 2017</h5>
                    </div>
                </div>
                <div className='clgName'>
                    <p>CBSE Board, Ghaziabad</p>
                </div>
                <div className='percentage'>
                    <p>CGPA : <span>10</span></p>
                </div>
            </div>
        </div>
    );
}

export default Details;