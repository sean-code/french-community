import './events.css';

const Events = () =>{
    return(
        <>
            <h1 className='events-header'>Our Events</h1>
            <section className='events-section'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="scrollcards">
                            <div className="events-card">
                                <img className="card-img-top" src="https://i.pinimg.com/originals/38/26/35/3826356d576c97d35e01c091dfa73463.jpg" />
                                <div className="card-block">
                                    <h4 className="card-title">Charity Event</h4>
                                    <p className="card-text">21st March 2023</p>
                                </div>
                            </div>
                            <div className="events-card">
                                <img className="card-img-top" src="https://i.pinimg.com/originals/85/b5/e5/85b5e578071ab4b73202f7623ae66556.jpg" />
                                <div className="card-block">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Text Here</p>
                                </div>
                            </div>

                            <div className="events-card">
                                <img className="card-img-top" src="https://grundycountyhs.files.wordpress.com/2022/10/grundy-county-historical-society-coal-city-history-landscape-poster-1.jpg" />
                                <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Text Here</p>
                                </div>
                            </div>

                            <div className="events-card">
                                <img className="card-img-top" src="https://cdn.dribbble.com/users/224000/screenshots/12483986/jkdc_holyfamilycommunitycenter-posters_4x.png" />
                                <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Text Here</p>
                                </div>
                            </div>

                            <div className="events-card">
                                <img className="card-img-top" src="https://www.weekendnotes.com/im/005/05/alliance-francaise-french-film-festival-2022-commu1.jpeg" />
                                <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Text Here</p>
                                </div>
                            </div>

                            <div className="events-card">
                                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1q9nU3CAYyzSSj0JS75nKOBNjoOH0VLW8c7sx0u3WFXCK7rYseJOsQ9aoTSE1V1mHGzM&usqp=CAU" />
                                <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Text Here</p>
                                </div>
                            </div>

                            <div className="events-card">
                                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PRL2w05zGaCWw0pjGLZpn1TgvbJG9pnvNw&usqp=CAU" />
                                <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Text Here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Events;