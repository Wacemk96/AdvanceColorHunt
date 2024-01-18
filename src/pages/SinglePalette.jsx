import React, {useState, useEffect} from 'react';
import {Spinner} from 'flowbite-react';
import {Link, useParams} from 'react-router-dom';
import {usePaletteContext} from '../Context/PaletteContext';
import ContentTemplate from '../components/ContentTemplate';
import HeroSection from '../components/HeroSection';

const SinglePalette = () => {
  const {isStoredPalettes} = usePaletteContext();
  const {id} = useParams();
  const [palette, setPalette] = useState(null);
  useEffect(() => {
    const fetchPalette = async () => {
      try {
        const storedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
        const selectedPalette = storedPalettes.find((p) => p.id.toString() === id);
        setPalette(selectedPalette);
      } catch (error) {
        console.error('Error fetching palette:', error);
      }
    };
    fetchPalette();
  }, [id]);
  if (!palette) {
    return (
      <div className="items-center text-center dark:bg-gray-900">
        <Spinner
          aria-label="Extra large spinner example"
          size="xl"
        />
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={'Live Preview'}
        description={''}
      />
      <div className="flex flex-col lg:flex-row border-solid border-2 gap-4 ">
        <div className="content min-h-screen lg:w-4/5">
          <ContentTemplate
            ColorData={palette}
            id={id}
          />
        </div>
        <div className="sidebar h-screen overflow-y-scroll lg:w-1/5 w-full p-4 bg-slate-100 dark:bg-gray-900">
          {isStoredPalettes?.map((palette, index) => {
            return (
              <div
                key={index}
                className="myApp flex flex-col gap-2"
              >
                <Link to={`/${palette.id}`}>
                  <div className="flex flex-col w-full h-[16rem] mb-5 mx-auto rounded-lg overflow-hidden shadow-lg">
                    {palette.colors.map((color, colorIndex) => {
                      return (
                        <div
                          key={colorIndex}
                          style={{backgroundColor: color.color}}
                          className="bg-slate-300 w-[100%] hover:w-[170%] transition-all duration-500 ease-in-out h-16"
                        ></div>
                      );
                    })}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SinglePalette;

// import React, {useState, useEffect} from 'react';
// import ColorCard from '../components/card/ColorCard';
// import CardFooter from '../components/card/CardFooter';
// import {Spinner} from 'flowbite-react';
// import {useParams} from 'react-router-dom';

// const SinglePalette = () => {
//   const {id} = useParams();
//   const [palette, setPalette] = useState(null);

//   useEffect(() => {
//     const storedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
//     const selectedPalette = storedPalettes.find((p) => p.id.toString() === id);

//     setPalette(selectedPalette);
//   }, [id]);

//   if (!palette) {
//     return (
//       <div className="items-center text-center dark:bg-gray-900">
//         <Spinner
//           aria-label="Extra large spinner example"
//           size="xl"
//         />
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="myapp min-h-screen px-8 pt-10 dark:bg-gray-900">
//         <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 h-[30rem] mx-auto rounded-lg overflow-hidden shadow-lg">
//           <div
//             key={palette.id}
//             className="myapp"
//           >
//             <div className="flex flex-col w-full h-[25rem] mx-auto rounded-lg overflow-hidden shadow-lg">
//               {palette.colors.map((color, colorIndex) => (
//                 <ColorCard
//                   key={colorIndex}
//                   color={color.color}
//                   code={color.color}
//                 />
//               ))}
//             </div>
//             <CardFooter isOpenView={true} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SinglePalette;
