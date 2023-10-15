import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
const PageNotFound = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className="w-hull h-full flex justify-center items-center">
      <div className="w-full h-[calc(100vh-180px)] flex flex-col justify-center items-center">
        <h1 className=" text-2xl mb-4 ">{t('page_not_found.title')}</h1>
        <p>{t('page_not_found.description')}</p>

        <Link className="mt-8 p-2 rounded-lg flex items-center gap-4 hover:bg-gray-100" to="/">
          <FiArrowLeft />
          {t('page_not_found.back')}
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
