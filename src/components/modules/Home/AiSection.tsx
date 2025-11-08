import svgPaths from "@/assets/svg/svg"

function Heading() {
  return (
    <div
      className="absolute h-[40px] left-0 top-0 w-[767.995px]"
      data-name="Heading"
    >
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[47.914px] justify-center leading-[0] left-[384px] not-italic text-[30.6px] text-center text-gray-900 top-[19.68px] translate-x-[-50%] translate-y-[-50%] w-[663.61px]">
        <p className="leading-[40px]">AI-Driven Doctor Matching Technology</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div
      className="absolute font-['Inter:Regular',sans-serif] font-normal h-[55.989px] leading-[0] left-0 not-italic text-[15.3px] text-center text-gray-700 top-[55.99px] w-[767.995px]"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col h-[23.957px] justify-center left-[383.99px] top-[13.69px] translate-x-[-50%] translate-y-[-50%] w-[761.136px]">
        <p className="leading-[28px]">{`Our advanced artificial intelligence analyzes your medical needs and preferences to connect you `}</p>
      </div>
      <div className="absolute flex flex-col h-[23.957px] justify-center left-[383.99px] top-[41.68px] translate-x-[-50%] translate-y-[-50%] w-[293.061px]">
        <p className="leading-[28px]">
          with the perfect healthcare specialist.
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="absolute h-[111.979px] left-[180.71px] top-0 w-[767.995px]"
      data-name="Container"
    >
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="absolute bg-blue-100 left-[444.72px] rounded-[9999px] size-[127.995px] top-[-64px]"
      data-name="Container"
    />
  );
}

function Container2() {
  return (
    <div
      className="absolute bg-green-100 left-[-64px] rounded-[9999px] size-[127.995px] top-[443.86px]"
      data-name="Container"
    />
  );
}

function Frame() {
  return (
    <div
      className="absolute left-[11.99px] size-[23.997px] top-[11.99px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Frame">
          <path
            d={svgPaths.p32eb9300}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.pef35400}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p191ad900}
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p1c151780}
            id="Vector_4"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p39e2c800}
            id="Vector_5"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.pc6ed200}
            id="Vector_6"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p1f1b3c80}
            id="Vector_7"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p17b54580}
            id="Vector_8"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p27fda980}
            id="Vector_9"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="absolute bg-blue-600 left-0 rounded-[9999px] size-[47.995px] top-0"
      data-name="Container"
    >
      <Frame />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="absolute h-[27.995px] left-[63.98px] top-[10px] w-[243.021px]"
      data-name="Heading"
    >
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[26.524px] justify-center leading-[0] left-0 not-italic text-[17px] text-slate-900 top-[13.26px] translate-y-[-50%] w-[243.021px]">
        <p className="leading-[28px]">Smart Matching Algorithm</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="absolute h-[47.995px] left-0 top-0 w-[444.733px]"
      data-name="Container"
    >
      <Container3 />
      <Heading1 />
    </div>
  );
}

function Frame1() {
  return (
    <div
      className="absolute left-[10px] size-[20px] top-[10px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Frame">
          <path
            d="M17.5 17.5L13.8833 13.8833"
            id="Vector"
            stroke="var(--stroke-0, #2563EB)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.pcddfd00}
            id="Vector_2"
            stroke="var(--stroke-0, #2563EB)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="absolute bg-blue-100 left-0 rounded-[9999px] size-[40px] top-0"
      data-name="Container"
    >
      <Frame1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div
      className="absolute h-[23.997px] left-[51.99px] top-[8px] w-[174.693px]"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.39px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-slate-900 top-[11.55px] translate-y-[-50%] w-[174.693px]">
        <p className="leading-[24px]">Analyze Your Symptoms</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="absolute h-[40px] left-[15.99px] top-[15.99px] w-[412.754px]"
      data-name="Container"
    >
      <Container5 />
      <Paragraph1 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="absolute bg-white h-[83.971px] left-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[71.99px] w-[444.733px]"
      data-name="Container"
    >
      <Container6 />
    </div>
  );
}

function Frame2() {
  return (
    <div
      className="absolute left-[10px] size-[20px] top-[10px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Frame">
          <path
            d={svgPaths.p2f5eb900}
            id="Vector"
            stroke="var(--stroke-0, #16A34A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p25397b80}
            id="Vector_2"
            stroke="var(--stroke-0, #16A34A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p2c4f400}
            id="Vector_3"
            stroke="var(--stroke-0, #16A34A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="absolute bg-green-100 left-0 rounded-[9999px] size-[40px] top-0"
      data-name="Container"
    >
      <Frame2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div
      className="absolute h-[23.997px] left-[51.99px] top-[8px] w-[163.997px]"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.39px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-slate-900 top-[11.55px] translate-y-[-50%] w-[163.997px]">
        <p className="leading-[24px]">Match With Specialists</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div
      className="absolute h-[40px] left-[15.99px] top-[15.99px] w-[412.754px]"
      data-name="Container"
    >
      <Container8 />
      <Paragraph2 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="absolute bg-white h-[83.971px] left-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[179.96px] w-[444.733px]"
      data-name="Container"
    >
      <Container9 />
    </div>
  );
}

function Frame3() {
  return (
    <div
      className="absolute left-[10px] size-[20px] top-[10px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_1_107)" id="Frame">
          <path
            d={svgPaths.p14d24500}
            id="Vector"
            stroke="var(--stroke-0, #9333EA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M10 5V10L13.3333 11.6667"
            id="Vector_2"
            stroke="var(--stroke-0, #9333EA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_107">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="absolute bg-purple-100 left-0 rounded-[9999px] size-[40px] top-0"
      data-name="Container"
    >
      <Frame3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div
      className="absolute h-[23.997px] left-[51.99px] top-[8px] w-[173.676px]"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.39px] justify-center leading-[0] left-0 not-italic text-[13.6px] text-slate-900 top-[11.55px] translate-y-[-50%] w-[173.676px]">
        <p className="leading-[24px]">Schedule Appointments</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="absolute h-[40px] left-[15.99px] top-[15.99px] w-[412.754px]"
      data-name="Container"
    >
      <Container11 />
      <Paragraph3 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="absolute bg-white h-[83.971px] left-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-[287.93px] w-[444.733px]"
      data-name="Container"
    >
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="absolute bg-blue-600 h-[47.981px] left-0 rounded-[6px] top-[395.9px] w-[194.158px]"
      data-name="Container"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[21.39px] justify-center leading-[0] left-[24px] not-italic text-[13.6px] text-white top-[23.54px] translate-y-[-50%] w-[146.163px]">
        <p className="leading-[24px]">Try AI Doctor Finder</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div
      className="absolute h-[443.877px] left-[31.99px] top-[31.99px] w-[444.733px]"
      data-name="Container"
    >
      <Container4 />
      <Container7 />
      <Container10 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="absolute bg-blue-50 h-[507.861px] left-0 overflow-clip rounded-[16px] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_0px_0px_rgba(0,0,0,0),0px_0px_0px_0px_rgba(0,0,0,0)] top-0 w-[508.717px]"
      data-name="Container"
    >
      <Container1 />
      <Container2 />
      <Container15 />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="absolute h-[32.005px] left-0 top-0 w-[508.717px]"
      data-name="Heading"
    >
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[31.658px] justify-center leading-[0] left-0 not-italic text-[20.4px] text-gray-900 top-[15.83px] translate-y-[-50%] w-[428.824px]">
        <p className="leading-[32px]">Why Choose Our AI Doctor Matching?</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div
      className="absolute left-[11.99px] size-[23.997px] top-[11.99px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Frame">
          <path
            d={svgPaths.p15e81530}
            id="Vector"
            stroke="var(--stroke-0, #2563EB)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div
      className="absolute bg-blue-100 left-0 rounded-[6px] size-[47.995px] top-0"
      data-name="Container"
    >
      <Frame4 />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="absolute h-[83.984px] left-0 top-0 w-[47.995px]"
      data-name="Container"
    >
      <Container17 />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="absolute h-[27.995px] left-0 top-0 w-[444.733px]"
      data-name="Heading"
    >
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[23.957px] justify-center leading-[0] left-0 not-italic text-[15.3px] text-gray-900 top-[13.69px] translate-y-[-50%] w-[259.612px]">
        <p className="leading-[28px]">Personalized Recommendations</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div
      className="absolute font-['Inter:Regular',sans-serif] font-normal h-[47.995px] leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-[35.99px] w-[444.733px]"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col h-[21.39px] justify-center left-0 top-[11.55px] translate-y-[-50%] w-[379.612px]">
        <p className="leading-[24px]">{`Our AI considers your medical history, symptoms, and `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.39px] justify-center left-0 top-[35.55px] translate-y-[-50%] w-[348.556px]">
        <p className="leading-[24px]">
          preferences to suggest the most suitable doctors.
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div
      className="absolute h-[83.984px] left-[63.98px] top-0 w-[444.733px]"
      data-name="Container"
    >
      <Heading3 />
      <Paragraph4 />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="absolute h-[83.984px] left-0 top-0 w-[508.717px]"
      data-name="Container"
    >
      <Container18 />
      <Container19 />
    </div>
  );
}

function Frame5() {
  return (
    <div
      className="absolute left-[11.99px] size-[23.997px] top-[11.99px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Frame">
          <path
            d={svgPaths.p1adf8f00}
            id="Vector"
            stroke="var(--stroke-0, #16A34A)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div
      className="absolute bg-green-100 left-0 rounded-[6px] size-[47.995px] top-0"
      data-name="Container"
    >
      <Frame5 />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute h-[83.984px] left-0 top-0 w-[47.995px]"
      data-name="Container"
    >
      <Container21 />
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="absolute h-[27.995px] left-0 top-0 w-[444.733px]"
      data-name="Heading"
    >
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[23.957px] justify-center leading-[0] left-0 not-italic text-[15.3px] text-gray-900 top-[13.69px] translate-y-[-50%] w-[82.808px]">
        <p className="leading-[28px]">Save Time</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div
      className="absolute font-['Inter:Regular',sans-serif] font-normal h-[47.995px] leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-[35.99px] w-[444.733px]"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col h-[21.39px] justify-center left-0 top-[11.55px] translate-y-[-50%] w-[433.503px]">
        <p className="leading-[24px]">{`Skip the research and phone calls. Get matched with the right `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.39px] justify-center left-0 top-[35.55px] translate-y-[-50%] w-[213.623px]">
        <p className="leading-[24px]">specialist in minutes, not days.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div
      className="absolute h-[83.984px] left-[63.98px] top-0 w-[444.733px]"
      data-name="Container"
    >
      <Heading4 />
      <Paragraph5 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="absolute h-[83.984px] left-0 top-[107.98px] w-[508.717px]"
      data-name="Container"
    >
      <Container22 />
      <Container23 />
    </div>
  );
}

function Frame6() {
  return (
    <div
      className="absolute left-[11.99px] size-[23.997px] top-[11.99px]"
      data-name="Frame"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Frame">
          <path
            d={svgPaths.p4ee9100}
            id="Vector"
            stroke="var(--stroke-0, #9333EA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div
      className="absolute bg-purple-100 left-0 rounded-[6px] size-[47.995px] top-0"
      data-name="Container"
    >
      <Frame6 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="absolute h-[83.984px] left-0 top-0 w-[47.995px]"
      data-name="Container"
    >
      <Container25 />
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="absolute h-[27.995px] left-0 top-0 w-[444.733px]"
      data-name="Heading"
    >
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[23.957px] justify-center leading-[0] left-0 not-italic text-[15.3px] text-gray-900 top-[13.69px] translate-y-[-50%] w-[137.406px]">
        <p className="leading-[28px]">Better Outcomes</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div
      className="absolute font-['Inter:Regular',sans-serif] font-normal h-[47.995px] leading-[0] left-0 not-italic text-[13.6px] text-gray-600 top-[35.99px] w-[444.733px]"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col h-[21.39px] justify-center left-0 top-[11.55px] translate-y-[-50%] w-[393.596px]">
        <p className="leading-[24px]">{`Patients matched with the right specialists report higher `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.39px] justify-center left-0 top-[35.55px] translate-y-[-50%] w-[282.914px]">
        <p className="leading-[24px]">
          satisfaction and better health outcomes.
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div
      className="absolute h-[83.984px] left-[63.98px] top-0 w-[444.733px]"
      data-name="Container"
    >
      <Heading5 />
      <Paragraph6 />
    </div>
  );
}

function Container28() {
  return (
    <div
      className="absolute h-[83.984px] left-0 top-[215.96px] w-[508.717px]"
      data-name="Container"
    >
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div
      className="absolute h-[299.947px] left-0 top-[64px] w-[508.717px]"
      data-name="Container"
    >
      <Container20 />
      <Container24 />
      <Container28 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div
      className="absolute font-['Inter:Medium',sans-serif] font-medium h-[47.995px] leading-[0] left-[16.84px] not-italic text-[13.6px] text-blue-800 top-[16.84px] w-[475.027px]"
      data-name="Paragraph"
    >
      <div className="absolute flex flex-col h-[21.39px] justify-center left-0 top-[11.55px] translate-y-[-50%] w-[455.468px]">
        <p className="leading-[24px]">{`"Our AI has successfully matched over 50,000 patients with the `}</p>
      </div>
      <div className="absolute flex flex-col h-[21.39px] justify-center left-0 top-[35.55px] translate-y-[-50%] w-[243.877px]">
        <p className="leading-[24px]">{`perfect specialist for their needs."`}</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div
      className="absolute bg-blue-50 h-[81.684px] left-0 rounded-[8px] top-[395.94px] w-[508.717px]"
      data-name="Container"
    >
      <div
        aria-hidden="true"
        className="absolute border-0 border-blue-100 border-solid inset-0 pointer-events-none rounded-[8px]"
      />
      <Paragraph7 />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="absolute h-[477.62px] left-[556.71px] top-[15.12px] w-[508.717px]"
      data-name="Container"
    >
      <Heading2 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="absolute h-[507.861px] left-[31.99px] top-[175.98px] w-[1065.43px]"
      data-name="Container"
    >
      <Container16 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div
      className="absolute h-[683.837px] left-0 top-[80px] w-[1129.41px]"
      data-name="Container"
    >
      <Container />
      <Container32 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-white relative size-full" data-name="Section">
      <Container33 />
    </div>
  );
}
