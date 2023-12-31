import Image from 'next/image'

import '@fortawesome/fontawesome-free/css/all.min.css';
import BannerImage from './Components/BannerImage';
import ProductOverview from './Components/ProductOverview';
import ItemListCarausel from './Components/ItemListCaraousel';
import ProductDescription from './Components/ProductDescription';
import SliderComponent from './Components/SliderComponent';

export default function Home() {
  return (<>
    <BannerImage/>
    <ProductOverview/>
    <ItemListCarausel/>
    <ProductDescription/>
    <SliderComponent/>
    </>
  )
}
