import React, { useState } from 'react';
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import {
    MainPage,
    Title,
    Underline,
    ReviewContainer,
    ReviewSection,
    Author,
    QuoteIcon,
    InfoI,
    InfoJ,
    ImgContainer,
    PersonImg,
    ButtonContainer,
    Buttons,
    RandButton
} from "./styling"

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    // check if index is out of the person-array
    const checkNumber = (number) => {
        // if to high, start from 0
        if (number > people.length - 1) {
            return 0;
        }
        // if too low, start from end (length-1)
        if (number < 0) {
            return people.length - 1
        }
        return number
    };

    // Get the next person in the people-array by adding 1
    const nextPerson = () => {
        setIndex(index => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    };

    // get the previous person in the people-array by subtracting 1
    const prevPerson = () => {
        setIndex(index => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    };

    // get random person
    // use .floor to get an even number and multiply by the length of the array to include all wanted numbers in the array
    // to avoid getting the same person twice in a row, add 1 if the randomNumber is the same as the index we're on.
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber))
    };

    return (
        <>
            <MainPage>
                <ReviewContainer>
                    <Title>
                        our reviews
                    </Title>
                    <Underline />
                    <ReviewSection>
                        <ImgContainer>
                            <PersonImg src={image} alt={name} />
                            <QuoteIcon>
                                <FaQuoteRight />
                            </QuoteIcon>
                        </ImgContainer>
                        <Author>{name}</Author>
                        <InfoJ>{job}</InfoJ>
                        <InfoI>{text}</InfoI>
                        <ButtonContainer>
                            <Buttons>
                                <FaChevronLeft onClick={prevPerson} />
                            </Buttons>
                            <Buttons>
                                <FaChevronRight onClick={nextPerson} />
                            </Buttons>
                        </ButtonContainer>
                        <RandButton onClick={randomPerson}>
                            surprise me
                        </RandButton>
                    </ReviewSection>
                </ReviewContainer>
            </MainPage>
        </>
    )
}

export default Review
