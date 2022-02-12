import PropTypes from "prop-types"

export const FrequentQuestions = ({ children }) => {
  return (
    <div id="faqs" className="w-full h-full pb-8">
      <div className="flex flex-col w-full h-full px-6 space-y-4">
        <p className="mt-6 text-3xl font-semibold text-primary dark:text-gray-300">
          FAQS
        </p>
        {children}
      </div>
    </div>
  )
}

FrequentQuestions.propTypes = {
  children: PropTypes.node.isRequired,
}

const FQA = ({ title, description }) => (
  <div>
    <p className="text-xl font-semibold text-primary dark:text-gray-300">
      {title}
    </p>
    <p className="pt-2 text-md dark:text-gray-300">{description}</p>
  </div>
)

FQA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

FrequentQuestions.FQA = FQA
