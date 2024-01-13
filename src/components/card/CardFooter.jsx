import {Button} from 'flowbite-react';
import React, {useState} from 'react';
import {BsHeart, BsHeartFill} from 'react-icons/bs';
import {MdOutlineOpenWith} from 'react-icons/md';
import OnlineViewModel from '../OnlineViewModel';

const CardFooter = ({isOpenView, likeValue, addLike, liked}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between text-lg pt-5 px-2">
        <div className="flex gap-2">
          <Button
            color="gray"
            size="sm"
            onClick={addLike}
          >
            {liked ? (
              <BsHeartFill
                size={18}
                color="red"
                className="mr-2"
              />
            ) : (
              <BsHeart
                size={20}
                className="mr-2"
              />
            )}

            {likeValue}
          </Button>
          {isOpenView ? (
            <>
              <Button
                color="gray"
                size="sm"
                onClick={() => setOpenModal(true)}
              >
                <MdOutlineOpenWith
                  size={20}
                  className="mr-2"
                />
                View
              </Button>
            </>
          ) : null}
        </div>
        <p className="text-gray-400 mr-4">6 hours</p>
      </div>
      <OnlineViewModel
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default CardFooter;
