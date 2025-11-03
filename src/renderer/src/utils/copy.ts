import db from '@renderer/databases'
import type { Message, Topic } from '@renderer/types'
import dayjs from 'dayjs'
import i18next from 'i18next'

import { messageToPlainText, topicToMarkdown, topicToPlainText } from './export'
import { getMainTextContent } from './messageUtils/find'

export const copyTopicAsMarkdown = async (topic: Topic) => {
  const markdown = await topicToMarkdown(topic)
  await navigator.clipboard.writeText(markdown)
  window.toast.success(i18next.t('message.copy.success'))
}

export const copyTopicAsPlainText = async (topic: Topic) => {
  const plainText = await topicToPlainText(topic)
  await navigator.clipboard.writeText(plainText)
  window.toast.success(i18next.t('message.copy.success'))
}

export const copyMessageAsPlainText = async (message: Message) => {
  const plainText = messageToPlainText(message)
  await navigator.clipboard.writeText(plainText)
  window.toast.success(i18next.t('message.copy.success'))
}

/**
 * Filter messages created today
 * @param messages Array of messages to filter
 * @returns Messages created today
 */
export const filterTodaysMessages = (messages: Message[]): Message[] => {
  return messages.filter((message) => {
    return dayjs(message.createdAt).isSame(dayjs(), 'day')
  })
}

/**
 * Copy all content written today from all topics
 * Retrieves messages from all topics and copies today's content to clipboard
 */
export const copyTodaysContent = async () => {
  try {
    // Get all topics
    const allTopics = await db.topics.toArray()

    if (!allTopics || allTopics.length === 0) {
      window.toast.info(i18next.t('message.copy.today.no_topics'))
      return
    }

    // Collect all messages from all topics
    let allMessages: Message[] = []
    for (const topic of allTopics) {
      if (topic.messages && topic.messages.length > 0) {
        allMessages = allMessages.concat(topic.messages)
      }
    }

    // Filter messages created today
    const todaysMessages = filterTodaysMessages(allMessages)

    if (todaysMessages.length === 0) {
      window.toast.info(i18next.t('message.copy.today.no_messages'))
      return
    }

    // Sort messages by creation date
    todaysMessages.sort((a, b) => {
      return dayjs(a.createdAt).isBefore(dayjs(b.createdAt)) ? -1 : 1
    })

    // Convert messages to text
    const textContent = todaysMessages
      .map((message) => {
        const role = message.role === 'user' ? '🧑‍💻 User' : '🤖 Assistant'
        const timestamp = dayjs(message.createdAt).format('HH:mm:ss')
        const content = getMainTextContent(message)
        return `[${timestamp}] ${role}:\n${content}`
      })
      .join('\n\n---\n\n')

    // Add header with date
    const header = `# ${i18next.t('message.copy.today.header')} - ${dayjs().format('YYYY-MM-DD')}\n\n`
    const fullContent = header + textContent

    // Copy to clipboard
    await navigator.clipboard.writeText(fullContent)
    window.toast.success(i18next.t('message.copy.today.success', { count: todaysMessages.length }))
  } catch (error) {
    console.error("Error copying today's content:", error)
    window.toast.error(i18next.t('message.copy.today.error'))
  }
}
