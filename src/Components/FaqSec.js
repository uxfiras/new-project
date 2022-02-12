import styled from "styled-components";
import Toggle from "./Toggle";
import { Heromain } from "../style.js";
function FaqSection() {
  return (
    <>
      <FaqStylation>
        {/*1st question*/}
        <h1>
          FAQ <span>Questions</span>
        </h1>
        <QuestionDiv>
          <Toggle tittle="Who am i?">
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              aliquam animi hic sequi corporis aliquid quisquam esse placeat
              adipisci, corrupti ab perspiciatis. Inventore libero distinctio
              sunt, obcaecati blanditiis eos tenetur.
            </p>
          </Toggle>
        </QuestionDiv>

        {/*2nd question*/}
        <QuestionDiv>
          <Toggle tittle="What is UX process?">
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              aliquam animi hic sequi corporis aliquid quisquam esse placeat
              adipisci, corrupti ab perspiciatis. Inventore libero distinctio
              sunt, obcaecati blanditiis eos tenetur.
            </p>
          </Toggle>
        </QuestionDiv>

        {/*3rd question*/}
        <QuestionDiv>
          <Toggle tittle="How you can guarneetd your work to done?">
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              aliquam animi hic sequi corporis aliquid quisquam esse placeat
              adipisci, corrupti ab perspiciatis. Inventore libero distinctio
              sunt, obcaecati blanditiis eos tenetur.
            </p>
          </Toggle>
        </QuestionDiv>

        {/*4th question*/}
        <QuestionDiv>
          <Toggle tittle="How you can contact us?">
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              aliquam animi hic sequi corporis aliquid quisquam esse placeat
              adipisci, corrupti ab perspiciatis. Inventore libero distinctio
              sunt, obcaecati blanditiis eos tenetur.
            </p>
          </Toggle>
        </QuestionDiv>
      </FaqStylation>
    </>
  );
}

const QuestionDiv = styled.div`
  width: 100%;
  cursor: pointer;
`;
const FaqStylation = styled(Heromain)`
  flex-direction: column;
  flex-basis: 100%;
  justify-content: space-arou;

  align-items: flex-start;
`;

export default FaqSection;
