import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page : string;

}

const Link = ({page,}: Props) => {
    const LowerCasePage = page.toLowerCase().replace(/ /g, '');
  return (
    <AnchorLink
    className={`${selectedPage === LowerCasePage ? "text-primary-500" : ""}
    transition duration-400 ease-in-out hover:text-primary-300 `}
    href={`#${LowerCasePage}`}
    >
        {page}
    </AnchorLink>
  )
}

export default Link;