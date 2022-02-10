export const TravelCard = ({ children, className }) => {
  return <div className={className ?? 'card'} >{children}</div>;
};

const HeaderImage = ({ className, backgroundImage = '' }) => (
  <div className={`${className ?? 'bg-cover bg-center h-3/5 rounded-t-lg w-full'} ${backgroundImage}`} />
);

const Body = ({ children, className }) => (
  <div className={`${className ?? 'cardBody'}`}>
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
