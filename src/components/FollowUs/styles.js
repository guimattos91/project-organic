import styled from 'styled-components';
import followus1 from '../../assets/banner/bgbannerfollowus.png';

export const BgContainer01 = styled.div`
    background: rgba(0, 0, 0, 0.7) url(${followus1});
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    padding: 7%;
`;

export const ButtonFollowUs = styled.button`
    border-radius: 100px;
    padding: 10px 30px 10px 30px;
    background-color: #829b5e;
    border: none;
    color: #fff;
    margin-right: 2%;
`;
