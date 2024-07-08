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
    <div className="flex items-end h-[22%] w-[90%] font-light tracking-wider pb-2.5 bg-[#E1D8D5]">
      <div className="text-[28px] mr-2.5 relative bottom-[calc((28px-18px)/2)]">Sohum Dalal.</div>
      <div className="flex items-end">
        <div className="text-[18px] mr-2.5">engineer +</div>
        <div className="flex items-end text-[18px] overflow-hidden h-[18px]">
          <div className="relative animate-rotate">
            <div className="h-[18px] leading-[18px]">craftsman</div>
            <div className="h-[18px] leading-[18px]">chef</div>
            <div className="h-[18px] leading-[18px]">baker</div>
            <div className="h-[18px] leading-[18px]">barista</div>
            <div className="h-[18px] leading-[18px]">farmer</div>
            <div className="h-[18px] leading-[18px]">craftsman</div> {/* Repeat first element */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
