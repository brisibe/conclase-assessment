import React from "react";
import styled from "styled-components";
import groupedIconwebp from "../assets/images/icongroup.webp";
import { ReactComponent as Arrow } from "../assets/icons/right.svg";
import linkbg from "../assets/icons/link-bg.svg";

const InfoSection = () => {
  return (
    <Section>
      <div className="details">
        <h1>Over 1000+ jobs from top companies in our network</h1>
        <p>
          Every day we index millions of jobs directly from employer websites.
          We’re committed to accurate, high-quality jobs so you won’t find old,
          duplicated, or spammy listings here.
        </p>
        <p>
          Organize and automate your job search while at home or on the go.
          We’ll deliver new, relevant jobs of interest straight to your inbox.
        </p>

        <div className="link">
          <p>Learn More</p>
          <Arrow />
        </div>
      </div>
      <div className="image">
        <img src={groupedIconwebp} type="image/webp" />
      </div>
    </Section>
  );
};

export default InfoSection;

const Section = styled.section`
  background-color: rgba(6, 148, 42, 0.14);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px 12px;

  img {
    width: 300px;
    height: 300px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 24px;
    line-height: 34px;
  }
  p {
    margin-bottom: 24px;
  }

  .image {
    margin-top: 32px;
  }

  .link {
    display: flex;
    cursor: pointer;

    svg {
      margin-top: 4px;
      width: 24px;
      height: 24px;
    }

    p {
      padding-right: 16px;
      background-image: url(${linkbg});
      background-repeat: no-repeat;
      background-position: bottom;
      font-weight: 500;
      color: #06942a;
    }
  }

  @media (min-width: 860px) {
    height: 700px;
    flex-direction: row;
    justify-content: space-around;

    img {
      width: 458px;
      height: 501px;
    }
    .details {
      max-width: 520px;
    }

    h1 {
      font-size: 32px;
      margin-bottom: 50px;
      line-height: 54px;
    }
  }
`;
