import CabinetNav from '@/components/cabinet-nav/cabinet-nav';

export interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <section className="px-4 pt-6 pb-[60px] md:px-5 md:pt-[50px] md:pb-[160px] xl:px-20">
      <div className="min-h-[350px] md:min-h-[450px] border-[#B1B1B1] border-[1px] rounded">
        <CabinetNav />
        {children}
      </div>
    </section>
  );
};

export default layout;
