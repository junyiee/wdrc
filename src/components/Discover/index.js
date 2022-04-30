import React from 'react';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import Icon4 from '../../images/svg-4.svg';
import { 
    DiscoverContainer, 
    DiscoverH1, 
    DiscoverWrapper, 
    DiscoverLink,
    DiscoverCard,
    DiscoverIcon,
    DiscoverH2,
} from './DiscoverElements';

const Discover = () => {
  return (
    <>
        <DiscoverContainer id="discover">
            <DiscoverH1>Discover More</DiscoverH1>
            <DiscoverWrapper>
                <DiscoverLink to='/login'>
                    <DiscoverCard>
                        <DiscoverIcon src={Icon2} />
                        <DiscoverH2>Schedule & Tickets</DiscoverH2>
                    </DiscoverCard>
                </DiscoverLink>
                <DiscoverLink to='/login'>
                    <DiscoverCard>
                        <DiscoverIcon src={Icon3} />
                        <DiscoverH2>Classes</DiscoverH2>
                    </DiscoverCard>
                </DiscoverLink>
                <DiscoverLink to='/login'>
                    <DiscoverCard>
                        <DiscoverIcon src={Icon4} />
                        <DiscoverH2>Results</DiscoverH2>
                    </DiscoverCard>
                </DiscoverLink>
            </DiscoverWrapper>
        </DiscoverContainer>
    </>
  )
}

export default Discover