import React, {  useState } from 'react';
import styled from 'styled-components';
import FormComponent from './../components/FormComponent';

function Notebox() {
    const [ articles, setArticles ] = useState([])

    return(
        <NoteboxWrapper>
            <FormComponent articles={articles} setArticles={setArticles} />
            <ArticlesWrapper>
              {articles.map(item => (
                <ArticleContent key={`${item.article}-${item.owner}`}>
                  <ArticleText>
                    {item.article}
                  </ArticleText>
                  <ArticleOwner>
                    {item.owner}
                  </ArticleOwner>
                </ArticleContent>
              ))}
            </ArticlesWrapper>
        </NoteboxWrapper>
    )
}

export default Notebox;

const ArticleText = styled.div`
    display: block;
    font-size: 20px;
`

const ArticleOwner = styled.div`
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: silver;
    margin: 5px 0;
    text-align: right;
`

const ArticleContent = styled.div`
    border: 1px solid gray;
    border-radius: 6px;
    padding: 16px;
    margin: 10px 0;
`

const ArticlesWrapper = styled.div`
    display: block;
    margin: 10px;

`

const NoteboxWrapper = styled.div`
    margin: 10px auto;
    padding: 8px;
    height: 400px;
    display: flex;
    min-width: 600px;
    max-width: 800px;
    display: block;
`