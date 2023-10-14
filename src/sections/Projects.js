import { Link } from 'react-router-dom';

function Projects(){
    return(
        <div style={{
            padding: '50px 150px',
        }}>
            <h2>View Our projects</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
            }}>
                <div style={{position: 'relative'}}>
                    <img src={require('../images/Card.png')} alt='' />
                    <div style={{
                        position: 'absolute',
                        backgroundColor: 'blue',
                        top: '0px',
                        width: '50%',
                        height: '70vh',
                    }}>
                        <div style={{
                            color: '#ffffff',
                            padding: '300px 20px 0 20px'
                        }}>
                            <h3>Workhub office Webflow Webflow Design</h3>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam</p>
                            <p><Link>View project</Link></p>
                        </div>
                    </div>
                </div>
                <div style={{
                    position: 'relative',
                }}>
                    <img src={require('../images/Rectangle.png')} alt='' />
                    <div style={{
                        position: 'absolute',
                        backgroundColor: 'blue',
                        top: '0px',
                        width: '100%',
                        height: '35vh',
                    }}>
                        <div style={{
                                padding: '120px 20px 0 20px',
                                color: '#ffffff'
                            }}>
                            <h3>Unisaas website<br />Design</h3>
                            <p><Link>View portfolio</Link></p>
                        </div>
                    </div>
                    <img src={require('../images/Card_2.png')} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Projects;