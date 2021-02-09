import React from "react";
import {
  Wrapper,
  ImageBox,
  CommonBtn,
} from "../../components/commonComponents";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";

const ViewText = styled.div`
  margin: 6px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
  color: ${(props) => (props.isAuthor ? props.theme.darkGreyColor : ``)};
  color: ${(props) => (props.isDesc ? props.theme.greyColor : ``)};
`;

const BarWrapper = styled.div`
  width: 1350px;
  height: 35px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: ${(props) => props.theme.checkColor};
  color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
  cursor: pointer;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;
`;

const RelWrapper = styled(Wrapper)`
  position: relative;
`;

const AbImageBox = styled(ImageBox)`
  position: absolute;
  top: 0;
  left: 0;
`;

const AbWrapper = styled(Wrapper)`
  position: absolute;
  top: 2px;
  right: 2px;
`;

const MM00Presenter = ({
  videoDatum,
  fileChangeHandler,
  imagePath,
  videoDeleteHandler,
}) => {
  return (
    <Wrapper>
      <Wrapper height={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <Wrapper al={`flex-end`} padding={`20px`}>
            <ImageBox
              width={`400px`}
              height={`225px`}
              bgImg={`https://img.insight.co.kr/static/2018/11/17/700/c21832z125k305076kc1.jpg`}
            />
          </Wrapper>
        </Fade>

        <Fade right>
          <Wrapper al={`flex-start`} padding={`20px`}>
            <ViewText size={`18px`} weight={`700`} isTitle={true}>
              민기쨩의 피자토스트 만드는 방법 - 1
            </ViewText>
            <ViewText size={`12px`} weight={`400`} isAuthor={true}>
              만듀만듀밍기
            </ViewText>
            <ViewText size={`13.5px`} weight={`500`} isAuthor={true}>
              만듀만듀 밍기쨩의 피자 토스트를 만드는 방법은 ...
            </ViewText>
          </Wrapper>
        </Fade>
      </Wrapper>
      <Wrapper>
        <Flip>
          <BarWrapper />
        </Flip>

        <Fade bottom>
          <WrapWrapper dr={`row`} margin={`0px 0px 100px 0px`}>
            {videoDatum ? (
              videoDatum.length === 0 ? (
                <Wrapper>미디어 목록이 없습니다.</Wrapper>
              ) : (
                videoDatum.map((data, idx) => {
                  return (
                    <Fade bottom delay={idx * 60} key={idx}>
                      <RelWrapper
                        width={`320px`}
                        height={`180px`}
                        margin={`5px`}
                      >
                        <AbImageBox
                          width={`320px`}
                          height={`180px`}
                          bgImg={data.thumbnailPath}
                        />
                        <AbWrapper width={`60px`} height={`20px`} dr={`row`}>
                          <CommonBtn
                            isUpdate={true}
                            width={`25px`}
                            height={`10px`}
                          ></CommonBtn>
                          <CommonBtn
                            isDelete={true}
                            width={`25px`}
                            height={`10px`}
                            onClick={() => videoDeleteHandler(data._id)}
                          ></CommonBtn>
                        </AbWrapper>
                      </RelWrapper>
                    </Fade>
                  );
                })
              )
            ) : (
              <Wrapper>조회 중 입니다.</Wrapper>
            )}
          </WrapWrapper>
        </Fade>
      </Wrapper>

      {/* FILE UPLOAD TEST */}
      <Image src={imagePath} />
      <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
      <FileLabel htmlFor="file-js">파일선택</FileLabel>

      <Wrapper margin={`50px 0px`}>
        <Link to="/video/upload">
          <CommonBtn isCreate={true}>동영상 업로드</CommonBtn>
        </Link>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
