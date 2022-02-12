import PropTypes from "prop-types"

const TrendingStays = ({ children, id, title }) => {
  return (
    <section id={id} className="h-full px-6 lg:px-14">
      <p className="pb-6 text-3xl font-semibold text-primary dark:text-gray-300">
        {title}
      </p>
      {children}
    </section>
  )
}

TrendingStays.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const Top = ({ children }) => (
  <div className="w-full mb-8 h-96 lg:flex-none">{children}</div>
)

Top.propTypes = {
  children: PropTypes.node.isRequired,
}

const Bottom = ({ children }) => (
  <div className="lg:flex lg:h-1/3 lg:w-full lg:flex-none">{children}</div>
)

Bottom.propTypes = {
  children: PropTypes.node.isRequired,
}

const BottomLeft = ({ children }) => (
  <div className="w-full mb-8 h-96 lg:w-3/5 lg:h-auto">{children}</div>
)

BottomLeft.propTypes = {
  children: PropTypes.node.isRequired,
}

const BottomRight = ({ children }) => (
  <div className="lg:flex lg:flex-col lg:w-full lg:pl-8">{children}</div>
)

BottomRight.propTypes = {
  children: PropTypes.node.isRequired,
}

const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

const CardTitle = ({ title, className }) => (
  <p className={`${className ?? "cardTitle lg:text-gray-200"}`}>{title}</p>
)

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

const CardDescription = ({ description, className }) => (
  <p
    className={`${
      className ??
      "pl-8 mr-24 text-base font-extrabold text-white lg:text-xl lg:text-gray-300"
    }`}
  >
    {description}
  </p>
)

CardDescription.propTypes = {
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
}

TrendingStays.Top = Top

TrendingStays.Bottom = Bottom
TrendingStays.BottomLeft = BottomLeft
TrendingStays.BottomRight = BottomRight

TrendingStays.Card = Card
TrendingStays.Card.Title = CardTitle
TrendingStays.Card.Description = CardDescription

export default TrendingStays
