import styled from 'styled-components';

export const Outline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TabTitle = styled.div`
    width: 100%;
    padding: 1.2em ;
    font-size: 1.3rem;
    font-weight: 420;
    border-bottom: 1px solid gray;
    @media screen and (max-width: 1024px){
        color: white;
        font-size: 0.1rem;
        border-bottom: none;
    };
`;

//for MyPage) Delete, PwCheck
export const Title = styled.p`
    font-size: 1.2em;
    padding: 2em 0;
    @media screen and (max-width: 1024px){
        font-size: 1.3rem;
        padding: 2em 0;
    };
    @media screen and (max-width: 480px){
        font-size: 1rem;
    };
`;

//for MyPage Info, PwCheck
export const Val = styled.input`
    font-size: 1rem;
    padding: 0.6em;
    border-radius: 5px;
    border: 1px solid #C3C3C3;
`;

export const Btn = styled.button`
    color: white;
    background-color: skyblue;
    font-size: 1rem;
    padding: 0.4em 1.5em;
    margin: 2em;
    border-radius: 5px;
    border: 1px solid skyblue;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 480px){
        padding: 0.3em 1.2em;
        font-size: 0.8rem;
    };
`;