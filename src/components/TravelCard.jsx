export const TravelCard = ({ children, className }) => {
  return <div className={className ?? 'card'} >{children}</div>;
};

const HeaderImage = ({ className, backgroundImage = '' }) => (
  <div className={`${className ?? 'bg-cover bg-center h-3/5 rounded-t-lg w-full'} ${backgroundImage}`} />
);

const Body = ({ children, className }) => (
  <div className={`h-2/5 px-4 w-full ${className ?? 'bg-secondary rounded-b-lg text-white'}`}>
    {children}
  </div>
);

const Title = ({ title, className }) => (
  <p className={className ?? 'font-bold pt-2 text-xl'}>{title}</p>
);

const Description = ({ description, className }) => (
  <p className={className ?? 'text-sm'}>{description}</p>
);

TravelCard.Title = Title;
TravelCard.HeaderImage = HeaderImage;
TravelCard.Description = Description;
TravelCard.Body = Body;
