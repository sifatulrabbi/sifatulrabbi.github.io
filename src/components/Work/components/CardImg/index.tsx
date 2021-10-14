import React from 'react';
import { BGImg } from './styles';

interface Props {
  img: string;
}

const CardImg: React.FC<Props> = ({ img }) => {
  return <BGImg img={img}></BGImg>;
};

export default CardImg;
