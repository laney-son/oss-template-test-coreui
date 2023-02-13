import React from "react";
import axios from "axios";

import {
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";

const UserList = () => {
  const tHeaderArr = [
    { index: 1, title: "No." },
    { index: 1, title: "ID" },
    { index: 2, title: "닉네임" },
    { index: 3, title: "이메일" },
    { index: 4, title: "가입 플랫폼 / 채널" },
    { index: 5, title: "인증여부" },
    { index: 5, title: "상세조회" },
  ];

  const data = [
    {
      userNo: 4190,
      userId: "8f5ce7fd-67eb-488d-9c9b-02ed1ac96f50",
      userPw: null,
      userEmail: "polashare2@polaris.com",
      snsId: "polashare2@polaris.com",
      joinPlatform: "WP",
      joinChannel: "P",
      userName: "polashare2",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "Y",
      emailCertDate: "2023-02-10T05:05:59",
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: "2023-02-10T05:06:00",
      regDate: "2023-02-10T05:05:59",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4189,
      userId: "bc283254-de4b-4433-974e-90b69f627454",
      userPw: null,
      userEmail: "seasae26@naver.com",
      snsId: null,
      joinPlatform: "WP",
      joinChannel: "A",
      userName: "seasae26",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "Y",
      emailCertDate: "2023-02-02T02:29:01",
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: "2023-02-08T04:46:43",
      regDate: "2023-02-02T02:28:46",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4188,
      userId: "06b697f0-f122-4482-bfb4-7b8ca67c0f88",
      userPw: null,
      userEmail: "aldusehd@gmail.com",
      snsId: "aldusehd@gmail.com",
      joinPlatform: "WP",
      joinChannel: "G",
      userName: "손미연",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "Y",
      emailCertDate: "2023-01-20T05:14:08",
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: "2023-01-20T06:49:22",
      regDate: "2023-01-20T05:14:08",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4187,
      userId: "3e6d7374-4612-485d-bc6a-50c3f88fdcdb",
      userPw: null,
      userEmail: "chosloo2835@gmail.com",
      snsId: "chosloo2835@gmail.com",
      joinPlatform: "WP",
      joinChannel: "G",
      userName: "호롤롤롤",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "Y",
      emailCertDate: "2023-01-20T04:47:01",
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: "2023-01-20T06:37:37",
      regDate: "2023-01-20T04:47:01",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4186,
      userId: "a604d133-70e3-4e5b-92db-dc88a7370d4d",
      userPw: null,
      userEmail: "polashare1@polaris.com",
      snsId: "polashare1@polaris.com",
      joinPlatform: "WP",
      joinChannel: "P",
      userName: "polashare1",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "Y",
      emailCertDate: "2023-01-11T06:17:13",
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: "2023-02-10T05:05:26",
      regDate: "2023-01-11T06:17:13",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4185,
      userId: "bbb62b65-a11c-4fb5-a1d4-baaf7a305a76",
      userPw: null,
      userEmail: "22.07.112@test.com",
      snsId: null,
      joinPlatform: "WP",
      joinChannel: "A",
      userName: "22_07_112",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "N",
      emailCertDate: null,
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: null,
      regDate: "2023-01-09T08:37:46",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4184,
      userId: "449efda0-f25d-4ff9-a816-238b0d5be0c1",
      userPw: null,
      userEmail: "22.07.11@test.com",
      snsId: null,
      joinPlatform: "WP",
      joinChannel: "A",
      userName: "22_07_11",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "N",
      emailCertDate: null,
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: null,
      regDate: "2023-01-09T08:37:03",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4183,
      userId: "e11be83d-e164-4805-b525-646ae7c4c7b9",
      userPw: null,
      userEmail: "laneyNoCert@test.com",
      snsId: null,
      joinPlatform: "WP",
      joinChannel: "A",
      userName: "laneyNoCert",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "N",
      emailCertDate: null,
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: "2022-12-23T05:08:49",
      regDate: "2022-12-23T05:08:48",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4182,
      userId: "15db9da7-8bd4-43d7-b203-dc215d1a662d",
      userPw: null,
      userEmail: "jin.j.park@gmail.com",
      snsId: null,
      joinPlatform: "WP",
      joinChannel: "A",
      userName: "jin_j_park",
      userProfileImg: null,
      userBgImg: null,
      userTitle: null,
      emailCertYn: "N",
      emailCertDate: null,
      walletAddress: null,
      walletConnectYn: "N",
      walletDeleteYn: null,
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: "2022-11-29T09:09:20",
      regDate: "2022-11-29T09:08:59",
      todayBoardUploadCnt: 0,
    },
    {
      userNo: 4181,
      userId: "758e32b8-9c35-4793-869d-d1b231ada5a6",
      userPw: null,
      userEmail: "legendary@test.com",
      snsId: null,
      joinPlatform: "WP",
      joinChannel: "A",
      userName: "legendary",
      userProfileImg:
        "https://ipfs.howlingpolawolf.io/image/EABBA3B05ACEED0ACF23B698031A52CF05E401024F918B7024E65847370D460F.png",
      userBgImg: null,
      userTitle: null,
      emailCertYn: "Y",
      emailCertDate: "2022-11-24T11:29:00",
      walletAddress: "0xf868c803c9845219ff9652fdb44f31334f6fdf8d",
      walletConnectYn: "Y",
      walletDeleteYn: "N",
      pfpProfileYn: "N",
      deleteYn: "N",
      deleteDate: null,
      lastLogin: "2023-01-11T08:16:28",
      regDate: "2022-11-24T11:26:49",
      todayBoardUploadCnt: 0,
    },
  ];

  return (
    <>
      <CTable hover>
        <CTableHead>
          <CTableRow>
            {tHeaderArr.map((item, index) => {
              return (
                <CTableHeaderCell scope="col" key={index}>
                  {item.title}
                </CTableHeaderCell>
              );
            })}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((item) => {
            return (
              <CTableRow>
                <CTableDataCell>{item.userNo}</CTableDataCell>
                <CTableDataCell>{item.userId}</CTableDataCell>
                <CTableDataCell>{item.userId}</CTableDataCell>
                <CTableDataCell>{item.userName}</CTableDataCell>
                <CTableDataCell>
                  {item.joinPlatform} / {item.joinChannel}
                </CTableDataCell>
                <CTableDataCell>{item.emailCertYn}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="dark">상세</CButton>
                </CTableDataCell>
              </CTableRow>
            );
          })}
        </CTableBody>
      </CTable>
    </>
  );
};

export default UserList;
