import PropTypes from "prop-types"

export const TravelCard = ({ children, className }) => {
  return <div className={className ?? "card"}>{children}</div>
}

TravelCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

const HeaderImage = ({ className, backgroundImage }) => (
  <div
    className={`${
      className ?? "bg-cover bg-center h-3/5 rounded-t-lg w-full"
    } ${backgroundImage}`}
  />
)

HeaderImage.propTypes = {
  backgroundImage: PropTypes.string,
  className: PropTypes.string,
}

HeaderImage.defaultProps = {
  backgroundImage: "",
}

const Body = ({ children, className }) => (
  <div className={`${className ?? "cardBody"}`}>{children}</div>
)

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

const Title = ({ title, className }) => (
  <p className={className ?? "font-bold pt-2 text-xl"}>{title}</p>
)

Title.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
}

const Description = ({ description, className }) => (
  <p className={className ?? "text-sm"}>{description}</p>
)

Description.propTypes = {
  description: PropTypes.string,
  className: PropTypes.string,
}

TravelCard.Title = Title
TravelCard.HeaderImage = HeaderImage
TravelCard.Description = Description
TravelCard.Body = Body
