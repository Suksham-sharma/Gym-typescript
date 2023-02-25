import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    icon: JSX.Element
    title: string
    description: string
    setSelectedPage: (page: SelectedPage) => void
}

const Benifit = ({icon , title , description, setSelectedPage}: Props) => {
  return (
    <div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center md:w-2/5 flex flex-col justify-between h-[400px]'>

        {/*Icon*/}
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4 z-10'>
                {icon}         
            </div>
        </div>

        {/*Title*/}
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='my-4'>{description}</p>

        <AnchorLink
            className="text-sm  text-primary-500 underline hover:text-secondary-500 transition-all duration-300 ease-in-out"
            onClick={() => {setSelectedPage(SelectedPage.ContactUs)}}
            href = {`#${SelectedPage.ContactUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
    </div>
  )
}

export default Benifit