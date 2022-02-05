export const Footer = ({ children }) => {
  return <footer className='w-full h-auto mb-16 bg-gray-50 lg:mb-0'>{children}</footer>;
};

const About = ({ children, title }) => (
  <div className="p-6 space-y-2">
    <p className='text-lg'>{title}</p>
    <div className="space-y-2">{children}</div>
  </div>
);

const AboutInfo = ({ paragraph }) => <p className='text-sm text-gray-300'>{paragraph}</p>;

Footer.About = About;
Footer.About.Info = AboutInfo;