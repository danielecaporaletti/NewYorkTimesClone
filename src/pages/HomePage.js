import Header from '../components/header/Header';
import Main from '../components/main/Main';
import React from 'react'

const HomePage = ({ mainResults, otherArticle, funnyArticle, opinionArticles, onSectionSelect }) => {
  
  return (
    <>
        <Header onSectionSelect={onSectionSelect} />
        <Main mainResults={mainResults} otherArticle={otherArticle} funnyArticle={funnyArticle} opinionArticles={opinionArticles}/>
    </>
  )
}

export default HomePage