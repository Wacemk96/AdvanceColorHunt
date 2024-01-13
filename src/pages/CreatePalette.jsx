import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import {Button} from 'flowbite-react';
import {ChromePicker} from 'react-color';
import {BsSend} from 'react-icons/bs';
import {MdClose} from 'react-icons/md';

const CreatePalette = () => {
  const [paletteCounter, setPaletteCounter] = useState(() => {
    const storedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];

    return storedPalettes.length > 0 ? storedPalettes.length : 1;
  });
  const [tagInput, setTagInput] = useState('');
  const [paletteData, setPaletteData] = useState({
    colors: [{color: '#7BD3EA'}, {color: '#A1EEBD'}, {color: '#F6F7C4'}, {color: '#F6D6D6'}],
    tags: [],
    id: paletteCounter,
    likeCounter: 0,
  });

  const handleColorChange = (index, color) => {
    setPaletteData((prevData) => {
      const newColors = [...prevData.colors];
      newColors[index].color = color.hex;
      return {...prevData, colors: newColors};
    });
  };

  const handleTagChange = (event) => {
    const newTagInput = event.target.value;
    setTagInput(newTagInput);
  };

  const handleTagKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevents the default behavior of Enter (form submission)
      addTag();
    }
  };

  const addTag = () => {
    if (tagInput.trim() !== '') {
      setPaletteData((prevData) => {
        return {...prevData, tags: [...prevData.tags, tagInput.trim()]};
      });
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setPaletteData((prevData) => {
      return {...prevData, tags: prevData.tags.filter((tag) => tag !== tagToRemove)};
    });
  };

  const addPalette = () => {
    const existingPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
    const newPalette = {
      colors: [...paletteData.colors],
      tags: [...paletteData.tags],
      id: paletteCounter, // Use current value of state
      likeCounter: 1,
    };
    const newPalettes = [...existingPalettes, newPalette];
    localStorage.setItem('palettes', JSON.stringify(newPalettes));
    setPaletteCounter((prevCounter) => prevCounter + 1); // Increment the counter using setState
    setTagInput('');
  };

  return (
    <div className="relative dark:bg-slate-900">
      <HeroSection
        title={'Create Palette'}
        description={'Create Color Palette and Contribute to Coloors'}
      />
      <div className="myapp px-8 -mt-20">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 h-[25rem] mx-auto rounded-lg overflow-hidden shadow-lg">
          {paletteData.colors.map((color, index) => (
            <div
              key={index}
              style={{backgroundColor: color.color}}
              className={`group/item h-[30%] hover:h-[75%] transition-all duration-500 ease-in-out overflow-hidden bottom-0`}
            >
              <span className="invisible group-hover/item:visible absolute right-[12rem] top-50 bottom-50 p-1 text-gray-200 font-bold px-3 rounded-tr-lg cursor-pointer">
                <ChromePicker
                  color={color.color}
                  onChange={(newColor) => handleColorChange(index, newColor)}
                  width="300px"
                />
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full justify-center items-center mt-5">
          <div className="lg:w-1/3 py-1 align-items-center px-5 flex w-full border-solid border-2 border-gray-200 rounded-full text-sm focus:outline-none disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            <div className="flex flex-col w-full justify-center ">
              <input
                type="text"
                placeholder="Add Tags"
                value={tagInput}
                onChange={handleTagChange}
                onKeyDown={handleTagKeyDown}
                className="border-none m-0 p-0 mr-2 focus:border-white focus:ring-0"
              />
            </div>
            <div className="flex gap-2 overflow-x-hidden">
              {paletteData.tags.map((tag, index) => (
                <Button
                  key={index}
                  color="gray"
                  size="xs"
                >
                  {tag}
                  <MdClose
                    className="h-4 w-4"
                    onClick={() => removeTag(tag)}
                  />
                </Button>
              ))}
            </div>
          </div>
          <Button
            color="gray"
            className="mt-3"
            onClick={addPalette}
          >
            <BsSend className="mr-3 h-4 w-4" />
            Submit Palette
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CreatePalette;
