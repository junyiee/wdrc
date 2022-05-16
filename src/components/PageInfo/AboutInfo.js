import React from 'react';
import { 
    InfoContainer,
    InfoWrapper,
    TextWrapper,
    Heading,
    SubHeading,
    Subtitle
} from './PageElements';

const AboutInfo = () => {
  return (
    <>
        <InfoContainer>
            <InfoWrapper>
                <TextWrapper>
                    <Heading>About Us</Heading>
                    <Subtitle>
                        World Drag Racing Circuit (WDRC) is a drag racing league created so that imports, which includes Japanese, 
                        European, and exotics vehicle can race against domestic market vehicles. Due to the variety of formats and 
                        platform our index and heads up program minimizes the need to focus on specific engine size, chassis or 
                        power adders. This program makes racing fun, while maintaining the challenging and competitive nature of the 
                        sport of drag racing.
                    </Subtitle>
                    <Subtitle>
                        Mr. Thomas built, raced, and tuned all types of cars and wanted to create a series that would allow these 
                        cars to race against each other. We created the series after doing several themed events for domestic and 
                        the import cars and realized it was more fun if they raced each other. WDRC race series facilities all types 
                        of drag racing platforms and creates an even playing field for all. The index class eliminates the need for 
                        monitoring engine size, turbo size and drive train format. Run the time, run the index, simple and fun.
                    </Subtitle>
                    <SubHeading>WHY IMPORTS VS DOMESTICS?</SubHeading>
                    <Subtitle>
                        With the complexity of the vehicle and the various drive trains that comes with todays vehicles, it becomes 
                        difficult to have a class to fit all.
                    </Subtitle>
                    <Subtitle>
                        Since we primarily cater to the street modifiers of both import and domestic formats, it was important to keep 
                        it simple. Vinny Ten of Vinny Ten Racing created the Index format, which simplified the classes by focusing on 
                        the times these cars ran and not the chassis layout, engine or power adders. Again making it simple and keeping 
                        it fun and competitive for all.
                    </Subtitle>
                </TextWrapper>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default AboutInfo