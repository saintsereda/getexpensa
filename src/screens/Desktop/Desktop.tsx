import React from "react";
import { Button } from "../../components/ui/button";

export const Desktop = (): JSX.Element => {
  return (
    <main className="flex justify-center w-full min-h-screen [background:linear-gradient(180deg,rgba(27,27,27,1)_0%,rgba(0,0,0,1)_100%)]">
      <div className="w-full max-w-[1440px] min-h-screen flex items-center justify-center">
        <section className="flex flex-col items-center gap-10 w-full max-w-[874px] px-4">
          <div className="w-24 h-24 overflow-hidden rounded-full">
            <img
              className="w-[200%] h-[200%] object-cover scale-150 origin-center"
              alt="Expensa logo"
              src="./expensalogo.gif"
            />
          </div>

          <div className="flex flex-col items-center gap-10 w-full">
            <header className="flex flex-col items-center w-full">
              <h1 className="font-['Inter',Helvetica] font-normal text-white text-[80px] text-center tracking-[0.37px] leading-[90px]">
                Expense tracking,
              </h1>
              <span className="font-['Just_Me_Again_Down_Here',Helvetica] font-normal text-[#69ff98] text-[140px] text-center tracking-[0.37px] leading-[90px] -mt-6 whitespace-nowrap">
                simplified
              </span>
            </header>

            <div className="flex flex-col items-center gap-5 max-w-[610px]">
              <p className="font-['Inter',Helvetica] font-normal text-white text-base text-center leading-7">
                Effortlessly manage your spending with Expensa – a beautifully
                simple app designed for quick expense entry and a seamless,
                intuitive experience
              </p>

              <Button
                variant="outline"
                className="h-12 px-4 py-0 bg-white text-black rounded-[48px] border-[#ffffff14] hover:bg-white/90"
              >
                <span className="font-['Inter',Helvetica] font-medium text-base">
                  Get early access
                </span>
                <span className="font-['SF_Pro_Rounded-Regular',Helvetica] text-[17px] ml-1.5">
                  →
                </span>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};