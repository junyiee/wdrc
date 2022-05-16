import React from 'react';
import { 
    InfoContainer,
    InfoWrapper,
    TextWrapper,
    Heading,
    Heading2,
    SubHeading,
    BoldText,
    SubText,
    BoldSubHeading,
    SubList,
    ListItem,
    BulletList
} from './PageElements';

const ClassesInfo = () => {
  return (
    <>
        <InfoContainer>
            <InfoWrapper>
                <TextWrapper>
                    <Heading2>Classes</Heading2>
                    <Heading>RACEWARS / WORLD DRAG RACING CIRCUIT</Heading>
                    <SubHeading>2022 WDRC Racing Classes and Rules</SubHeading>
                    <BoldText>For all World Drag Racing Circuit and 742 Racewars Events</BoldText>
                    <SubList>
                        <ListItem>All classes are Import vs Domestic</ListItem>
                        <ListItem>
                            We do not run all the classes at all the tracks. We will advertise ahead of 
                            time which classes will be available at each location.
                        </ListItem>
                        <ListItem>
                            All events are Hot Lap Test and Tune. WDRC created hot lap TEST AND TUNE/QUALIFYING to allow drivers 
                            the maximum amount of runs within a three-hour time frame before we start eliminations.
                        </ListItem>
                    </SubList>
                    <BoldText>TEST/TUNE QUALIFYING:</BoldText>
                    <SubList>
                        <ListItem>
                            Drivers will not be called to the lanes during this time frame, it is the drivers/ team responsibility 
                            to manage the cool down and service time to get all their runs in by the end of the allotted time.
                        </ListItem>
                        <ListItem>Every test and tune pass are a qualifying pass.</ListItem>
                        <ListItem>All classes are random pairing, we do not do ladders.</ListItem>
                        <ListItem>
                            <b>BUY BACKS</b>, we will choose the options based on track and time allowance.
                        </ListItem>
                        <BulletList>
                            <ListItem>
                                <b>OPTION 1</b> First round buy backs will be put back into the second round of eliminations. 
                                For championship classes you will not get points when you buy back in, you will be allowed to advance 
                                if you win and will get point only for rounds that you win.
                            </ListItem>
                            <ListItem>
                                <b>OPTION 2</b> Buy Backs will run 1 race, the winners of that race will be put back into the rounds. 
                                The buyback race will take place before second round of each class.
                            </ListItem>
                        </BulletList>
                        <ListItem>
                            WDRC follows NHRA Rules, all cars must be legal for their ET/MPH, all equipment must be up to date. 
                            Please refer to the NHRA rule book for further details.
                        </ListItem>
                        <ListItem>WDRC will run IHRA rules at IHRA tracks only.</ListItem>
                    </SubList>
                    <BoldSubHeading>QUARTER MILE RACING</BoldSubHeading>
                    <BoldText>HEADS UP CLASSES. <i>Imports and Domestics</i></BoldText>
                    <SubText>
                        All formats FWD, RWD and AWD. No chassis restriction on turbo size or weight. No weight restriction, no power 
                        adder restriction. No electronics except where stated.
                    </SubText>
                    <BulletList>
                        <ListItem>Car must run on DOT approved drag radials except FWD is allowed slicks.</ListItem>
                        <ListItem>
                            Car must be NHRA certified for the speed. Driver must have required NHRA License for 9.99 and faster if track requires it.
                        </ListItem>
                        <ListItem>All light duty full body trucks, no limits, and no restrictions</ListItem>
                    </BulletList>
                    <SubList>
                        <ListItem>
                            <b>SFWD VS MODERN MUSCLE</b> <i>Heads up, Pro 400 tree Points Race</i>
                        </ListItem>
                        <BulletList>
                            <ListItem>SFWD Pro cars VS Post 2008 and up Domestics and Imports</ListItem>
                            <ListItem>Older cars are allowed to run with the required safety equipment.</ListItem>
                            <ListItem>
                                All cars must be factory body original suspension mounting points, front end, full chassis or uni body race car.
                            </ListItem>
                            <ListItem>This class will be a 32-car field qualifying class with a bump spot.</ListItem>
                            <ListItem>This is an open class for Domestics and Imports. Minimum 32 car field for full payouts.</ListItem>
                        </BulletList>
                        <ListItem>
                            <b>TRES QUATRO VS Outlaw</b> <i>Heads-up Pro 400 tree</i>
                        </ListItem>
                        <BulletList>
                            <ListItem>Power adders, small block, big block, Rotary, inline six or four cylinder engine.</ListItem>
                            <ListItem>Cars can be half backed or full tube chassis.</ListItem>
                            <ListItem>Must have working head lights and taillights.</ListItem>
                            <ListItem>
                                All entries have the option to run either a 275 drag radial tire or 28inch by 10.6inch bias slick on any type of 
                                rear suspension.
                            </ListItem>
                            <ListItem>This class will be a 32-car field qualifying class with a bump spot.</ListItem>
                            <ListItem>This is an open class for Domestics and Imports. Minimum 32 car field for full payouts.</ListItem>
                        </BulletList>
                    </SubList>
                    <BoldText>INDEX CLASS – 32 car field qualifier</BoldText>
                    <SubText>
                        All formats FWD, RWD and AWD. No chassis restriction on turbo size or weight. No electronics. Car must run on 
                        DOT approved drag radials except FWD is allowed slicks. Car must be NHRA certified for the speed.
                    </SubText>
                    <SubList>
                        <ListItem>
                            <b>10.50</b> <i>I2 Super Street SS Points Race</i>
                        </ListItem>
                        <BulletList>
                            <ListItem>Full body only, interior is optional.</ListItem>
                            <ListItem>No tubs or halfback.</ListItem>
                        </BulletList>
                        <ListItem>
                            <b>11.50</b> <i>I3 Real Street RS Points Race</i>
                        </ListItem>
                        <BulletList>
                            <ListItem>Full body and full interior.</ListItem>
                        </BulletList>
                    </SubList>
                    <BoldText>BRACKET CLASSES – ¼ MILE</BoldText>
                    <SubText>
                        All cars must meet NHRA/IHRA safety requirements. All bracket classes are open to all format cars, no weight 
                        restriction no tire restriction. This class is bases on Dial In and the computer calculates winner.
                    </SubText>
                    <SubList>
                        <ListItem>
                            <b>Bracket 1</b> <i>Bk1 12.99 and faster Points Race (Extreme Bracket)</i>
                        </ListItem>
                        <ListItem>
                            <b>Bracket 2</b> <i>Bk2 13.00 and slower</i>
                        </ListItem>
                    </SubList>
                    <BoldText>BIKE CLASSES – ¼ MILE</BoldText>
                    <SubText>
                        All riders must have full gear and leathers, no exception. Jeans may be allowed if tracks is ok with it, but 
                        must have full leather jacket, gloves and all other upper body safety gear.
                    </SubText>
                    <SubList>
                        <ListItem>
                            <b>STREET ET</b> <i>Stock bikes only, no modification.</i>
                        </ListItem>
                        <ListItem>
                            <b>PRO STREET</b> <i>Modified bikes Extended swing arm and power adders allowed</i>
                        </ListItem>
                    </SubList>
                </TextWrapper>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default ClassesInfo