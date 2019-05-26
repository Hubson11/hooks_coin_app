import React from 'react';
import styled from 'styled-components';
import useInput from './../hooks/useInput';
import useFilterInputValue from './../hooks/useFilterInputValue';

function FormComponent(props) {
    const { value: nickname, setValue: setNickname } = useInput()
    const { value: textAreaValue, setValue: setTextArea } = useInput()
    const { filteredValue } = useFilterInputValue(textAreaValue)

    const { articles, setArticles } = props 
    function submitData(e){
        e.preventDefault();
        setArticles([
            ...articles,
            {
            owner: nickname,
            article: filteredValue
        }])
        setNickname('')
        setTextArea('')
    }
    return(
        <form onSubmit={submitData}>
            <AreaWrapper>
                <AreaBox value={textAreaValue} placeholder="Start writting" onChange={(e) => setTextArea(e.currentTarget.value)} />
                <ViewBox>{filteredValue}</ViewBox>
            </AreaWrapper>
            <InputComponent
                type="text"
                placeholder="Type your nickname"
                value= {nickname}
                onChange={(e) => setNickname(e.currentTarget.value)}
            />
            <Button>Zatwierdź atrykuł</Button>
        </form>
    )
}

export default FormComponent;


const InputComponent = styled.input`
    line-height: 24px;
    font-size: 16px;
    padding: 4px 6px;
    margin: 15px 0;
    display: inline-block;
`

const Button = styled.button`
    width: 140px;
    height: 24px;
    margin: 0 30px;
`

const AreaWrapper = styled.div`
    display: flex;
    min-height: 200px;
    max-height: 500px;
`

const ViewBox = styled.div`
    margin: 0  10px;
    flex: 1;
    border: 1px solid black;
    padding: 8px;
    border-radius: 6px;
    font-size: 20px;
    flex: 1;
`

const AreaBox = styled.textarea`
    margin: 0 auto;
    padding: 8px;
    border: 1px solid silver;
    border-radius: 6px;
    font-size: 20px;
    flex: 1;
`
