// PaletteContext.js
import {createContext, useContext, useState} from 'react';
const PaletteContext = createContext();

export const usePaletteContext = () => useContext(PaletteContext);

export const PaletteProvider = ({children}) => {
  const [tagInput, setTagInput] = useState('');
  const isStoredPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
  const [paletteCounter, setPaletteCounter] = useState(() => {
    const storedPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
    return storedPalettes.length > 0 ? storedPalettes.length : 1;
  });

  const [paletteData, setPaletteData] = useState({
    colors: [{color: '#7BD3EA'}, {color: '#A1EEBD'}, {color: '#F6F7C4'}, {color: '#F6D6D6'}],
    tags: [],
    id: paletteCounter,
    likeCounter: 0,
  });

  // Create Palette Code
  const CreatePalette = {
    handleColorChange: (index, color) => {
      setPaletteData((prevData) => {
        const newColors = [...prevData.colors];
        newColors[index].color = color.hex;
        return {...prevData, colors: newColors};
      });
    },
    handleTagChange: (event) => {
      const newTagInput = event.target.value;
      setTagInput(newTagInput);
    },
    handleTagKeyDown: (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        addTag();
      }
    },
    removeTag: (tagToRemove) => {
      setPaletteData((prevData) => {
        return {...prevData, tags: prevData.tags.filter((tag) => tag !== tagToRemove)};
      });
    },
    addPalette: () => {
      const existingPalettes = JSON.parse(localStorage.getItem('palettes')) || [];
      const newPalette = {
        colors: [...paletteData.colors],
        tags: [...paletteData.tags],
        id: paletteCounter,
        likeCounter: 1,
      };
      const newPalettes = [...existingPalettes, newPalette];
      localStorage.setItem('palettes', JSON.stringify(newPalettes));
      setPaletteCounter((prevCounter) => prevCounter + 1);
      setTagInput('');
    },
  };

  const addTag = () => {
    if (tagInput.trim() !== '') {
      setPaletteData((prevData) => {
        return {...prevData, tags: [...prevData.tags, tagInput.trim()]};
      });
      setTagInput('');
    }
  };

  return (
    <PaletteContext.Provider
      value={{CreatePalette, setTagInput, tagInput, paletteData, setPaletteData, isStoredPalettes}}
    >
      {children}
    </PaletteContext.Provider>
  );
};
