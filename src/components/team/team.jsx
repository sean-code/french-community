import './team.css';

const Team = () => {
    return(
        <>
            <div className="wrapper-1">
                <h1>Our Founder</h1>
                <div className="team">
                    <div className="team_member">
                        <div className="team_img">
                            <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                        </div>
                            <h3>Michael McLusky </h3>
                            <p className="role">Founder | CEO</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    </div>
                </div>
            </div>
            <div className="wrapper-2">
                <h1>Our Team</h1>
                <div className="team">
                    <div className="team_member">
                        <div className="team_img">
                            <img src="https://i.imgur.com/2pGPLrl.png" alt="Team_image" />
                        </div>
                            <h3>Tobi Bamtefa</h3>
                            <p className="role">UI developer</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    </div>
                    <div className="team_member">
                        <div className="team_img">
                            <img src="https://i.imgur.com/jQj1I8E.png" alt="Team_image" />
                        </div>
                        <h3>Nicole Galicia</h3>
                            <p className="role">Tester</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p></div>
                        <div className="team_member">
                            <div className="team_img">
                                <img src="https://i.imgur.com/2Necikc.png" alt="Team_image" />
                            </div>
                            <h3>Taylor Handley</h3>
                            <p className="role">Support Lead</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Team;