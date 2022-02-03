export const TravelCard = ({ children, className }) => {
  return <div className={className ?? 'card'} >{children}</div>;
};

const HeaderImage = ({ className, backgroundImage = '' }) => (
  <div className={`${className ?? 'w-full h-3/5 rounded-t-lg bg-cover'} ${backgroundImage}`} />
);

const Body = ({ children, className }) => (
  <div className={`w-full h-2/5 px-4 ${className ?? 'rounded-b-lg bg-secondary text-white'}`}>
    {children}
  </div>
);

const Title = ({ title, className }) => (
  <p className={className ?? 'font-bold text-xl pt-2'}>{title}</p>
);

const Description = ({ description, className }) => (
  <p className={className ?? 'text-sm'}>{description}</p>
);

TravelCard.Title = Title;
TravelCard.HeaderImage = HeaderImage;
TravelCard.Description = Description;
TravelCard.Body = Body;
