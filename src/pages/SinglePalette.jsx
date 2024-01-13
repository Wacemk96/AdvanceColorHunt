import React, {useState, useEffect} from 'react';
import ColorCard from '../components/card/ColorCard';
import CardFooter from '../components/card/CardFooter';
import {Spinner} from 'flowbite-react';
import {useParams} from 'react-router-dom';

const SinglePalette = () => {
  const {id} = useParams();
  const [palette, setPalette] = useState(null);

  useEffect(() => {
    const storedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
    const selectedPalette = storedPalettes.find((p) => p.id.toString() === id);

    setPalette(selectedPalette);
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
      <div className="myapp min-h-screen px-8 pt-10 dark:bg-gray-900">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 h-[30rem] mx-auto rounded-lg overflow-hidden shadow-lg">
          <div
            key={palette.id}
            className="myapp"
          >
            <div className="flex flex-col w-full h-[25rem] mx-auto rounded-lg overflow-hidden shadow-lg">
              {palette.colors.map((color, colorIndex) => (
                <ColorCard
                  key={colorIndex}
                  color={color.color}
                  code={color.color}
                />
              ))}
            </div>
            <CardFooter isOpenView={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePalette;
