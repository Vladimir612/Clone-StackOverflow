import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { publicFetch } from '../util/fetcher'

import Layout from '../components/layout'
import QuestionWrapper from '../components/question/question-wrapper'
import QuestionStats from '../components/question/question-stats'
import QuestionSummary from '../components/question/question-summary'
import PageTitle from '../components/page-title'
import { Spinner } from '../components/icons'

const HomePage = () => {
  const router = useRouter()
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get('/question')
      setQuestions(data)
    }

    const fetchQuestionByTag = async () => {
      const { data } = await publicFetch.get(`/questions/${router.query.tag}`)
      setQuestions(data)
    }

    if (router.query.tag) {
      fetchQuestionByTag()
    } else {
      fetchQuestion()
    }
  }, [router.query.tag])

  return (
    <Layout>
      <Head>
        <title>
          {router.query.tag ? router.query.tag : 'Questions'} - Stackoverflow
        </title>
      </Head>

      <PageTitle
        title={
          router.query.tag
            ? `Questions tagged [${router.query.tag}]`
            : 'All Questions'
        }
        button
        borderBottom={false}
      />

      {!questions && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {questions?.map(
        ({ id, votes, answers, views, title, text, tags, author, created }) => (
          <QuestionWrapper key={id}>
            <QuestionStats
              voteCount={votes.length}
              answerCount={answers.length}
              view={views}
            />
            <QuestionSummary
              id={id}
              title={title}
              tags={tags}
              author={author}
              createdTime={created}
            >
              {text}
            </QuestionSummary>
          </QuestionWrapper>
        )
      )}
    </Layout>
  )
}

export default HomePage
