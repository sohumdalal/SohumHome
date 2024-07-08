// 'use client'
// import React from 'react';

// const Header = () => {
//   return (
//     <div className="carousel">
//       <div className="myName">Sohum Dalal.</div>
//       <div className = "subTitle">
//         <div className="engineerPlus">engineer +</div>
//         <div className="change_outer">
//           <div className="change_inner">
//             <div className="element">craftsman</div>
//             <div className="element">chef</div>
//             <div className="element">baker</div>
//             <div className="element">barista</div>
//             <div className="element">farmer</div>
//             <div className="element">craftsman</div> {/* Repeat first element */}
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Header;


'use client'
import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-start h-[22%] w-[50%] font-light tracking-wider pb-2.5 bg-[#E1D8D5] mt-20">
      <div className="text-[48px] mb-2.5">Sohum Dalal.</div>
      <div className="text-[24px] mb-2.5">engineer +</div>
        <div className="flex flex-col items-start text-[24px] overflow-hidden h-[24px]">
          <div className="relative animate-rotate">
            <div className="h-[24px] leading-[24px] ">craftsman</div>
            <div className="h-[24px] leading-[24px]">chef</div>
            <div className="h-[24px] leading-[24px]">baker</div>
            <div className="h-[24px] leading-[24px]">barista</div>
            <div className="h-[24px] leading-[24px]">farmer</div>
            <div className="h-[24px] leading-[24px]">craftsman</div> {/* Repeat first element */}
          </div>
        </div>
    </div>
  );
}

export default Header;
