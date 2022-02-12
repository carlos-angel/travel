import PropTypes from "prop-types"

export const TabBar = ({ children }) => {
  return (
    <div
      id="tab_bar"
      className="fixed bottom-0 left-0 flex items-center justify-center w-full h-16 space-x-8 bg-gray-100 shadow-md dark:bg-gray-700 lg:hidden"
    >
      {children}
    </div>
  )
}

TabBar.propTypes = {
  children: PropTypes.node.isRequired,
}

const Link = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick}>
    {children}
  </a>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

TabBar.Link = Link
