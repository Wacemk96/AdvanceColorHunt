import React, {useState} from 'react';
import ColorCard from './ColorCard';
import CardFooter from './CardFooter';
import {Button, Spinner} from 'flowbite-react';
import HeroSection from '../HeroSection';
import SearchInput from '../SearchInput';
import {Link} from 'react-router-dom';
import {BsSend} from 'react-icons/bs';

const ColorPalette = () => {
  const isstoredPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPalettes, setFilteredPalettes] = useState(isstoredPalettes);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = isstoredPalettes.filter((palette) => {
      const tags = palette.tags || [];
      return tags.some((tag) => tag.toLowerCase().includes(query));
    });

    setFilteredPalettes(filteredResults);
  };

  const updateLikeCounter = (paletteId, newLikeCount) => {
    const updatedPalettes = isstoredPalettes.map((palette) => {
      if (palette.id === paletteId) {
        return {...palette, likeCounter: newLikeCount, liked: !palette.liked};
      }
      return palette;
    });

    localStorage.setItem('palettes', JSON.stringify(updatedPalettes));
    setFilteredPalettes(updatedPalettes);
  };

  const addLikeCounter = (paletteId) => {
    const paletteToUpdate = isstoredPalettes.find((palette) => palette.id === paletteId);
    const newLikeCount = paletteToUpdate
      ? paletteToUpdate.likeCounter + (paletteToUpdate.liked ? -1 : 1)
      : 1;
    updateLikeCounter(paletteId, newLikeCount);
  };

  return (
    <>
      <SearchInput
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <HeroSection />
      <div className="dark:bg-gray-900 min-h-screen">
        {isstoredPalettes.length === 0 ? (
          <div className="flex flex-col justify-center items-center text-center -mt-24">
            <Spinner
              aria-label="Extra large spinner example"
              size="xl"
            />
            <h1 className="mt-10 text-xl">Please create your own Palette</h1>
            <Link to="/create">
              <Button
                color="gray"
                className="mt-10"
              >
                <BsSend className="mr-10 h-4 w-4" />
                Submit Palette
              </Button>
            </Link>
          </div>
        ) : (
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-300 ease-in-out transform dark:bg-gray-900 pb-28">
            {filteredPalettes.length === 0 ? (
              <div className="text-center">No matching palettes found.</div>
            ) : (
              filteredPalettes.map((palette, index) => {
                return (
                  <div
                    key={index}
                    className="myapp"
                  >
                    <Link to={`/${palette.id}`}>
                      <div className="flex flex-col w-full h-[20rem] mx-auto rounded-lg overflow-hidden shadow-lg">
                        {palette.colors.map((color, colorIndex) => (
                          <ColorCard
                            key={colorIndex}
                            color={color.color}
                            code={color.color}
                          />
                        ))}
                      </div>
                    </Link>
                    <CardFooter
                      addLike={() => addLikeCounter(palette.id)}
                      likeValue={palette.likeCounter}
                      liked={palette.liked}
                    />
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ColorPalette;
