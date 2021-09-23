import React from 'react';
import { HeroContent, Wrapper } from './hero.styles';

const Hero: React.FC = () => {
    return (
        <Wrapper>
            <h1 className='heading'>
                <span className='outlined'>
                    Hello<span className='filled'>.</span>
                </span>
                <br />I am Sifatul
            </h1>
            <div className='subHeading'>
                Web Developer
                <br />
                Freelancer
            </div>
            <HeroContent>
                <div className='worksBtn'>
                    <button>
                        Show
                        <br />
                        My Works
                    </button>
                    <div className='dateContainer'>
                        <span className='day'>23</span>
                        <div className='month'>
                            sep
                            <span className='status'>available for work</span>
                        </div>
                    </div>
                </div>
                <div className='aboutMe'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
                        maiores iste eveniet delectus incidunt officiis corporis. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button className='btn'>Github</button>
                </div>
            </HeroContent>
        </Wrapper>
    );
};

export default Hero;
