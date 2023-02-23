import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children : React.ReactNode
    setSelcetedPage: (page: SelectedPage) => void
}

const ActionButton = ({children, setSelcetedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition-all duration-500 ease-in-out"
    onClick={() => {setSelcetedPage(SelectedPage.ContactUs)}}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton