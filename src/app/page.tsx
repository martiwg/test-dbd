'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { NumericInput } from '@/components/ui/numeric-input'
import { PREGUNTES } from '@/lib/preguntes'
import { Pregunta } from '@/lib/types'
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckSquare,
  Coffee,
  Github,
  RefreshCcw,
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'default' | 'bookmarked' | 'errors'>(
    'default',
  )

  const [questions, setQuestions] = useState<Pregunta[]>(PREGUNTES)

  const [bookmarkedQuestionIndices, setBookmarkedQuestionIndices] = useState<
    number[]
  >([])

  const [errorQuestionIndices, setErrorQuestionIndices] = useState<number[]>([])

  const initQuestions = () => {
    setQuestions(PREGUNTES)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedQuestionIndex = localStorage.getItem('currentQuestionIndex')
      if (storedQuestionIndex) {
        setCurrentQuestionIndex(Number(storedQuestionIndex))
      } else {
        setCurrentQuestionIndex(0)
      }

      const storedBookmarkedIndices = localStorage.getItem(
        'bookmarkedQuestionIndices',
      )
      const storedErrorIndices = localStorage.getItem('errorQuestionIndices')

      if (storedBookmarkedIndices) {
        setBookmarkedQuestionIndices(
          JSON.parse(storedBookmarkedIndices) as number[],
        )
      }
      if (storedErrorIndices) {
        setErrorQuestionIndices(JSON.parse(storedErrorIndices) as number[])
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'bookmarkedQuestionIndices',
        JSON.stringify(bookmarkedQuestionIndices),
      )
      localStorage.setItem(
        'errorQuestionIndices',
        JSON.stringify(errorQuestionIndices),
      )
    }
  }, [bookmarkedQuestionIndices, errorQuestionIndices])

  useEffect(() => {
    if (currentQuestionIndex != 0) {
      localStorage.setItem('currentQuestionIndex', String(currentQuestionIndex))
    }
  }, [currentQuestionIndex])

  useEffect(() => {
    if (questions.length === 0) setViewMode('default')
  }, [questions])

  useEffect(() => {
    if (viewMode === 'default') {
      initQuestions()
    } else if (viewMode === 'bookmarked') {
      setQuestions(
        questions.filter((_, index) =>
          bookmarkedQuestionIndices.includes(index),
        ),
      )
      setCurrentQuestionIndex(0)
    } else if (viewMode === 'errors') {
      setQuestions(
        questions.filter((_, index) => errorQuestionIndices.includes(index)),
      )
      setCurrentQuestionIndex(0)
    }
    setSelectedAnswer(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewMode])

  const handleToggleBookmark = () => {
    const question = questions[currentQuestionIndex]

    const currentIndex = PREGUNTES.findIndex(
      q => q.pregunta === question.pregunta,
    )

    if (bookmarkedQuestionIndices.includes(currentIndex)) {
      setBookmarkedQuestionIndices(
        bookmarkedQuestionIndices.filter(index => index !== currentIndex),
      )
    } else {
      setBookmarkedQuestionIndices(
        Array.from(new Set([...bookmarkedQuestionIndices, currentIndex])),
      )
    }
  }

  const handleRemoveErrorQuestion = () => {
    const question = questions[currentQuestionIndex]

    const currentIndex = PREGUNTES.findIndex(
      q => q.pregunta === question.pregunta,
    )

    const tempErrorQuestionIndices = errorQuestionIndices.filter(
      index => index !== currentIndex,
    )

    setErrorQuestionIndices(tempErrorQuestionIndices)

    setQuestions(
      PREGUNTES.filter((_, index) => tempErrorQuestionIndices.includes(index)),
    )

    setSelectedAnswer(null)
  }

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)

    if (index !== questions[currentQuestionIndex].correcta) {
      setErrorQuestionIndices(
        Array.from(new Set([...errorQuestionIndices, currentQuestionIndex])),
      )
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(null)
    }
  }

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setCurrentQuestionIndex(randomIndex)
    setSelectedAnswer(null)
  }

  const isQuestionBookmarked = () => {
    const question = questions[currentQuestionIndex]
    if (!question) return false

    const currentIndex = questions.findIndex(
      q => q.pregunta === question.pregunta,
    )

    return bookmarkedQuestionIndices.includes(currentIndex)
  }

  return (
    <main className='flex flex-col items-center justify-between w-svw h-svh p-4'>
      <nav className='flex gap-4 items-center mb-4 text-sm text-muted-foreground'>
        <span
          onClick={() => setViewMode('default')}
          className={`${
            viewMode === 'default' ? 'text-foreground' : ''
          } cursor-pointer hover:text-foreground`}
        >
          inicio
        </span>
        <span
          onClick={() => setViewMode('bookmarked')}
          className={`${
            viewMode === 'bookmarked' ? 'text-foreground' : ''
          } cursor-pointer hover:text-foreground`}
        >
          guardados
        </span>
        <span
          onClick={() => setViewMode('errors')}
          className={`${
            viewMode === 'errors' ? 'text-foreground' : ''
          } cursor-pointer hover:text-foreground`}
        >
          errores
        </span>
      </nav>
      <div className='w-full sm:w-[500px] flex flex-col gap-4'>
        <div className='flex gap-2 justify-between items-center'>
          <div className='flex gap-2'>
            <Link
              href={'https://github.com/martiwg/test-dbd'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub repository'
              title='GitHub repository'
              className={`hover:text-foreground cursor-pointer transition-colors text-sm`}
            >
              <Github className='w-5 h-5' />
            </Link>
          </div>
          <div className='flex gap-2 justify-center items-center mb-1'>
            <NumericInput
              className='w-[56px] h-8'
              isInteger
              min={1}
              max={questions.length}
              value={currentQuestionIndex + 1}
              onChange={value => {
                if (value) {
                  setCurrentQuestionIndex(value - 1)
                  setSelectedAnswer(null)
                }
              }}
            />
            <span className='text-muted-foreground'>/</span>
            <span className='text-muted-foreground'>{questions.length}</span>
          </div>
          <div className='flex gap-2'>
            <div onClick={handleToggleBookmark}>
              <Bookmark
                className='w-5 h-5'
                fill={isQuestionBookmarked() ? 'currentColor' : 'none'}
              />
            </div>
            {viewMode === 'errors' && (
              <div>
                <CheckSquare
                  className='w-5 h-5'
                  onClick={handleRemoveErrorQuestion}
                />
              </div>
            )}
          </div>
        </div>
        {currentQuestionIndex < questions.length && (
          <div>
            <div className='rounded-md shadow-sm p-4 w-full bg-muted'>
              {questions[currentQuestionIndex]?.pregunta}
            </div>
            <div className='mt-4 flex flex-col gap-1'>
              {questions[currentQuestionIndex]?.opcions.map((answer, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className='flex gap-2 cursor-pointer rounded-md px-4 py-1 hover:bg-muted transition-colors'
                  style={{
                    backgroundColor:
                      selectedAnswer === index &&
                      index === questions[currentQuestionIndex].correcta
                        ? 'rgba(0, 255, 0, 0.1)'
                        : selectedAnswer === index &&
                          index !== questions[currentQuestionIndex].correcta
                        ? 'rgba(255, 0, 0, 0.1)'
                        : '',
                  }}
                >
                  <div>
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'][index]}
                    {')'}
                  </div>
                  <div>{answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className='flex justify-between mt-4'>
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex <= 0}
            variant='outline'
          >
            <ArrowLeft />
            Anterior
          </Button>
          <Button
            onClick={handleRandom}
            variant='outline'
          >
            <RefreshCcw />
            Aleatorio
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentQuestionIndex >= questions.length - 1}
          >
            Siguiente
            <ArrowRight />
          </Button>
        </div>
      </div>
      <Link
        href={'https://www.buymeacoffee.com/martiwg'}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Buy me a coffee'
        title='Buy me a coffee'
        className='h-8 flex items-center justify-center gap-2'
      >
        <Coffee className='w-4 h-4 mx-auto text-muted-foreground' />
        <span className='text-muted-foreground text-xs text-center'>
          Buy me a coffee
        </span>
      </Link>
    </main>
  )
}
