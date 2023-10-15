export function setUserLanguage(userLanguage: string) {
  const parts = userLanguage.split('-')
  const language = parts[0]
  return language
}
