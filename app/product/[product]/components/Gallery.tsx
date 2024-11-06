import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Fancybox from "@/components/Fancybox";

interface IGallery {
  img: string;
  title: string;
}

const Gallery: React.FC<IGallery> = ({ img, title }) => {
  return (
    <div>
      <Fancybox>
        <a href={img} data-fancybox data-caption={title}>
          <img src={img} alt="" style={{ maxWidth: 240, maxHeight: 240 }} />
        </a>
      </Fancybox>
    </div>
  );
};

export default Gallery;
