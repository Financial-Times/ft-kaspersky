import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { device } from "~/config/utils";

import questionMark from "~/assets/doubts-button.svg";
import share from "~/assets/share.svg";

import fb from "~/assets/share/facebook.svg";
import tw from "~/assets/share/twitter.svg";
import li from "~/assets/share/linkedin.svg";
import share2 from "~/assets/share/share.svg";
import wa from "~/assets/share/whatsapp.svg";

const DisclaimerWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  max-width: 1220px;
  padding: 5px;
  margin: 0 auto;
  align-items: center;
  position: relative;

  @media ${device.tablet} {
    padding: 0 20px;
  }
`;

const DisclaimerContainer = styled.div`
  background-color: white;
  padding: 5px 0;
  z-index: 99;
  position: sticky;
  top: -1px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: -1px;
    background-color: #355778;
  }
`;

const DisclaimerClient = styled.div`
  font-family: MetricWeb, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: rgb(147, 149, 152);
  text-decoration: none;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;
const DisclaimerPc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DisclaimerPcText = styled.div`
  font-family: MetricWeb, sans-serif;
  color: #355778;
  font-weight: 600;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;
const DisclaimerPcToggle = styled.button`
  background: none;
  border: none;
  display: grid;
  place-items: center;
  padding-bottom: 2px;
  cursor: pointer;
`;

const DisclaimerShareContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DisclaimerShare = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DisclaimerShareContent = styled.span`
  color: #636364;
  margin-right: 5px;
`;

const DisclaimerShareImg = styled.img`
  height: 15px;
  width: 15px;
`;

const DisclaimerPcToggleImg = styled.img`
  height: 15px;
  width: 15px;
`;

const ShareContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  right: 0;
  background-color: white;

  @media ${device.tablet} {
    right: 20px;
    top: 120%;
    width: initial;
    height: initial;
  }
`;

const ShareWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const ShareTitle = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: #939598;
`;

const ShareIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 100%;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .shareContainerWa {
    display: flex;

    @media ${device.tablet} {
      display: none;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding: 15px 20px;
  }
`;

const ShareIcon = styled.div`
  height: 70px;
  width: 70px;
  margin: 0 15px;

  @media ${device.tablet} {
    height: 40px;
    width: 40px;
  }

  &.shareUrl {
    background-color: #215d65;
    text-align: center;
    img {
      max-width: 30px;
    }
  }

  &.shareWa {
    background-color: #25d366;
    text-align: center;
    img {
      max-width: 30px;
    }
  }
`;

const ShareIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ShareContent = styled.div`
  text-align: center;
  width: 100%;
`;
const ShareClose = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const ShareCloseImg = styled.img`
  height: 15px;
  width: 15px;
`;

const ShareCopy = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShareIconContent = styled.span`
  display: block;
  @media ${device.tablet} {
    display: none;
  }
`;

const DisclaimerContent = styled.div`
  position: absolute;
  background: #fff;
  box-shadow: 0 1px 4px rgb(77 72 69 / 15%), 0 8px 14px rgb(77 72 69 / 20%);
  top: 55px;
  max-width: 325px;
  width: 100%;
  right: 50%;
  transform: translate(50%);
  padding: 10px 16px;
  text-align: center;
  display: ${(props) => (props.show ? "block" : "none")};

  @media ${device.tablet} {
    max-width: 550px;
    width: initial;
  }
`;

const DisclaimerContentWrapper = styled.div`
  line-height: 1.2;
`;

const DisclaimerClose = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 0 5px;
  background: none;
  border: none;
  cursor: pointer;
`;

const DisclaimerCloseImg = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
`;

const Disclaimer = () => {
  const [shareObj, setShareObj] = useState({
    url: "",
    title: "",
  });
  const [showShare, setShowShare] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const router = useRouter();
  const shareTitle = useRef(null);
  const disclaimerRef = useRef(null);

  useEffect(() => {
    // const title = encodeURI(
    // 	document.querySelector('meta[name="articleName"]').content
    // );

    const title = null;
    const url = window.location.href;

    setTimeout(() => {
      setShowDisclaimer(false);
    }, 4000);

    setShareObj({
      url,
      title,
    });
  }, [router]);

  function toggleDisclaimerClose() {
    setShowDisclaimer(!showDisclaimer);
  }

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(
      function () {
        setTimeout(() => {
          shareTitle.current.innerText = "Share";
        }, 1500);
        shareTitle.current.innerText = "Copied!";
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  return (
    <DisclaimerContainer>
      <DisclaimerWrapper>
        <DisclaimerClient>Kaspersky</DisclaimerClient>
        <DisclaimerPc>
          <DisclaimerPcText>Partner Content</DisclaimerPcText>
          <DisclaimerPcToggle onClick={toggleDisclaimerClose}>
            <DisclaimerPcToggleImg src={questionMark.src} />
          </DisclaimerPcToggle>
        </DisclaimerPc>
        <DisclaimerShareContainer>
          <DisclaimerShare onClick={() => setShowShare(true)}>
            <DisclaimerShareContent>Share</DisclaimerShareContent>
            <DisclaimerShareImg src={share.src} />
          </DisclaimerShare>
        </DisclaimerShareContainer>
        <ShareContainer style={{ display: showShare ? "block" : "none" }}>
          <ShareWrapper>
            <ShareContent>
              <ShareTitle ref={shareTitle}>Share</ShareTitle>
              <ShareClose onClick={() => setShowShare(false)}>
                <ShareCloseImg src="https://ft.amicuscrm.co.uk/dist/static/pcHeader/close.svg" />
              </ShareClose>
            </ShareContent>
            <ShareIcons>
              <a
                href={`http://www.facebook.com/sharer.php?u=${shareObj.url}&t=${shareObj.title}`}
              >
                <ShareIcon>
                  <ShareIconImage src={fb.src} alt="fb" />
                </ShareIcon>
                <ShareIconContent>Share with Facebook</ShareIconContent>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareObj.url}&text=${shareObj.title}&related=ftcompanies&via=ft_content`}
              >
                <ShareIcon>
                  <ShareIconImage src={tw.src} alt="tw" />
                </ShareIcon>
                <ShareIconContent>Share with Twitter</ShareIconContent>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareObj.url}&title=${shareObj.title}&source=@ft_content`}
              >
                <ShareIcon>
                  <ShareIconImage src={li.src} alt="li" />
                </ShareIcon>
                <ShareIconContent>Share with LinkedIn</ShareIconContent>
              </a>
              <a
                className="shareContainerWa"
                href={`whatsapp://send?text=${shareObj.title}-${shareObj.url}`}
              >
                <ShareIcon className="shareWa">
                  <ShareIconImage src={wa.src} alt="wa" />
                </ShareIcon>
                <ShareIconContent>Share with WhatsApp</ShareIconContent>
              </a>
              <ShareCopy onClick={copyLink}>
                <ShareIcon className="shareUrl">
                  <ShareIconImage src={share2.src} alt="tw" />
                </ShareIcon>
                <ShareIconContent>Copy Link</ShareIconContent>
              </ShareCopy>
            </ShareIcons>
          </ShareWrapper>
        </ShareContainer>
      </DisclaimerWrapper>
      <DisclaimerContent show={showDisclaimer}>
        <DisclaimerClose onClick={toggleDisclaimerClose}>
          <DisclaimerCloseImg src="https://ft.amicuscrm.co.uk/dist/static/pcHeader/close.svg" />
        </DisclaimerClose>
        <DisclaimerContentWrapper>
          This content was paid for by Kaspersky and produced in partnership
          with the Financial Times Commercial department
        </DisclaimerContentWrapper>
      </DisclaimerContent>
    </DisclaimerContainer>
  );
};

export default Disclaimer;
