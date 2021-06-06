import React, { Component } from 'react';
class OurTeam extends Component {
    state = {
        teams: [
            {
                id: '1',
                name: 'Nino Fachrurozy',
                job: 'Android Developer',
                url: 'assets/img/trainer/cloud/gerald.jpg',
                linkedin: 'https://linkedin.com/in/gerald-apm',
            },
            {
                id: '2',
                name: 'Eldhian Bimantaka C.',
                job: 'Android Developer',
                url: 'assets/img/trainer/cloud/gerald.jpg',
                linkedin: 'https://linkedin.com/in/gerald-apm',
            },
            {
                id: '3',
                name: 'Sablina Damayanti',
                job: 'Cloud Engineer',
                url: 'assets/img/trainer/cloud/gerald.jpg',
                linkedin: 'https://linkedin.com/in/gerald-apm',
            },
            {
                id: '4',
                name: 'Geraldhi A. P. Mahayadnya',
                job: 'Cloud Engineer',
                url: 'assets/img/trainer/cloud/gerald.jpg',
                linkedin: 'https://linkedin.com/in/gerald-apm',
            },
            {
                id: '5',
                name: 'Dympna Tinezsia Adhisti',
                job: 'ML Engineer',
                url: 'assets/img/trainer/cloud/gerald.jpg',
                linkedin: 'https://linkedin.com/in/gerald-apm',
            },
            {
                id: '6',
                name: 'Mpu Hambyah Syah B. A.',
                job: 'ML Engineer',
                url: 'assets/img/trainer/cloud/gerald.jpg',
                linkedin: 'https://linkedin.com/in/gerald-apm',
            },
        ],
    };
    render() {
        const {teams} = this.state;
        return (
            <section class="trainer-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>OUR TEAM</h2>
                                <p>Here are our Easeplantz team members:</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {teams.map(team => (
                            <div key={team.id} class="col-lg-4 col-sm-6">
                                <div class="trainer-item">
                                    <div class="ti-pic">
                                        <img src={team.url} alt=""/>
                                        <div class="ti-links">
                                            <a href={team.linkedin}><i class="fa fa-linkedin"></i></a>
                                        </div>
                                        <div class="trainer-text">
                                            <h5>{team.name+" "}<span>{"- "+team.job}</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default OurTeam;