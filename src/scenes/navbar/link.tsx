import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page : string;
    selectedPage : SelectedPage;
    setSelectedPage : (page : SelectedPage) => void;

}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const LowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
  return (
    <AnchorLink
    className={`${selectedPage === LowerCasePage ? "text-primary-500" : ""}
    transition duration-500 ease-in-out hover:text-primary-300 `}
    href={`#${LowerCasePage}`}
    onClick={() => setSelectedPage(LowerCasePage)}
   >
        {page}
    </AnchorLink>
  )
}

export default Link;