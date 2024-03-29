import React from 'react';
import HeroSection from '../components/HeroSection';
import {Button} from 'flowbite-react';
import {ChromePicker} from 'react-color';
import {BsSend} from 'react-icons/bs';
import {MdClose} from 'react-icons/md';
import {usePaletteContext} from '../Context/PaletteContext';

const CreatePalette = () => {
  const {isStoredPalettes, CreatePalette, tagInput, paletteData} = usePaletteContext();
  const {handleColorChange, handleTagChange, handleTagKeyDown, removeTag, addPalette} =
    CreatePalette;

  return (
    <>
      <div className="min-h-screen relative dark:bg-slate-900">
        <h1>{name}</h1>
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
                  className="border-none m-0 p-0 mr-2 focus:ring-0 dark:bg-gray-900"
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
              className="mt-3 mb-48"
              onClick={addPalette}
            >
              <BsSend className="mr-3 h-4 w-4" />
              Submit Palette
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePalette;
