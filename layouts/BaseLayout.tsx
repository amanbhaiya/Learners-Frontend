const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:min-h-screen flex items-center justify-center sm:bg-gray-50">
      {children}
    </div>
  );
};

export default BaseLayout;
